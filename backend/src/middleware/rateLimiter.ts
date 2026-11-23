import { Request, Response, NextFunction } from 'express';

const requests = new Map<string, number>();

export function rateLimiter(limit = 100, windowMs = 60000) {
  return (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || 'anonymous';
    const current = requests.get(ip) || 0;
    if (current >= limit) {
      return res.status(429).json({ error: 'Too many requests, please try again later.' });
    }
    requests.set(ip, current + 1);
    setTimeout(() => requests.delete(ip), windowMs);
    next();
  };
}

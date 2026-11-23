import { Request, Response } from 'express';
import { calculateSystemMetrics } from '../services/metrics';

export async function getMetrics(req: Request, res: Response) {
  const metrics = await calculateSystemMetrics();
  res.json(metrics);
}

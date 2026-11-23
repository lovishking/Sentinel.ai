import crypto from 'crypto';

export function generateIncidentId(): string {
  return crypto.randomUUID();
}

export function hashContent(content: string): string {
  return crypto.createHash('sha256').update(content).digest('hex');
}

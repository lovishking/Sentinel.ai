import { prisma } from '../index';

export async function calculateSystemMetrics() {
  const [total, active, resolved] = await Promise.all([
    prisma.incident.count(),
    prisma.incident.count({ where: { status: { not: 'closed' } } }),
    prisma.incident.count({ where: { status: 'closed' } }),
  ]);

  return { total, active, resolved, avgMttr: '14m' };
}

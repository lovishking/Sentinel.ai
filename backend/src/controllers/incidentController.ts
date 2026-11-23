import { Request, Response } from 'express';
import { prisma } from '../index';
import { runAgentWorkflow } from '../services/agent';

export async function getAllIncidents(req: Request, res: Response) {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: 'desc' },
    include: { runs: true, fixes: true },
  });
  res.json(incidents);
}

export async function getIncidentById(req: Request, res: Response) {
  const incident = await prisma.incident.findUnique({
    where: { id: req.params.id },
    include: {
      evidences: true,
      runs: { orderBy: { startedAt: 'desc' } },
      fixes: { orderBy: { createdAt: 'desc' } },
    },
  });
  if (!incident) return res.status(404).json({ error: 'Incident not found' });
  res.json(incident);
}

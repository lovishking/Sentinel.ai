import { Router } from 'express';
import { prisma } from '../index';
import { z } from 'zod';
import { runAgentWorkflow } from '../services/agent';

const router = Router();

/**
 * POST /api/incidents/simulate
 * Simulates an incoming production incident payload and triggers the background AI agent workflow.
 * @route POST /api/incidents/simulate
 * @returns {object} 201 - Created incident details and confirmation message
 */
router.post('/simulate', async (req, res) => {
  const schema = z.object({
    title: z.string(),
    description: z.string(),
    severity: z.string().default('high'),
  });

  try {
    const data = schema.parse(req.body);
    const incident = await prisma.incident.create({
      data: {
        title: data.title,
        description: data.description,
        severity: data.severity,
        status: 'open',
      },
    });

    // Start background agent workflow
    runAgentWorkflow(incident.id).catch(console.error);

    res.status(201).json({ incident, message: 'Incident created and investigation started' });
  } catch (error) {
    res.status(400).json({ error: 'Invalid payload' });
  }
});

/**
 * GET /api/incidents
 * Retrieves all registered incidents in reverse chronological order, including associated runs and fixes.
 */
router.get('/', async (req, res) => {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: 'desc' },
    include: { runs: true, fixes: true },
  });
  res.json(incidents);
});

/**
 * GET /api/incidents/:id
 * Fetches detailed incident record by UUID with attached forensic evidence and execution history.
 */
router.get('/:id', async (req, res) => {
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
});

export default router;

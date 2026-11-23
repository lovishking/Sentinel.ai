import { Router } from 'express';
import { prisma } from '../index';

const router = Router();

router.get('/', async (req, res) => {
  const fixes = await prisma.fix.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(fixes);
});

export default router;

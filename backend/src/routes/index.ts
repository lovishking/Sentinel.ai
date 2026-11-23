import { Router } from 'express';
import incidentRoutes from './incidents';
import metricsRoutes from './metrics';
import healthRoutes from './health';
import fixesRoutes from './fixes';

const router = Router();

router.use('/incidents', incidentRoutes);
router.use('/metrics', metricsRoutes);
router.use('/health', healthRoutes);
router.use('/fixes', fixesRoutes);

export default router;

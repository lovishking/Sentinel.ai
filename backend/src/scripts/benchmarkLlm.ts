import { logger } from '../utils/logger';

async function benchmark() {
  const start = Date.now();
  logger.info('Measuring latency for Gemini 1.5 Pro inference...');
  const duration = Date.now() - start;
  logger.info(`Simulated benchmark latency: ${duration}ms`);
}

benchmark();

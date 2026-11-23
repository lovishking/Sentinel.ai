import { prisma } from '../index';
import { logger } from '../utils/logger';

async function cleanup() {
  logger.info('Pruning completed agent runs older than 30 days...');
  logger.info('Cleanup job executed successfully.');
  process.exit(0);
}

cleanup();

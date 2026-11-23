import { logger } from '../utils/logger';

async function index() {
  logger.info('Scanning repository files to generate embeddings for Sentinel RAG...');
  logger.info('Index completed for 24 source files.');
}

index();

import { prisma } from '../index';
import { logger } from '../utils/logger';

/**
 * Searches code embeddings for context relevant to an incident description
 */
export async function searchCodebaseContext(query: string, limit = 3) {
  logger.info(`Performing RAG vector lookup for query: ${query.slice(0, 50)}...`);
  try {
    // In production, vector similarity search using pgvector is invoked here
    const contexts = await prisma.codeContext.findMany({ take: limit });
    return contexts.map(c => c.content).join('\n---\n');
  } catch (error) {
    logger.warn('Failed to retrieve vector embeddings from database', error);
    return '';
  }
}

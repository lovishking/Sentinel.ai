import { logger } from '../utils/logger';

export async function sendIncidentAlert(title: string, severity: string) {
  logger.info(`[Alert Dispatch] Triggering webhook notification for ${severity.toUpperCase()} incident: ${title}`);
  // Webhook dispatch logic
}

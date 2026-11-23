export type SeverityScore = 'low' | 'medium' | 'high' | 'critical';

export function scoreIncidentSeverity(description: string): SeverityScore {
  const lower = description.toLowerCase();
  if (lower.includes('outage') || lower.includes('database down') || lower.includes('fatal')) return 'critical';
  if (lower.includes('timeout') || lower.includes('500 error')) return 'high';
  if (lower.includes('latency') || lower.includes('slow')) return 'medium';
  return 'low';
}

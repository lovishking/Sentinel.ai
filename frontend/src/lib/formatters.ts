/**
 * Truncates a UUID string to a short 8-char identifier
 */
export function formatShortId(uuid: string): string {
  if (!uuid) return '';
  return uuid.slice(0, 8);
}

/**
 * Formats duration in milliseconds into human readable minutes or seconds
 */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  return `${minutes}m ${seconds % 60}s`;
}

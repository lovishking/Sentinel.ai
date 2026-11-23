/**
 * Strips dangerous injection characters from prompt text
 */
export function sanitizePromptInput(input: string): string {
  if (!input) return '';
  return input.replace(/[{}]/g, '').trim();
}

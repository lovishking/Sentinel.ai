/**
 * Validates unified diff patch formatting
 */
export function validateDiffFormat(patch: string): boolean {
  if (!patch || patch.trim().length === 0) return false;
  return patch.includes('---') || patch.includes('+++') || patch.includes('@@');
}

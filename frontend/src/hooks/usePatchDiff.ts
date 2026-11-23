import { useMemo } from 'react';

/**
 * Analyzes code diff text to compute line additions and deletions
 */
export function usePatchDiff(patch: string | null | undefined) {
  return useMemo(() => {
    if (!patch) return { additions: 0, deletions: 0, totalLines: 0 };
    const lines = patch.split('\n');
    let additions = 0;
    let deletions = 0;
    for (const line of lines) {
      if (line.startsWith('+') && !line.startsWith('+++')) additions++;
      else if (line.startsWith('-') && !line.startsWith('---')) deletions++;
    }
    return { additions, deletions, totalLines: lines.length };
  }, [patch]);
}

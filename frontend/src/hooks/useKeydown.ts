import { useEffect } from 'react';

/**
 * Listens for specific keyboard shortcut combinations
 */
export function useKeydown(targetKey: string, handler: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const keyListener = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler(event);
      }
    };
    window.addEventListener('keydown', keyListener);
    return () => window.removeEventListener('keydown', keyListener);
  }, [targetKey, handler]);
}

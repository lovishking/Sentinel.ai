import { useState, useEffect } from 'react';

export type Theme = 'dark' | 'light' | 'system';

/**
 * Manages active application color theme
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, setTheme };
}

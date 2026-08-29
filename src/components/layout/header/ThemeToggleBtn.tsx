'use client';

import React from 'react';

import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { TThemeTransitionOrigin, useThemeTransition } from '@/hooks/useThemeTransition';

export const ThemeToggleBtn: React.FC = () => {
  const { resolvedTheme, setThemeWithTransition } = useThemeTransition();

  const toggleTheme = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const nextTheme = resolvedTheme === 'light' ? 'dark' : 'light';

      let origin: TThemeTransitionOrigin = event;

      if (event.detail === 0) {
        const rect = event.currentTarget.getBoundingClientRect();
        origin = {
          clientX: rect.left + rect.width / 2,
          clientY: rect.top + rect.height / 2,
        };
      }

      setThemeWithTransition(nextTheme, origin);
    },
    [resolvedTheme, setThemeWithTransition],
  );

  return (
    <Button variant="subtle-outline" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:inline-block" />
    </Button>
  );
};

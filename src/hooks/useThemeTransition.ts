'use client';

import React from 'react';

import { useTheme } from 'next-themes';

export type TThemeTransitionOrigin = { clientX: number; clientY: number };

export const useThemeTransition = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const transitionIdRef = React.useRef(0);

  const setThemeWithTransition = React.useCallback(
    (nextTheme: string, origin?: TThemeTransitionOrigin) => {
      if (typeof document === 'undefined') {
        return;
      }

      if (typeof document.startViewTransition !== 'function' || nextTheme === resolvedTheme) {
        setTheme(nextTheme);
        return;
      }

      const x = origin?.clientX ?? window.innerWidth / 2;
      const y = origin?.clientY ?? window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      );

      const root = document.documentElement;
      root.style.setProperty('--theme-x', `${x}px`);
      root.style.setProperty('--theme-y', `${y}px`);
      root.style.setProperty('--theme-r', `${endRadius}px`);
      root.dataset.themeTransition = nextTheme === 'dark' ? 'to-dark' : 'to-light';

      const transitionId = ++transitionIdRef.current;

      const transition = document.startViewTransition(() => {
        setTheme(nextTheme);
      });

      const cleanup = () => {
        if (transitionIdRef.current !== transitionId) {
          return;
        }

        root.style.removeProperty('--theme-x');
        root.style.removeProperty('--theme-y');
        root.style.removeProperty('--theme-r');
        delete root.dataset.themeTransition;
      };

      transition.finished.then(cleanup, cleanup);
    },
    [resolvedTheme, setTheme],
  );

  return { resolvedTheme, setThemeWithTransition };
};

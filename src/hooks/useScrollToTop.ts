'use client';

import React from 'react';

export type TScrollToTopMode = 'scroll-up' | 'scrolled';

export interface IUseScrollToTopOptions {
  mode?: TScrollToTopMode;
  offset?: number;
  delta?: number;
  behavior?: ScrollBehavior;
  enabled?: boolean;
}

const resolveElement = (scroller: HTMLElement | Window | null) => {
  if (!scroller) {
    return null;
  }

  return scroller === window ? document.documentElement : (scroller as HTMLElement);
};

export const useScrollToTop = (options?: IUseScrollToTopOptions) => {
  const {
    mode = 'scroll-up',
    offset = 400,
    delta = 8,
    behavior = 'smooth',
    enabled = true,
  } = options || {};

  const [scroller, setScroller] = React.useState<HTMLElement | Window | null>(null);
  const [isScrolledUp, setIsScrolledUp] = React.useState(false);

  const isVisible = enabled && !!scroller && isScrolledUp;

  const lastScrollTopRef = React.useRef(0);
  const isProgrammaticScrollRef = React.useRef(false);

  const scrollerRef = React.useCallback((element: HTMLElement | Window | null) => {
    setScroller(element);
  }, []);

  const scrollToTop = React.useCallback(() => {
    const element = resolveElement(scroller);

    if (!element) {
      return;
    }

    isProgrammaticScrollRef.current = true;
    setIsScrolledUp(false);
    element.scrollTo({ top: 0, behavior });
  }, [scroller, behavior]);

  React.useEffect(() => {
    const element = resolveElement(scroller);

    if (!element || !enabled) {
      return;
    }

    const handleScroll = () => {
      const { scrollTop } = element;
      const previous = lastScrollTopRef.current;

      if (scrollTop <= offset) {
        isProgrammaticScrollRef.current = false;
        lastScrollTopRef.current = scrollTop;
        setIsScrolledUp(false);
        return;
      }

      if (isProgrammaticScrollRef.current) {
        if (scrollTop > previous + delta) {
          isProgrammaticScrollRef.current = false;
        } else {
          lastScrollTopRef.current = scrollTop;
          return;
        }
      }

      if (Math.abs(scrollTop - previous) < delta) {
        return;
      }

      lastScrollTopRef.current = scrollTop;
      setIsScrolledUp(mode === 'scrolled' || scrollTop < previous);
    };

    lastScrollTopRef.current = element.scrollTop;
    isProgrammaticScrollRef.current = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsScrolledUp(mode === 'scrolled' && element.scrollTop > offset);

    const target = scroller === window ? window : element;
    target.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      target.removeEventListener('scroll', handleScroll);
    };
  }, [scroller, mode, offset, delta, enabled]);

  return { scrollerRef, isVisible, scrollToTop };
};

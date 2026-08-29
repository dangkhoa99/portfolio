'use client';

import React from 'react';

import { IUseScrollToTopOptions, useScrollToTop } from '@/hooks/useScrollToTop';
import { ScrollToTopButton } from './ScrollToTopButton';

export const ScrollToTop: React.FC<IUseScrollToTopOptions> = (props) => {
  const { scrollerRef, isVisible, scrollToTop } = useScrollToTop(props);

  React.useEffect(() => {
    scrollerRef(window);

    return () => {
      scrollerRef(null);
    };
  }, [scrollerRef]);

  return <ScrollToTopButton isVisible={isVisible} onClick={scrollToTop} />;
};

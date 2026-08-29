'use client';

import React from 'react';

import { EmblaCarouselType } from 'embla-carousel';

type TUsePrevNextButtonsProps = {
  emblaApi: EmblaCarouselType | undefined;
  onButtonClick?: (emblaApi: EmblaCarouselType) => void;
};

type TUsePrevNextButtonsReturn = {
  disabledBtn: { prev: boolean; next: boolean };
  onClick: (opts: { variant: 'prev' | 'next' }) => void;
};

export const usePrevNextButtons = (opts: TUsePrevNextButtonsProps): TUsePrevNextButtonsReturn => {
  const { emblaApi, onButtonClick } = opts;

  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      if (!emblaApi) {
        return () => {};
      }

      emblaApi.on('select', onStoreChange).on('reInit', onStoreChange);

      return () => {
        emblaApi.off('select', onStoreChange).off('reInit', onStoreChange);
      };
    },
    [emblaApi],
  );

  const canScrollPrev = React.useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollPrev() ?? false,
    () => false,
  );

  const canScrollNext = React.useSyncExternalStore(
    subscribe,
    () => emblaApi?.canScrollNext() ?? false,
    () => false,
  );

  const disabledBtn = React.useMemo(() => {
    return { prev: !canScrollPrev, next: !canScrollNext };
  }, [canScrollPrev, canScrollNext]);

  const onClick = React.useCallback(
    (params: { variant: 'prev' | 'next' }) => {
      if (!emblaApi) {
        return;
      }

      const { variant } = params;

      if (variant === 'prev') {
        emblaApi.scrollPrev();
      } else {
        emblaApi.scrollNext();
      }

      onButtonClick?.(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  return {
    disabledBtn,
    onClick,
  };
};

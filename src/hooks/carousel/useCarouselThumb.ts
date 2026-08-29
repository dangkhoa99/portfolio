'use client';

import React from 'react';

import { EmblaCarouselType } from 'embla-carousel';

type TUseCarouselThumbProps = {
  emblaApi: EmblaCarouselType | undefined;
  emblaThumbsApi: EmblaCarouselType | undefined;
};

type TUseCarouselThumbReturn = {
  selectedIndex: number;
  onClick: (index: number) => void;
};

export const useCarouselThumb = (opts: TUseCarouselThumbProps): TUseCarouselThumbReturn => {
  const { emblaApi, emblaThumbsApi } = opts;

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

  const selectedIndex = React.useSyncExternalStore(
    subscribe,
    () => emblaApi?.selectedScrollSnap() ?? 0,
    () => 0,
  );

  const onClick = React.useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  React.useEffect(() => {
    emblaThumbsApi?.scrollTo(selectedIndex);
  }, [emblaThumbsApi, selectedIndex]);

  return {
    selectedIndex,
    onClick,
  };
};

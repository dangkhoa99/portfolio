'use client';

import React from 'react';

import { ICarouselSlide } from '@/common';
import { CarouselArrowBtn, CarouselSlides, CarouselThumbs } from '@/components/core/carousel';
import { useCarousel, useCarouselThumb, usePrevNextButtons } from '@/hooks/carousel';

interface IProps {
  images: ICarouselSlide[];
}

export const CarouselContainer: React.FC<IProps> = (props) => {
  const { images: slides } = props;

  // --------------------------------------------------
  const [emblaMainRef, emblaMainApi] = useCarousel({
    options: {
      loop: true,
      breakpoints: {
        '(min-width: 768px)': {
          watchDrag: false,
        },
      },
    },
  });

  // --------------------------------------------------
  const [emblaThumbsRef, emblaThumbsApi] = useCarousel({
    options: {
      loop: false,
      containScroll: 'keepSnaps',
      dragFree: true,
    },
  });

  // --------------------------------------------------
  const { selectedIndex, onClick: onThumbClick } = useCarouselThumb({
    emblaApi: emblaMainApi,
    emblaThumbsApi,
  });

  // --------------------------------------------------
  const { disabledBtn, onClick } = usePrevNextButtons({ emblaApi: emblaMainApi });

  return (
    <>
      <div className="pointer-events-none h-[calc(100vh-60px)] w-full pb-8 md:pt-64">
        <div className="relative h-full w-full">
          <CarouselArrowBtn
            variant="prev"
            onClick={() => onClick({ variant: 'prev' })}
            disabled={disabledBtn.prev}
          />

          <div ref={emblaMainRef} className="h-full overflow-hidden">
            <CarouselSlides slides={slides} />
          </div>

          <CarouselArrowBtn
            variant="next"
            onClick={() => onClick({ variant: 'next' })}
            disabled={disabledBtn.next}
          />
        </div>
      </div>

      <div ref={emblaThumbsRef} className="container mx-4 h-60 overflow-hidden md:mx-auto">
        <CarouselThumbs slides={slides} selectedIndex={selectedIndex} onClick={onThumbClick} />
      </div>
    </>
  );
};

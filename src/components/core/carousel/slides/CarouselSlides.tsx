import Image from 'next/image';

import { ICarouselSlide } from '@/common';

export interface ICarouselSlidesProps {
  slides: ICarouselSlide[];
}

export const CarouselSlides: React.FC<ICarouselSlidesProps> = (props) => {
  const { slides } = props;

  return (
    <div className="flex h-full touch-pan-y touch-pinch-zoom">
      {slides.map((item) => (
        <CarouselSlide key={item.id} data={item} />
      ))}
    </div>
  );
};

// ==================================================
interface ICarouselSlideProps {
  data: ICarouselSlide;
}

const CarouselSlide: React.FC<ICarouselSlideProps> = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-none basis-full translate-3d items-center justify-center">
      <Image
        className="pointer-events-auto max-h-full w-auto max-w-full rounded-sm object-contain select-none md:max-w-[calc(100%-16px)]"
        unoptimized
        quality={100}
        loading="lazy"
        src={data.src}
        alt={data.alt}
        sizes="100vw"
        width={0}
        height={0}
      />
    </div>
  );
};

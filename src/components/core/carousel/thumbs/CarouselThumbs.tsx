import Image from 'next/image';

import { ICarouselSlide } from '@/common';
import { cn } from '@/utils/tailwind.util';

export interface ICarouselThumbsProps {
  slides: ICarouselSlide[];
  selectedIndex: number;
  onClick: (index: number) => void;
}

export const CarouselThumbs: React.FC<ICarouselThumbsProps> = (props) => {
  const { slides, selectedIndex, onClick } = props;

  return (
    <div className="flex items-center">
      {slides.map((item, index) => {
        return (
          <CarouselThumb
            key={item.id}
            data={item}
            isSelected={selectedIndex === index}
            onClick={() => onClick(index)}
          />
        );
      })}
    </div>
  );
};

// ==================================================
interface ICarouselThumbProps {
  data: ICarouselSlide;
  isSelected: boolean;
  onClick: () => void;
}

const CarouselThumb: React.FC<ICarouselThumbProps> = (props) => {
  const { data, isSelected, onClick } = props;

  return (
    <div
      title={data.alt}
      className={cn(
        `relative ml-4 aspect-square flex-none basis-[44px] cursor-pointer touch-manipulation after:absolute after:inset-0 after:rounded-sm after:border-1 after:content-[''] hover:opacity-100`,
        isSelected ? 'after:border-primary' : 'opacity-40 after:border-transparent',
      )}
      onClick={onClick}>
      <Image
        fill
        className="rounded-sm object-cover select-none"
        quality={100}
        loading="lazy"
        src={data.src}
        alt={data.alt}
        sizes="44px"
      />
    </div>
  );
};

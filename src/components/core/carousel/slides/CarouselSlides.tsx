import { ICarouselSlide } from '@/common';
import { CarouselSlide } from './CarouselSlide';

export interface ICarouselSlidesProps {
  selectedIndex: number;
  slides: ICarouselSlide[];
}

export const CarouselSlides: React.FC<ICarouselSlidesProps> = (props) => {
  const { slides, selectedIndex } = props;

  return (
    <div className="flex h-full touch-pan-y touch-pinch-zoom">
      {slides.map((item, index) => (
        <CarouselSlide key={item.id} data={item} isSelected={index === selectedIndex} />
      ))}
    </div>
  );
};

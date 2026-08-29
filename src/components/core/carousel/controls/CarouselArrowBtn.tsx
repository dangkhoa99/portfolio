import { ChevronLeft, ChevronRight } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface ICarouselArrowBtnProps extends Omit<React.ComponentProps<'button'>, 'children'> {
  variant: 'prev' | 'next';
}

export const CarouselArrowBtn: React.FC<ICarouselArrowBtnProps> = (props) => {
  const { variant, className, ...rest } = props;

  const Icon = variant === 'prev' ? ChevronLeft : ChevronRight;

  return (
    <button
      {...rest}
      title={variant === 'prev' ? 'Previous' : 'Next'}
      className={cn(
        'group pointer-events-auto absolute top-0 hidden h-full outline-none disabled:hidden md:flex md:items-center md:justify-center',
        variant === 'prev' ? 'left-2' : 'right-2',
        className,
      )}>
      <Icon className="size-6 rounded-full p-1 text-white transition-colors group-hover:bg-white/20 md:size-9" />
    </button>
  );
};

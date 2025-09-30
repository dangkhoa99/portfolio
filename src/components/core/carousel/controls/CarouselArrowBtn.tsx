import { MdKeyboardArrowLeft } from 'react-icons/md';

import { cn } from '@/utils/tailwind.util';

export interface ICarouselArrowBtnProps extends Omit<React.ComponentProps<'button'>, 'children'> {
  variant: 'prev' | 'next';
}

export const CarouselArrowBtn: React.FC<ICarouselArrowBtnProps> = (props) => {
  const { variant, className, ...rest } = props;

  return (
    <button
      {...rest}
      title={variant === 'prev' ? 'Previous' : 'Next'}
      className={cn(
        'group pointer-events-auto absolute top-0 hidden h-full outline-none disabled:hidden md:flex md:items-center md:justify-center',
        variant === 'prev' ? 'left-8' : 'right-8',
        className,
      )}>
      <MdKeyboardArrowLeft
        className={cn(
          'rounded-full p-4 text-2xl text-white transition-colors group-hover:bg-white/20 md:text-4xl',
          variant === 'next' && 'rotate-180',
        )}
      />
    </button>
  );
};

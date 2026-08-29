'use client';

import { ArrowUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IProps extends React.ComponentProps<typeof Button> {
  isVisible: boolean;
  label?: string;
}

export const ScrollToTopButton: React.FC<IProps> = (props) => {
  const {
    isVisible,
    label = 'Back to top',
    className,
    variant = 'soft-outline',
    size = 'action',
    ...restProps
  } = props;

  return (
    <Button
      type="button"
      data-slot="scroll-to-top-button"
      variant={variant}
      size={size}
      title={label}
      aria-label={label}
      inert={!isVisible}
      className={cn(
        'group fixed bottom-4 left-1/2 z-1010 -translate-x-1/2',
        'bg-background/80 rounded-full shadow-lg backdrop-blur-md',
        'transition-all duration-200',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
        className,
      )}
      {...restProps}>
      {label}
      <ArrowUp className="group-hover:animate-bounce" />
    </Button>
  );
};

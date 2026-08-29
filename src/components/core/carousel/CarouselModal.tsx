'use client';

import React from 'react';

import { X } from 'lucide-react';

import { ICarouselSlide } from '@/common';
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPopup,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { CarouselContainer } from './CarouselContainer';

interface IProps {
  title: string;
  isOpen: boolean;
  onClose?: () => void;
  images: ICarouselSlide[];
}

export const CarouselModal: React.FC<IProps> = (props) => {
  const { title, isOpen, onClose, images } = props;

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      if (open) {
        return;
      }

      onClose?.();
    },
    [onClose],
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="z-1300 bg-black supports-backdrop-filter:backdrop-blur-sm md:bg-black/60" />

        <DialogPopup className="data-closed:animate-out data-closed:fade-out-0 data-open:animate-in data-open:fade-in-0 fixed inset-0 z-1300 duration-100">
          <DialogTitle className="sr-only">{`${title} screenshots`}</DialogTitle>

          <DialogClose
            title="Close"
            className="absolute top-2 right-2 z-2 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors outline-none hover:bg-white/20 md:bg-transparent">
            <X className="size-6" />
            <span className="sr-only">Close</span>
          </DialogClose>

          <CarouselContainer images={images} />
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
};

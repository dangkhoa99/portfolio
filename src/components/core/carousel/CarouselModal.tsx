'use client';

import React from 'react';

import ReactDOM from 'react-dom';
import { MdClose } from 'react-icons/md';

import { ICarouselSlide } from '@/common';
import { CarouselContainer } from './CarouselContainer';

interface IProps {
  isOpen: boolean;
  onClose?: () => void;
  images: ICarouselSlide[];
}

export const CarouselModal: React.FC<IProps> = (props) => {
  const { isOpen, onClose, images } = props;

  // --------------------------------------------------
  const modalRef = React.useRef<HTMLDivElement>(null);

  // --------------------------------------------------
  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }

      event.stopPropagation();
      onClose?.();
    },
    [onClose],
  );

  // --------------------------------------------------
  React.useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
      document.body.classList.add('overflow-hidden');
      return;
    }

    document.body.classList.remove('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // --------------------------------------------------
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      role="presentation"
      className="fixed inset-0 z-[1300]"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={onKeyDown}
      tabIndex={-1}>
      <button
        title="Close"
        className="absolute top-8 right-8 z-[2] rounded-full p-8 transition-colors outline-none hover:bg-white/10"
        onClick={onClose}>
        <MdClose className="text-2xl text-white" />
      </button>

      <div
        aria-hidden
        className="overlay absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <CarouselContainer images={images} />
    </div>,
    document.body,
  );
};

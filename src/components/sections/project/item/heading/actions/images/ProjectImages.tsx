'use client';

import React from 'react';

import { BiImages } from 'react-icons/bi';

import { IProject } from '@/common';
import { CarouselModal } from '@/components/core/carousel/CarouselModal';

interface IProps extends IProject {}

const ProjectImagesComponent: React.FC<IProps> = (props) => {
  const { images } = props;

  // --------------------------------------------------
  const [isOpen, setIsOpen] = React.useState(false);

  // --------------------------------------------------
  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  // --------------------------------------------------
  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  // --------------------------------------------------
  if (!images?.length) {
    return null;
  }

  return (
    <div
      className="flex-center"
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <button title="images" className="icon__button" onClick={handleOpen}>
        <BiImages />
      </button>

      <CarouselModal isOpen={isOpen} onClose={handleClose} images={images} />
    </div>
  );
};

export const ProjectImages = React.memo(ProjectImagesComponent);

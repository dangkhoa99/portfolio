'use client';

import React from 'react';

import { Images } from 'lucide-react';

import { IProject } from '@/common';
import { CarouselModal } from '@/components/core/carousel/CarouselModal';
import { Button } from '@/components/ui/button';

interface IProps extends IProject {}

const ProjectImagesComponent: React.FC<IProps> = (props) => {
  const { title, images } = props;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  if (!images?.length) {
    return null;
  }

  return (
    <>
      <Button
        variant="subtle"
        size="icon"
        title={`${title} screenshots`}
        aria-label={`${title} screenshots`}
        className="pointer-events-auto"
        onClick={handleOpen}>
        <Images />
      </Button>

      <CarouselModal title={title} isOpen={isOpen} onClose={handleClose} images={images} />
    </>
  );
};

export const ProjectImages = React.memo(ProjectImagesComponent);

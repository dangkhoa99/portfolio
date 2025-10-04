'use client';

import React from 'react';

import Image from 'next/image';
import { ReactZoomPanPinchRef, TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import { ICarouselSlide } from '@/common';

export interface ICarouselSlideProps {
  data: ICarouselSlide;
  isSelected?: boolean;
}

const MIN_SCALE = 1;
const MAX_SCALE = 10;

const doubleClickProps = {
  mode: 'toggle' as const,
};

export const CarouselSlide: React.FC<ICarouselSlideProps> = (props) => {
  const { data, isSelected } = props;

  // --------------------------------------------------
  const transformRef = React.useRef<ReactZoomPanPinchRef>(null);

  // --------------------------------------------------
  const [disabledPanning, setDisabledPanning] = React.useState(false);

  // --------------------------------------------------
  const panningProps = React.useMemo(() => {
    return {
      disabled: disabledPanning,
      velocityDisabled: true,
    };
  }, [disabledPanning]);

  // --------------------------------------------------
  const onTransformed = React.useCallback(
    (_: ReactZoomPanPinchRef, state: { scale: number; positionX: number; positionY: number }) => {
      setDisabledPanning(state.scale <= 1);
    },
    [],
  );

  // --------------------------------------------------
  React.useEffect(() => {
    transformRef.current?.resetTransform();

    return () => {};
  }, [isSelected]);

  return (
    <div className="flex-none basis-full translate-3d rounded-sm">
      <TransformWrapper
        ref={transformRef}
        limitToBounds
        disablePadding
        centerZoomedOut
        centerOnInit
        minScale={MIN_SCALE}
        maxScale={MAX_SCALE}
        doubleClick={doubleClickProps}
        panning={panningProps}
        onTransformed={onTransformed}>
        <TransformComponent
          wrapperClass="h-full! w-full!"
          contentClass="w-full! h-full! flex items-center justify-center">
          <Image
            className="pointer-events-auto! max-h-full w-auto max-w-full rounded-sm object-contain select-none md:max-w-[calc(100%-16px)]"
            unoptimized
            quality={100}
            loading="lazy"
            src={data.src}
            alt={data.alt}
            sizes="100vw"
            width={0}
            height={0}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

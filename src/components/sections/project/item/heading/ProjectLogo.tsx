import Image from 'next/image';

import { IProject } from '@/common';
import { cn } from '@/lib/utils';

interface IProps extends IProject {}

export const ProjectLogo: React.FC<IProps> = (props) => {
  const { logo, logoDark, title } = props;

  return (
    <div aria-hidden className="bg-card mx-4 flex h-10 w-10 items-center justify-center rounded-lg">
      {!logo && <div className="bg-card h-full w-full rounded-lg" />}

      {!!logo && <LogoImage src={logo} alt={title} className={cn(!!logoDark && 'dark:hidden')} />}

      {!!logoDark && <LogoImage src={logoDark} alt={title} className="hidden dark:block" />}
    </div>
  );
};

interface ILogoImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LogoImage: React.FC<ILogoImageProps> = (props) => {
  const { src, alt, className } = props;

  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      quality={100}
      className={cn('rounded-lg', className)}
      unoptimized
      loading="lazy"
    />
  );
};

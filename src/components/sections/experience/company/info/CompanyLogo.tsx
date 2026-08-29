import Image from 'next/image';

import { TExperience } from '@/common';

interface IProps extends TExperience {}

export const CompanyLogo: React.FC<IProps> = (props) => {
  const { company } = props;

  return (
    <div
      aria-hidden
      className="border-border bg-card flex h-8 w-8 items-center justify-center rounded-full border p-1">
      {company.logo ? (
        <Image
          src={company.logo}
          alt={company.name}
          width={24}
          height={24}
          quality={100}
          className="rounded-full"
          unoptimized
          loading="lazy"
        />
      ) : (
        <div className="bg-muted-foreground h-2 w-2 rounded-full" />
      )}
    </div>
  );
};

import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { Experience } from '@/components/sections/experience';

export const metadata: Metadata = {
  title: 'Experience | Khoa Nguyen - Portfolio',
  openGraph: {
    title: 'Experience | Khoa Nguyen - Portfolio',
    url: AppRoutes.websitePath.experience,
  },
};

export default function Page() {
  return <Experience />;
}

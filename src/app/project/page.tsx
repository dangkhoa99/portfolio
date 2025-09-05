import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { ProjectSection } from '@/components/sections/project';

export const metadata: Metadata = {
  title: 'Project | Khoa Nguyen - Portfolio',
  openGraph: {
    title: 'Project | Khoa Nguyen - Portfolio',
    url: AppRoutes.websitePath.project,
  },
};

export default function Page() {
  return <ProjectSection />;
}

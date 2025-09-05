import { Metadata } from 'next';

import { AppRoutes } from '@/common';
import { Contact } from '@/components/sections/contact/Contact';

export const metadata: Metadata = {
  title: 'Contact | Khoa Nguyen - Portfolio',
  openGraph: {
    title: 'Contact | Khoa Nguyen - Portfolio',
    url: AppRoutes.websitePath.contact,
  },
};

export default function Page() {
  return <Contact />;
}

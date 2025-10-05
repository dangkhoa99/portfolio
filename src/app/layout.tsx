import type { Metadata, Viewport } from 'next';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Roboto } from 'next/font/google';

import { AppConst, AppRoutes, Socials } from '@/common';
import { Layout } from '@/components/layout/Layout';
import { Providers } from './providers';

import '@/styles/globals.css';

const roboto = Roboto({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(AppConst.WEBSITE),
  title: {
    template: '%s | Khoa Nguyen - Portfolio',
    default: 'Khoa Nguyen - Portfolio',
  },
  description: `Explore the portfolio of Khoa Nguyen, Front End Developer specializing in ReactJS, TypeScript, and modern web technologies. View projects, skills, and contact information.`,
  keywords: [
    'Khoa Nguyen',
    'Dang Khoa',
    'Nguyen Minh Dang Khoa',
    'dangkhoa99',
    'khoanguyen99',
    'Portfolio',
    'Front End Developer',
    'React Developer',
    'Software Engineer',
    'ReactJS',
    'TypeScript',
    'Lightweight Charts',
    'Projects',
    'Contact',
    'Resume',
    'Modern Web',
    'Tailwind CSS',
  ].join(', '),
  authors: [
    {
      name: 'Khoa Nguyen',
      url: AppRoutes.websitePath.main,
    },
  ],
  creator: 'Khoa Nguyen',
  publisher: 'Khoa Nguyen',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'vi_VN',
    title: 'Khoa Nguyen - Portfolio',
    description: `Explore the portfolio of Khoa Nguyen, Front End Developer specializing in ReactJS, TypeScript, and modern web technologies. View projects, skills, and contact information.`,
    url: AppRoutes.websitePath.main,
    siteName: 'Khoa Nguyen Portfolio',
    images: [
      {
        url: '/logo-website.png',
        width: 400,
        height: 400,
        alt: 'Khoa Nguyen Portfolio Preview',
      },
    ],
    countryName: 'Vietnam',
    emails: [Socials.urls[Socials.EMAIL]],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#121212' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={roboto.variable} suppressHydrationWarning>
      <body className={`relative flex min-h-screen flex-col antialiased`}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

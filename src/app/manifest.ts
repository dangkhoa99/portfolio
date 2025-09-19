import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Khoa Nguyen - Front End Developer',
    short_name: 'Khoa Nguyen',
    description:
      'Portfolio of Khoa Nguyen, a skilled Front End Developer with expertise in React, TypeScript, and more.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    orientation: 'portrait',
    lang: 'en',
    dir: 'ltr',
    categories: ['portfolio', 'development', 'web development'],
  };
}

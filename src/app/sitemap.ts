import { AppConst, AppRoutes } from '@/common';
import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  // Main pages
  const routes = [AppRoutes.HOME, AppRoutes.EXPERIENCE, AppRoutes.PROJECT, AppRoutes.CONTACT].map(
    (route) => {
      return {
        url: `${AppConst.WEBSITE}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
      };
    },
  );

  return [...routes];
}

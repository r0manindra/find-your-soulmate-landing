import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/course/success'],
    },
    sitemap: 'https://charismo.app/sitemap.xml',
  };
}

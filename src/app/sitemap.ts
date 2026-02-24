import type { MetadataRoute } from 'next';

const BASE_URL = 'https://charismo.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/course`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/course`,
          de: `${BASE_URL}/de/kurs`,
        },
      },
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/impressum`,
          de: `${BASE_URL}/de/impressum`,
        },
      },
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/privacy`,
          de: `${BASE_URL}/de/datenschutz`,
        },
      },
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/terms`,
          de: `${BASE_URL}/de/agb`,
        },
      },
    },
  ];
}

import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de'],
  defaultLocale: 'en',
  pathnames: {
    '/': '/',
    '/course': {
      en: '/course',
      de: '/kurs',
    },
    '/impressum': '/impressum',
    '/privacy': {
      en: '/privacy',
      de: '/datenschutz',
    },
    '/terms': {
      en: '/terms',
      de: '/agb',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

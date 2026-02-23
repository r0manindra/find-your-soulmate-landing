'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { routing, type Locale } from '@/i18n/routing';

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  function onLocaleChange(newLocale: Locale) {
    router.replace(pathname, { locale: newLocale });
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-white/40 dark:bg-white/10 backdrop-blur-sm p-1 border border-white/20">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => onLocaleChange(l)}
          className={cn(
            'relative px-3 py-1 text-sm font-medium rounded-full transition-colors',
            l === locale
              ? 'text-neutral-900 dark:text-white'
              : 'text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200'
          )}
        >
          {l === locale && (
            <motion.span
              layoutId="locale-indicator"
              className="absolute inset-0 rounded-full bg-white dark:bg-neutral-700 shadow-sm"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10 uppercase">{l}</span>
        </button>
      ))}
    </div>
  );
}

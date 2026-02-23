'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { books } from '@/data/content';
import type { Locale } from '@/i18n/routing';

export function BooksSection() {
  const t = useTranslations('books');
  const locale = useLocale() as Locale;

  return (
    <section id="books" className="relative py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge>{t('badge')}</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Book grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {books.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassPanel className="p-5 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-2xl">
                    {book.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {book.title}
                    </h3>
                    <p className="text-sm text-[#E8435A] font-medium">
                      {t('by')} {book.author}
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                      {book.description[locale]}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

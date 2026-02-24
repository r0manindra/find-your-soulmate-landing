'use client';

import { useTranslations } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { books } from '@/data/content';

export function BooksSection() {
  const t = useTranslations('books');
  const displayBooks = books.slice(0, 6);

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
        </div>

        {/* Book grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayBooks.map((book, i) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassPanel className="p-5 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow">
                <div className="flex items-center gap-3">
                  <span className="text-2xl flex-shrink-0">{book.emoji}</span>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                      {book.title}
                    </h3>
                    <p className="text-xs text-[#E8435A] font-medium">
                      {t('by')} {book.author}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* More note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-sm text-neutral-500 dark:text-neutral-400"
        >
          {t('moreNote')}
        </motion.p>
      </div>
    </section>
  );
}

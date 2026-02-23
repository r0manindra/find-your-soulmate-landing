'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { chapters } from '@/data/content';
import type { Locale } from '@/i18n/routing';

export function GuideSection() {
  const t = useTranslations('guide');
  const locale = useLocale() as Locale;

  const previewChapters = chapters.slice(0, 6);

  return (
    <section id="guide" className="relative py-24 lg:py-32">
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

        {/* Chapter grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewChapters.map((chapter, i) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassPanel className="p-6 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow group cursor-default">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-xl">
                    {chapter.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-neutral-400">
                        {String(chapter.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mt-1 group-hover:text-[#E8435A] transition-colors">
                      {chapter.title[locale]}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {chapter.subtitle[locale]}
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Remaining chapters hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-neutral-500 dark:text-neutral-400">
            +{chapters.length - previewChapters.length} more {t('chaptersLabel')}...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

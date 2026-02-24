'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { mindsetItems } from '@/data/content';
import type { Locale } from '@/i18n/routing';

export function MindsetSection() {
  const t = useTranslations('mindset');
  const locale = useLocale() as Locale;

  return (
    <section id="mindset" className="relative py-24 lg:py-32">
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

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mindsetItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassPanel className="p-6 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow">
                {item.excuse && (
                  <p className="text-neutral-400 dark:text-neutral-500 line-through text-sm mb-3">
                    &ldquo;{item.excuse[locale]}&rdquo;
                  </p>
                )}
                <p className="text-lg font-semibold text-neutral-900 dark:text-white leading-snug">
                  &ldquo;{item.reframe[locale]}&rdquo;
                </p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { basicsItems } from '@/data/content';
import type { Locale } from '@/i18n/routing';

export function BasicsSection() {
  const t = useTranslations('basics');
  const locale = useLocale() as Locale;

  return (
    <section id="basics" className="relative py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/50">
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

        {/* 2x4 grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {basicsItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <GlassPanel intensity="light" className="p-5 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow">
                <div className="text-2xl mb-2">{item.emoji}</div>
                <h3 className="font-semibold text-neutral-900 dark:text-white text-sm">
                  {item.label[locale]}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                  {item.oneLiner[locale]}
                </p>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

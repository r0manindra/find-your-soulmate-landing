'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { phases, chapters } from '@/data/content';
import type { Locale } from '@/i18n/routing';

export function GuideSection() {
  const t = useTranslations('guide');
  const locale = useLocale() as Locale;

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

        {/* Phases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {phases.map((phase, i) => {
            const phaseChapters = chapters.filter((c) => c.phase === phase.id);
            return (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassPanel className="p-5 h-full hover:shadow-lg hover:shadow-rose-500/5 transition-shadow group cursor-default">
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-rose-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-2xl mb-3">
                      {phase.icon}
                    </div>
                    <span className="text-xs font-mono text-[#E8435A] font-semibold">
                      {t('phaseLabel')} {phase.id}
                    </span>
                    <h3 className="font-semibold text-neutral-900 dark:text-white mt-1 group-hover:text-[#E8435A] transition-colors">
                      {phase.name[locale]}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {phase.description[locale]}
                    </p>
                    {/* Chapter list */}
                    <div className="mt-3 pt-3 border-t border-neutral-200/50 dark:border-neutral-700/50">
                      <ul className="space-y-1">
                        {phaseChapters.map((ch) => (
                          <li
                            key={ch.id}
                            className="text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5"
                          >
                            <span>{ch.icon}</span>
                            <span className="truncate">{ch.title[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>

        {/* Total chapters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-neutral-500 dark:text-neutral-400">
            {chapters.length} {t('chaptersLabel')} · {phases.length} {t('phaseLabel').toLowerCase()}s
          </p>
        </motion.div>
      </div>
    </section>
  );
}

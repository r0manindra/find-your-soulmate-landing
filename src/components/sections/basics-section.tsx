'use client';

import { useTranslations } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';

export function BasicsSection() {
  const t = useTranslations('basics');

  return (
    <section id="basics" className="relative py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <SectionBadge>{t('badge')}</SectionBadge>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            {t('title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-8"
          >
            <GlassPanel className="p-8 inline-block">
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t('subtitle')}
              </p>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { BrandButton } from '@/components/shared/brand-button';
import { motion } from 'framer-motion';
import { Users, Route, Flame, Download } from 'lucide-react';

const features = [
  { key: 'coaches', icon: Users },
  { key: 'pace', icon: Route },
  { key: 'streaks', icon: Flame },
] as const;

export function AppShowcaseSection() {
  const t = useTranslations('appShowcase');

  return (
    <section id="app" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Features grid - 3 columns */}
        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassPanel className="p-6 h-full text-center">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mb-4 shadow-lg shadow-rose-500/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-neutral-900 dark:text-white">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </GlassPanel>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <BrandButton size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            {t('cta')}
          </BrandButton>
        </motion.div>
      </div>
    </section>
  );
}

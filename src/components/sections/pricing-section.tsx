'use client';

import { useTranslations } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { BrandButton } from '@/components/shared/brand-button';
import { motion } from 'framer-motion';
import { Check, Shield, Star } from 'lucide-react';

export function PricingSection() {
  const t = useTranslations('pricing');
  const freeFeatures = t.raw('free.features') as string[];
  const premiumFeatures = t.raw('premium.features') as string[];

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-neutral-50/50 dark:bg-neutral-900/50">
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

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassPanel className="p-8 h-full">
              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {t('free.title')}
                </h3>
                <div className="mt-4 text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                  {t('free.price')}
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                  {t('free.priceNote')}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {freeFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-neutral-600 dark:text-neutral-300" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <BrandButton size="lg" variant="secondary" className="w-full">
                {t('free.cta')}
              </BrandButton>
            </GlassPanel>
          </motion.div>

          {/* Premium tier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <GlassPanel intensity="heavy" className="p-8 h-full relative overflow-hidden">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8435A] to-[#FF7854]" />

              {/* Popular badge */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-1 bg-gradient-to-r from-[#E8435A] to-[#FF7854] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  <Star className="w-3 h-3 fill-white" />
                  {t('premium.popular')}
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {t('premium.title')}
                </h3>
                <div className="mt-4 text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                  {t('premium.monthlyPrice')}
                  <span className="text-lg font-normal text-neutral-500">
                    {t('premium.monthlyNote')}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="text-sm text-neutral-500 line-through">
                    {t('premium.yearlyOriginal')}
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {t('premium.yearlyPrice')}{t('premium.yearlyNote')}
                  </span>
                  <span className="text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                    {t('premium.yearlySavings')}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {premiumFeatures.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <BrandButton size="lg" className="w-full">
                {t('premium.cta')}
              </BrandButton>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Shield className="w-4 h-4 text-neutral-400" />
                <p className="text-xs text-neutral-500">{t('guarantee')}</p>
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { SectionBadge } from '@/components/shared/section-badge';
import { BrandButton } from '@/components/shared/brand-button';
import { motion } from 'framer-motion';
import { Check, Shield } from 'lucide-react';

export function PricingSection() {
  const t = useTranslations('pricing');
  const features = t.raw('features') as string[];

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <GlassPanel intensity="heavy" className="p-8 relative overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8435A] to-[#FF7854]" />

            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                {t('price')}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                {t('priceNote')}
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <BrandButton size="lg" className="w-full">
              {t('cta')}
            </BrandButton>

            {/* Guarantee */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <Shield className="w-4 h-4 text-neutral-400" />
              <p className="text-xs text-neutral-500">{t('guarantee')}</p>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

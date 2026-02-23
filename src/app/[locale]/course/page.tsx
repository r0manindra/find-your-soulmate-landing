'use client';

import { useTranslations, useLocale } from 'next-intl';
import { GlassPanel } from '@/components/shared/glass-panel';
import { BrandButton } from '@/components/shared/brand-button';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { Check, Shield, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { chapters } from '@/data/content';
import { createCheckoutSession } from '@/actions/checkout';
import type { Locale } from '@/i18n/routing';

export default function CoursePage() {
  const t = useTranslations('pricing');
  const locale = useLocale() as Locale;
  const features = t.raw('features') as string[];

  async function handleCheckout() {
    const { url } = await createCheckoutSession(locale);
    if (url) window.location.href = url;
  }

  return (
    <section className="min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        <div className="text-center mb-12">
          <SectionBadge>{t('badge')}</SectionBadge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white">
            {t('title')}
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            {t('subtitle')}
          </p>
        </div>

        {/* Chapter list */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
            {locale === 'de' ? 'Alle 20 Kapitel' : 'All 20 Chapters'}
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {chapters.map((chapter) => (
              <GlassPanel key={chapter.id} intensity="light" className="p-4">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{chapter.icon}</span>
                  <div>
                    <span className="text-xs font-mono text-neutral-400 mr-2">
                      {String(chapter.id).padStart(2, '0')}
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {chapter.title[locale]}
                    </span>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </div>

        {/* Pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <GlassPanel intensity="heavy" className="p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E8435A] to-[#FF7854]" />

            <div className="text-center mb-8">
              <div className="text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white">
                {t('price')}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                {t('priceNote')}
              </p>
            </div>

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

            <form action={handleCheckout}>
              <BrandButton type="submit" size="lg" className="w-full">
                {t('cta')}
              </BrandButton>
            </form>

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

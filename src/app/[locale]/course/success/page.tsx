'use client';

import { GlassPanel } from '@/components/shared/glass-panel';
import { BrandButton } from '@/components/shared/brand-button';
import { motion } from 'framer-motion';
import { Download, Heart, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

export default function SuccessPage() {
  const locale = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="mx-auto max-w-lg px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <GlassPanel intensity="heavy" className="p-8 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>

            <h1 className="text-3xl font-bold tracking-tighter text-neutral-900 dark:text-white">
              {locale === 'de' ? 'Vielen Dank!' : 'Thank You!'}
            </h1>

            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              {locale === 'de'
                ? 'Dein Kauf war erfolgreich. Lade jetzt deinen Guide herunter und starte deine Reise.'
                : 'Your purchase was successful. Download your guide now and start your journey.'}
            </p>

            <BrandButton size="lg" className="w-full mt-6 gap-2">
              <Download className="w-4 h-4" />
              {locale === 'de' ? 'PDF herunterladen' : 'Download PDF'}
            </BrandButton>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-6 text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'de' ? 'Zurück zur Startseite' : 'Back to Home'}
            </Link>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}

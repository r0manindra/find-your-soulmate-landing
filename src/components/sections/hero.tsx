'use client';

import { useTranslations } from 'next-intl';
import { BrandButton } from '@/components/shared/brand-button';
import { SectionBadge } from '@/components/shared/section-badge';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8435A]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF7854]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <SectionBadge>{t('badge')}</SectionBadge>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white"
            >
              <span className="block">{t('title').split('\n')[0]}</span>
              <span className="block bg-gradient-to-r from-[#E8435A] to-[#FF7854] bg-clip-text text-transparent">
                {t('title').split('\n')[1]}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <BrandButton size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                {t('cta')}
              </BrandButton>
              <BrandButton variant="secondary" size="lg" className="gap-2">
                {t('ctaSecondary')}
                <ArrowRight className="w-4 h-4" />
              </BrandButton>
            </motion.div>

            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-sm text-neutral-500 dark:text-neutral-500"
            >
              {t('socialProof')}
            </motion.p>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80">
              {/* Phone frame */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl shadow-neutral-900/30">
                <div className="bg-neutral-100 dark:bg-neutral-800 rounded-[2.4rem] overflow-hidden aspect-[9/19.5]">
                  {/* Screen content */}
                  <div className="w-full h-full bg-gradient-to-b from-rose-50 to-white dark:from-neutral-900 dark:to-neutral-800 flex flex-col items-center justify-center p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mb-4">
                      <span className="text-3xl">🎯</span>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-neutral-900 dark:text-white text-lg">Charismo</p>
                      <p className="text-sm text-neutral-500 mt-1">Your AI Dating Coach</p>
                    </div>
                    {/* Progress bars */}
                    <div className="w-full mt-8 space-y-3">
                      {[
                        { w: 100, label: 'Foundation' },
                        { w: 75, label: 'Conversation' },
                        { w: 45, label: 'Connection' },
                        { w: 10, label: 'Flirting' },
                      ].map((phase, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-medium text-neutral-600 dark:text-neutral-400">
                              {phase.label}
                            </span>
                            <span className="text-[10px] text-neutral-400">
                              {phase.w}%
                            </span>
                          </div>
                          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${phase.w}%` }}
                              transition={{ delay: 1 + i * 0.2, duration: 0.8, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl" />
              </div>

              {/* Floating glass cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -left-8 top-1/4 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🔥</span>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">7-day streak!</p>
                    <p className="text-[10px] text-neutral-500">Keep going</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute -right-8 top-2/3 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">🎓</span>
                  <div>
                    <p className="text-xs font-semibold text-neutral-900 dark:text-white">Phase 2 Complete</p>
                    <p className="text-[10px] text-neutral-500">Conversation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

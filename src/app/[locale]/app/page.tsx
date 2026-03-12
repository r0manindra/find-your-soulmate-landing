'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SectionBadge } from '@/components/shared/section-badge';
import { BrandButton } from '@/components/shared/brand-button';
import { PhoneMockup, FeatureRow } from '@/components/shared/phone-mockup';
import { GlassPanel } from '@/components/shared/glass-panel';
import {
  Download,
  BookOpen,
  MessageCircle,
  Trophy,
  Sparkles,
  Dumbbell,
  Target,
  Flame,
  Heart,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function AppPage() {
  const t = useTranslations('appPage');

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E8435A]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#FF7854]/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <FeatureRow>
            <div className="text-center lg:text-left">
              <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
                <SectionBadge>{t('hero.badge')}</SectionBadge>
              </motion.div>
              <motion.h1
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-neutral-900 dark:text-white"
              >
                <span className="block">{t('hero.titleLine1')}</span>
                <span className="block bg-gradient-to-r from-[#E8435A] to-[#FF7854] bg-clip-text text-transparent">
                  {t('hero.titleLine2')}
                </span>
              </motion.h1>
              <motion.p
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              >
                {t('hero.subtitle')}
              </motion.p>
              <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <BrandButton size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  {t('hero.cta')}
                </BrandButton>
              </motion.div>
              <motion.p custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-4 text-sm text-neutral-500">
                {t('hero.note')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup src="/screenshots/Homefeed.png" alt="Charismo home feed" priority />
            </motion.div>
          </FeatureRow>
        </div>
      </section>

      {/* ── The Guide ────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureRow reverse>
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <SectionBadge>{t('guide.badge')}</SectionBadge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
              >
                {t('guide.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {t('guide.description')}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-3 text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto lg:mx-0"
              >
                {['point1', 'point2', 'point3', 'point4'].map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] shrink-0" />
                    <span>{t(`guide.${key}`)}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <PhoneMockup src="/screenshots/The_Guide_Lessons.png" alt="The Guide - 25 chapters" />
            </motion.div>
          </FeatureRow>
        </div>
      </section>

      {/* ── AI Coach ─────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent dark:via-neutral-900/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureRow>
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <SectionBadge>{t('coach.badge')}</SectionBadge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
              >
                {t('coach.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {t('coach.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 grid grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0"
              >
                {['charismo', 'maverick', 'gentleman', 'natural', 'legend', 'smooth'].map((key) => (
                  <div key={key} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <Sparkles className="w-3.5 h-3.5 text-[#E8435A] shrink-0" />
                    <span>{t(`coach.coaches.${key}`)}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup src="/screenshots/Charismo_AI_Coach.png" alt="Charismo AI Coach" />
            </motion.div>
          </FeatureRow>
        </div>
      </section>

      {/* ── Practice Modes ───────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureRow reverse>
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <SectionBadge>{t('modes.badge')}</SectionBadge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
              >
                {t('modes.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {t('modes.description')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-3 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { key: 'openingLab', icon: MessageCircle },
                  { key: 'pingPong', icon: Target },
                  { key: 'rejectionGym', icon: Dumbbell },
                  { key: 'dateSim', icon: Heart },
                  { key: 'banter', icon: Sparkles },
                  { key: 'replyHelper', icon: MessageCircle },
                  { key: 'battle', icon: Flame },
                ].map(({ key, icon: Icon }) => (
                  <div key={key} className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#E8435A]/10 to-[#FF7854]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#E8435A]" />
                    </div>
                    <span className="text-sm">{t(`modes.list.${key}`)}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <PhoneMockup src="/screenshots/AI_Modes.png" alt="AI Practice Modes" />
            </motion.div>
          </FeatureRow>
        </div>
      </section>

      {/* ── Habit Tracker ────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/30 to-transparent dark:via-neutral-900/50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FeatureRow>
            <div className="text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <SectionBadge>{t('habits.badge')}</SectionBadge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
              >
                {t('habits.title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {t('habits.description')}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-6 space-y-3 text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto lg:mx-0"
              >
                {['point1', 'point2', 'point3', 'point4'].map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#E8435A] to-[#FF7854] shrink-0" />
                    <span>{t(`habits.${key}`)}</span>
                  </li>
                ))}
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center lg:justify-end"
            >
              <PhoneMockup src="/screenshots/Habit_Tracker.png" alt="Habit Tracker" />
            </motion.div>
          </FeatureRow>
        </div>
      </section>

      {/* ── More Features Grid ───────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <SectionBadge>{t('more.badge')}</SectionBadge>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
            >
              {t('more.title')}
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { key: 'phrasebook', icon: BookOpen },
              { key: 'books', icon: BookOpen },
              { key: 'gamification', icon: Trophy },
              { key: 'personalized', icon: Sparkles },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassPanel className="p-6 h-full">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center mb-4 shadow-lg shadow-rose-500/20">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">
                      {t(`more.features.${item.key}.title`)}
                    </h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                      {t(`more.features.${item.key}.description`)}
                    </p>
                  </GlassPanel>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/50 to-transparent dark:from-transparent dark:via-neutral-900/50 dark:to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400"
          >
            {t('cta.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <BrandButton size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              {t('cta.button')}
            </BrandButton>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-neutral-500"
          >
            {t('cta.note')}
          </motion.p>
        </div>
      </section>
    </>
  );
}

'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from '@/components/shared/locale-switcher';
import { BrandButton } from '@/components/shared/brand-button';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const t = useTranslations('nav');
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.72]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);
  const blur = useTransform(scrollY, [0, 100], [0, 16]);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '/#mindset', label: t('mindset') },
    { href: '/#basics', label: t('basics') },
    { href: '/#guide', label: t('guide') },
    { href: '/#books', label: t('books') },
    { href: '/#app', label: t('app') },
    { href: '/#pricing', label: t('pricing') },
  ];

  return (
    <motion.header
      style={{
        backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})`,
        borderBottomColor: `rgba(255, 255, 255, ${borderOpacity.get()})`,
        backdropFilter: `blur(${blur.get()}px)`,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
    >
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:shadow-rose-500/40 transition-shadow">
            <Heart className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-white">
            FlirtIQ
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <LocaleSwitcher />
          <BrandButton size="sm">
            {t('buyCourse')}
          </BrandButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-neutral-600 dark:text-neutral-400"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg border-t border-white/20 px-4 py-4"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-neutral-700 dark:text-neutral-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-3 border-t border-neutral-200 dark:border-neutral-700">
              <LocaleSwitcher />
              <BrandButton size="sm">
                {t('buyCourse')}
              </BrandButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

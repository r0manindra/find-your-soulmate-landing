'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-[#E8435A] to-[#FF7854] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-neutral-900 dark:text-white">
                FlirtIQ
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
              {t('tagline')}
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
              {t('legal')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  {t('impressum')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">
              {t('resources')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#guide" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  The Guide
                </a>
              </li>
              <li>
                <a href="#books" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  Books
                </a>
              </li>
              <li>
                <a href="#app" className="text-sm text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PhoneMockup({ src, alt, className, priority = false }: PhoneMockupProps) {
  return (
    <div className={cn('relative w-64 sm:w-72 mx-auto', className)}>
      {/* Phone frame */}
      <div className="relative bg-neutral-900 rounded-[3rem] p-3 shadow-2xl shadow-neutral-900/30">
        <div className="rounded-[2.4rem] overflow-hidden aspect-[9/19.5] relative bg-neutral-900">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 256px, 288px"
            priority={priority}
          />
        </div>
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl" />
      </div>
    </div>
  );
}

interface FeatureRowProps {
  children: React.ReactNode;
  reverse?: boolean;
}

export function FeatureRow({ children, reverse = false }: FeatureRowProps) {
  return (
    <div className={cn(
      'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
      reverse && 'lg:[direction:rtl] lg:[&>*]:[direction:ltr]'
    )}>
      {children}
    </div>
  );
}

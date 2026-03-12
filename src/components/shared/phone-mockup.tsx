'use client';

import { cn } from '@/lib/utils';
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
      <Image
        src={src}
        alt={alt}
        width={400}
        height={867}
        className="w-full h-auto drop-shadow-2xl"
        priority={priority}
      />
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

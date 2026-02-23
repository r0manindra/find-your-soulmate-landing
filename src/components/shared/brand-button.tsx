'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ButtonHTMLAttributes, forwardRef } from 'react';

interface BrandButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const BrandButton = forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className={cn(
          'inline-flex items-center justify-center font-semibold tracking-tight rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-[#E8435A] to-[#FF7854] text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40':
              variant === 'primary',
            'bg-white/[0.72] backdrop-blur-md border border-white/20 text-neutral-900 dark:bg-neutral-800/60 dark:text-white dark:border-white/10':
              variant === 'secondary',
            'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white':
              variant === 'ghost',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-11 px-6 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }
);

BrandButton.displayName = 'BrandButton';

export { BrandButton };
export type { BrandButtonProps };

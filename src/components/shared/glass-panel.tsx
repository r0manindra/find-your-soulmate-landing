'use client';

import { cn } from '@/lib/utils';
import { type HTMLAttributes, forwardRef } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: 'light' | 'medium' | 'heavy';
  border?: boolean;
}

const GlassPanel = forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, intensity = 'medium', border = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl',
          {
            'bg-white/60 backdrop-blur-sm dark:bg-neutral-900/50': intensity === 'light',
            'bg-white/[0.72] backdrop-blur-md dark:bg-[rgba(28,28,30,0.68)]': intensity === 'medium',
            'bg-white/80 backdrop-blur-lg dark:bg-neutral-900/80': intensity === 'heavy',
          },
          border && 'border border-white/20 dark:border-white/10',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassPanel.displayName = 'GlassPanel';

export { GlassPanel };
export type { GlassPanelProps };

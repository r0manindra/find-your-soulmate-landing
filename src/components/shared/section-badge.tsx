'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        'bg-gradient-to-r from-[#E8435A]/10 to-[#FF7854]/10',
        'text-[#E8435A] dark:text-[#FF6B81]',
        'border border-[#E8435A]/20',
        className
      )}
    >
      {children}
    </motion.span>
  );
}

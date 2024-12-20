import React from 'react';
import { motion } from 'framer-motion';

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterColumn({ title, children, className = '' }: FooterColumnProps) {
  return (
    <div className={className}>
      <h3 className="text-sm font-medium text-[#00F0FF]/80 uppercase tracking-wider mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
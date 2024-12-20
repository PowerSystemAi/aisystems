import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';

interface BrandNameProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'text';
  className?: string;
  animate?: boolean;
}

export function BrandName({ variant = 'text', className = '', animate = true }: BrandNameProps) {
  const baseStyles = `font-['Orbitron'] font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${COLORS.gradients.header.text}`;
  
  return (
    <motion.span
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      className={`${baseStyles} ${className}`}
      style={{
        backgroundSize: '200% auto',
        animation: animate ? 'gradient 8s linear infinite' : undefined,
      }}
    >
      PowerSystemAI
    </motion.span>
  );
}
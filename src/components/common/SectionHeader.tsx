import React from 'react';
import { motion } from 'framer-motion';
import { GradientText } from './GradientText';

interface SectionHeaderProps {
  title: string;
  description?: string;
  gradient?: 'primary' | 'secondary' | 'header';
  centered?: boolean;
  className?: string;
  size?: 'normal' | 'large';
}

export function SectionHeader({ 
  title, 
  description, 
  gradient = 'header',
  centered = true,
  className = '',
  size = 'normal'
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-bold tracking-tight font-['Orbitron'] leading-tight"
      >
        <GradientText gradient={gradient} size={size}>{title}</GradientText>
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
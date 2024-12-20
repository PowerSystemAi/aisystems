import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: 'primary' | 'secondary' | 'header';
  size?: 'normal' | 'large';
  animate?: boolean;
  glow?: boolean;
}

export function GradientText({ 
  children, 
  className = '', 
  gradient = 'primary',
  size = 'normal',
  animate = true,
  glow = false
}: GradientTextProps) {
  const sizeClasses = {
    normal: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl lg:text-7xl'
  };

  const gradientClass = COLORS.gradients[gradient].text;
  
  return (
    <div className="relative">
      <motion.span
        initial={animate ? { opacity: 0, y: 20 } : false}
        animate={animate ? { opacity: 1, y: 0 } : false}
        className={`relative inline-block bg-clip-text text-transparent bg-gradient-to-r ${gradientClass} ${sizeClasses[size]} ${className}`}
        style={{
          backgroundSize: '200% auto',
          animation: animate ? 'gradient 8s linear infinite' : undefined,
        }}
      >
        {children}
      </motion.span>
      
      {glow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 blur-2xl"
          style={{
            background: `linear-gradient(to right, ${COLORS.primary.main}, ${COLORS.secondary.main}, ${COLORS.primary.main})`,
            opacity: 0.3,
            mixBlendMode: 'screen'
          }}
        />
      )}
    </div>
  );
}
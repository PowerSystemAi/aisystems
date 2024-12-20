import React from 'react';
import { motion } from 'framer-motion';
import { COLORS } from '../../constants/colors';

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function GradientButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick,
  icon
}: GradientButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg'
  };

  const baseClasses = `
    relative font-semibold rounded-lg transition-all duration-300
    ${sizeClasses[size]}
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-[#00F0FF] via-[#7C3AED] to-[#00F0FF]
      hover:bg-[length:200%_200%]
      text-black
      hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]
    `,
    secondary: `
      bg-gradient-to-r from-[#7C3AED] via-[#00F0FF] to-[#7C3AED]
      hover:bg-[length:200%_200%]
      text-black
      hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]
    `,
    outline: `
      bg-transparent
      border-2 border-[#00F0FF]
      text-[#00F0FF]
      hover:bg-[#00F0FF]/10
      hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]
    `
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${className}
      `}
      style={{
        backgroundSize: '200% 200%',
        animation: variant !== 'outline' ? 'gradient 8s linear infinite' : undefined
      }}
    >
      <span className="flex items-center justify-center gap-2">
        {icon}
        {children}
      </span>
    </motion.button>
  );
}
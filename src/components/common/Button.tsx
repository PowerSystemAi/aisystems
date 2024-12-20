import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`py-3 px-6 rounded-lg font-semibold transition-colors ${
        variant === 'primary'
          ? 'bg-[#00F0FF] text-black hover:bg-[#00F0FF]/90'
          : 'bg-gray-800 text-white hover:bg-gray-700'
      } ${className}`}
    >
      {children}
    </motion.button>
  );
}
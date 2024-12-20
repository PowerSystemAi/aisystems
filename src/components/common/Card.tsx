import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  highlighted?: boolean;
  className?: string;
  index?: number;
}

export function Card({ children, highlighted = false, className = '', index = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative bg-gradient-to-b from-gray-900/50 to-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border ${
        highlighted ? 'border-[#00F0FF]' : 'border-gray-800'
      } hover:border-[#00F0FF]/50 transition-all duration-300 ${className}`}
    >
      {children}
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00F0FF]/10 to-transparent rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent rounded-bl-2xl" />
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessCardProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function ProcessCard({ stepNumber, title, description, icon: Icon, index }: ProcessCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative bg-gradient-to-b from-gray-900/50 to-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-[#00F0FF]/50 transition-all duration-300"
    >
      {/* Step Number with Gradient */}
      <div className="absolute -top-6 left-8">
        <span className="text-4xl font-bold text-[#00F0FF] font-['Orbitron']">
          {stepNumber}
        </span>
      </div>

      {/* Icon Container with Glow Effect */}
      <motion.div
        whileHover={{ y: -5 }}
        className="relative w-16 h-16 mb-6 mt-4"
      >
        <div className="absolute inset-0 bg-[#00F0FF]/20 rounded-lg blur-xl" />
        <div className="relative bg-gray-900 rounded-lg p-4 border border-[#00F0FF]/30">
          <Icon className="w-8 h-8 text-[#00F0FF]" />
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00F0FF]/10 to-transparent rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent rounded-bl-2xl" />
    </motion.div>
  );
}
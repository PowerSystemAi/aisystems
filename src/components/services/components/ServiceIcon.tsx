import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceIconProps {
  icon: LucideIcon;
}

export function ServiceIcon({ icon: Icon }: ServiceIconProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative w-16 h-16 mb-6"
    >
      <div className="absolute inset-0 bg-[#00F0FF]/20 rounded-lg blur-xl" />
      <div className="relative bg-gray-900 rounded-lg p-4 border border-[#00F0FF]/30">
        <Icon className="w-8 h-8 text-[#00F0FF]" />
      </div>
    </motion.div>
  );
}
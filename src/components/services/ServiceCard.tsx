import React from 'react';
import { motion } from 'framer-motion';
import { ServiceIcon } from './components/ServiceIcon';
import { ServiceMetrics } from './components/ServiceMetrics';
import type { ServiceCardProps } from './types';

export function ServiceCard({ 
  title, 
  description, 
  icon,
  metrics, 
  isPrimary = false,
  index 
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`relative bg-gradient-to-b from-gray-900/50 to-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-800 hover:border-[#00F0FF]/50 transition-all duration-300 ${
        isPrimary ? 'md:col-span-2' : ''
      }`}
    >
      <ServiceIcon icon={icon} />

      <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">
        {title}
      </h3>
      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      {metrics && <ServiceMetrics metrics={metrics} />}

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#00F0FF]/10 to-transparent rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent rounded-bl-2xl" />
    </motion.div>
  );
}
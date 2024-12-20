import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { number: '50%', label: 'Increased Customer Satisfaction' },
  { number: '20hrs', label: 'Weekly Time Saved' },
  { number: '24/7', label: 'AI-Powered Support' },
];

export function Stats() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
          className="text-center"
        >
          <div className="text-3xl sm:text-4xl font-bold text-[#00F0FF] font-['Orbitron']">
            {stat.number}
          </div>
          <div className="mt-2 text-gray-400">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
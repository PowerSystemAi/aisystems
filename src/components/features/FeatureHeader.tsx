import React from 'react';
import { motion } from 'framer-motion';

export function FeatureHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Orbitron']">
        AI Solutions Tailored to Your Business
      </h2>
      <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
        Your partner in seamless customer support, CRM integration, and hassle-free appointment scheduling
      </p>
    </motion.div>
  );
}
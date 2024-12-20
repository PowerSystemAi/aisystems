import React from 'react';
import { motion } from 'framer-motion';

export function PricingHeader() {
  return (
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-6 font-['Orbitron'] bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#00F0FF]/70"
      >
        Subscriptions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-gray-400 max-w-3xl mx-auto"
      >
        Three different subscriptions to match your company's needs.
      </motion.p>
    </div>
  );
}
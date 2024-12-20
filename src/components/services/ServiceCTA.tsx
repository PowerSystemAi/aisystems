import React from 'react';
import { motion } from 'framer-motion';

export function ServiceCTA() {
  return (
    <div className="py-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 rounded-2xl border border-gray-700"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Orbitron'] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts and discover how our AI solutions can drive your business forward.
          </p>
          <button className="bg-[#00F0FF] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#00F0FF]/90 transition-all hover:scale-105 duration-300">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
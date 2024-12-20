import React from 'react';
import { motion } from 'framer-motion';
import { Background } from './common';
import { GradientButton } from './common/GradientButton';
import { SectionHeader } from './common';
import { CALENDLY_URL } from '../constants/links';

export function Contact() {
  return (
    <div className="relative bg-[#0A0A0A] py-20" id="contact">
      <Background className="opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact Us"
          gradient="secondary"
          className="mb-8"
        />
        
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-8"
          >
            Ready to transform your business with AI? Schedule your free consultation today and discover how we can help you achieve your goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a 
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientButton
                variant="primary"
                size="lg"
                className="w-full md:w-auto"
              >
                Schedule Your Free Consultation Today
              </GradientButton>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
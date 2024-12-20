import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { PowerSystemTitle } from '../animations/PowerSystemTitle';
import { Logo } from '../logo';
import { GradientButton } from '../common/GradientButton';
import { Stats } from '../Stats';
import { CALENDLY_URL } from '../../constants/links';

export function HeroContent() {
  return (
    <div className="text-center">
      <PowerSystemTitle />
      <Logo />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto"
      >
        Enterprise-Grade AI Automation for the Digital Age
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
      >
        Your partner in seamless customer support, CRM integration, and hassle-free appointment scheduling
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-10 flex justify-center"
      >
        <a 
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GradientButton
            variant="primary"
            size="lg"
            icon={<Play className="w-5 h-5" />}
            className="bg-gradient-to-r from-[#00F0FF] via-[#7C3AED] to-[#00F0FF]"
          >
            Schedule a Free Demo
          </GradientButton>
        </a>
      </motion.div>
      <Stats />
    </div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceOfferings } from '../components/services/ServiceOfferings';
import { CustomSolutions } from '../components/services/CustomSolutions';
import { ServiceFAQ } from '../components/services/ServiceFAQ';
import { ServiceCTA } from '../components/services/ServiceCTA';

export function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0A0A0A]"
    >
      <ServiceHero />
      <ServiceOfferings />
      <CustomSolutions />
      <ServiceFAQ />
      <ServiceCTA />
    </motion.div>
  );
}
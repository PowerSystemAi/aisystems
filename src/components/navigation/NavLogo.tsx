import React from 'react';
import { motion } from 'framer-motion';
import { BrandName } from '../common/BrandName';

export function NavLogo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <BrandName className="text-2xl" />
    </motion.div>
  );
}
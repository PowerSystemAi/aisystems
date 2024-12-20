import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { NavLink } from './NavLink';
import { navItems } from './navItems';
import { GradientButton } from '../common/GradientButton';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed inset-x-0 top-16 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-gray-800"
        >
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label} className="block">
                <NavLink href={item.href}>{item.label}</NavLink>
              </div>
            ))}
            <GradientButton
              variant="primary"
              size="sm"
              className="w-full"
            >
              Schedule a Demo
            </GradientButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
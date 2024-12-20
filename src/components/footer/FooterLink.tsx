import React from 'react';
import { motion } from 'framer-motion';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 5 }}
      className="text-gray-400 hover:text-[#00F0FF] transition-colors inline-block"
    >
      {children}
    </motion.a>
  );
}
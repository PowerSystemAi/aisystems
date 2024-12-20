import React from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../../utils/scroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export function NavLink({ href, children, isActive = false }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={`text-gray-300 hover:text-[#00F0FF] transition-colors duration-200 px-4 py-2 mx-1 relative ${
        isActive ? 'text-[#00F0FF]' : ''
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00F0FF]"
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.a>
  );
}
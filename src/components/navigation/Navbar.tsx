import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { NavLogo } from './NavLogo';
import { navItems } from './navItems';
import { GradientButton } from '../common/GradientButton';
import { CALENDLY_URL } from '../../constants/links';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const activeSection = useScrollSpy();

  const backgroundOpacity = useTransform(
    scrollY,
    [0, 100],
    [0, 0.9]
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );

  return (
    <motion.nav
      style={{ 
        backgroundColor: `rgba(10, 10, 10, ${backgroundOpacity.get()})`,
        backdropFilter: backdropBlur,
      }}
      className="fixed w-full z-50 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <NavLogo />
          </div>
          
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                href={item.href}
                isActive={activeSection === item.href.replace('#', '')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center flex-shrink-0">
            <a 
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GradientButton 
                variant="primary" 
                size="sm"
              >
                Schedule a Demo
              </GradientButton>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </motion.nav>
  );
}
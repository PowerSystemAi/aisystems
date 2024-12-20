import React from 'react';
import { FooterBackground } from './FooterBackground';
import { FooterColumn } from './FooterColumn';
import { FooterLink } from './FooterLink';
import { FooterLogo } from './FooterLogo';
import { BrandName } from '../common/BrandName';
import { navItems } from '../navigation/navItems';

export function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-gray-800/30">
      <FooterBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-4">
            <FooterLogo />
            <p className="mt-4 text-gray-400">
              Revolutionize Your Business with AI
            </p>
          </div>

          {/* Navigation Links */}
          <FooterColumn title="Links" className="md:col-span-3 md:col-start-7">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <FooterLink href={item.href}>{item.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* Socials */}
          <FooterColumn title="Socials" className="md:col-span-2">
            <ul className="space-y-2">
              <li>
                <FooterLink href="#">Twitter</FooterLink>
              </li>
            </ul>
          </FooterColumn>
        </div>

        {/* Bottom bar with copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800/30">
          <p className="text-gray-400 text-sm">
            © 2024 <BrandName className="text-sm" />. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
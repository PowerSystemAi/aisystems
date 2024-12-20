import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Github, href: '#' },
  { icon: Linkedin, href: '#' },
];

export function FooterSocials() {
  return (
    <div>
      <h3 className="text-[#00F0FF] font-semibold mb-4">Socials</h3>
      <div className="flex space-x-4">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ y: -3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#00F0FF]/20 blur-lg rounded-full" />
              <Icon className="relative w-6 h-6 text-gray-400 hover:text-[#00F0FF] transition-colors" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
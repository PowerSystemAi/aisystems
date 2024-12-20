import React from 'react';
import { motion } from 'framer-motion';

interface FooterLinksProps {
  title: string;
  links: string[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-[#00F0FF] font-semibold">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <motion.a
              href="#"
              whileHover={{ x: 5 }}
              className="text-gray-400 hover:text-[#00F0FF] transition-colors inline-block"
            >
              {link}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}
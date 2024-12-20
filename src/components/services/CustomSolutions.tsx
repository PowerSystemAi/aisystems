import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Lock } from 'lucide-react';

const technologies = [
  { icon: Code, name: 'Modern Frontend' },
  { icon: Database, name: 'Scalable Backend' },
  { icon: Cloud, name: 'Cloud Infrastructure' },
  { icon: Lock, name: 'Enterprise Security' },
];

export function CustomSolutions() {
  return (
    <div className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Orbitron'] mb-6">
            Tailored Solutions for Your Unique Business Needs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Custom development solutions that perfectly align with your business objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#00F0FF]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-[#00F0FF]" />
                </div>
                <p className="text-white font-semibold">{tech.name}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Success Story</h3>
              <p className="text-gray-300 mb-6">
                Learn how we helped a leading enterprise achieve 50% reduction in operational costs through custom AI solutions.
              </p>
              <button className="text-[#00F0FF] hover:text-[#00F0FF]/80 transition-colors">
                Read Case Study →
              </button>
            </div>
            <div className="bg-[#0A0A0A] p-6 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#00F0FF] rounded-full" />
                  <p className="text-gray-300">50% Cost Reduction</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#00F0FF] rounded-full" />
                  <p className="text-gray-300">30% Efficiency Increase</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-[#00F0FF] rounded-full" />
                  <p className="text-gray-300">24/7 Automated Operations</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
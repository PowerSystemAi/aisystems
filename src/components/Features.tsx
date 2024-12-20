import React from 'react';
import { Brain, Layers, Clock, Monitor, BarChart3, Cog, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AI-Powered Customer Support',
    description: 'Respond to customers 24/7 with intelligent and empathetic bots',
    icon: Brain,
  },
  {
    title: 'CRM Integrations',
    description: 'Streamline your sales pipeline with seamless data syncing',
    icon: Layers,
  },
  {
    title: 'Appointment Scheduling',
    description: 'Automate bookings and reduce no-shows with intuitive scheduling tools',
    icon: Clock,
  },
  {
    title: 'Web Design',
    description: 'Modern, responsive, and conversion-focused websites tailored to your business needs',
    icon: Monitor,
  },
  {
    title: 'Real-time Analytics',
    description: 'Instant insights and actionable intelligence for better decision making',
    icon: BarChart3,
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored implementations that perfectly match your business needs',
    icon: Cog,
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your valuable data',
    icon: Shield,
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  hover: { 
    scale: 1.05,
    boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
    transition: { duration: 0.3 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Features() {
  return (
    <div className="bg-[#0A0A0A] py-20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-['Orbitron']">
            AI Solutions Tailored to Your Business
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Your partner in seamless customer support, CRM integration, and hassle-free appointment scheduling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="initial"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-[#00F0FF]/50 transition-colors"
              >
                <div className="relative w-12 h-12 mb-6">
                  <div className="absolute inset-0 bg-[#00F0FF]/20 rounded-lg blur-lg" />
                  <div className="relative bg-gray-900 rounded-lg p-3">
                    <Icon className="w-6 h-6 text-[#00F0FF]" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
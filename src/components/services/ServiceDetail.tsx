import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Layers, Clock, Monitor } from 'lucide-react';

const serviceDetails = {
  'ai-support': {
    icon: Brain,
    title: "AI-Powered Customer Support",
    description: "Transform your customer service with intelligent, scalable AI solutions that provide 24/7 support while maintaining a personal touch. Our advanced natural language processing ensures accurate, context-aware responses that improve over time.",
    benefits: [
      "Reduce response time by up to 80%",
      "Handle multiple conversations simultaneously",
      "Seamless escalation to human agents",
      "Continuous learning and improvement"
    ],
    features: [
      {
        title: "Natural Language Processing",
        description: "Advanced language understanding for accurate, context-aware responses"
      },
      {
        title: "Sentiment Analysis",
        description: "Real-time emotion detection to provide appropriate responses"
      },
      {
        title: "Multi-language Support",
        description: "Global coverage with support for 30+ languages"
      },
      {
        title: "Analytics Dashboard",
        description: "Comprehensive insights into customer interactions and satisfaction"
      }
    ],
    useCases: [
      "Customer Service Automation",
      "Technical Support",
      "Sales Inquiries",
      "Appointment Scheduling"
    ]
  },
  'crm-integration': {
    icon: Layers,
    title: "CRM Integration Solutions",
    description: "Seamlessly connect your CRM systems with our AI-powered integration platform. Automate data synchronization, enhance customer insights, and streamline your sales processes with intelligent workflow automation.",
    benefits: [
      "Reduce manual data entry by 90%",
      "Improve data accuracy to 99.9%",
      "Real-time synchronization",
      "Enhanced customer insights"
    ],
    features: [
      {
        title: "Automated Data Sync",
        description: "Bi-directional synchronization across all your systems"
      },
      {
        title: "Custom API Development",
        description: "Tailored integration solutions for your specific needs"
      },
      {
        title: "Real-time Updates",
        description: "Instant data propagation across all connected systems"
      },
      {
        title: "Advanced Analytics",
        description: "Comprehensive reporting and predictive insights"
      }
    ],
    useCases: [
      "Sales Pipeline Management",
      "Customer Data Integration",
      "Marketing Automation",
      "Business Intelligence"
    ]
  },
  'scheduling': {
    icon: Clock,
    title: "Smart Appointment Scheduling",
    description: "Revolutionize your appointment management with AI-powered scheduling that optimizes time slots, reduces no-shows, and maximizes resource utilization while providing a seamless booking experience for your clients.",
    benefits: [
      "Reduce no-shows by 60%",
      "Optimize resource allocation",
      "Increase booking efficiency",
      "Improve customer satisfaction"
    ],
    features: [
      {
        title: "AI Slot Optimization",
        description: "Smart scheduling that maximizes resource utilization"
      },
      {
        title: "Automated Reminders",
        description: "Multi-channel notifications to reduce no-shows"
      },
      {
        title: "Calendar Integration",
        description: "Seamless sync with popular calendar platforms"
      },
      {
        title: "Resource Management",
        description: "Intelligent staff and resource allocation"
      }
    ],
    useCases: [
      "Healthcare Appointments",
      "Professional Services",
      "Education and Training",
      "Service-based Businesses"
    ]
  },
  'web-design': {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Create stunning, high-performance websites that drive conversions and deliver exceptional user experiences. Our modern approach combines aesthetic excellence with technical innovation.",
    benefits: [
      "Increase conversion rates",
      "Improve user engagement",
      "Enhance brand presence",
      "Boost search rankings"
    ],
    features: [
      {
        title: "Responsive Design",
        description: "Perfect display across all devices and screen sizes"
      },
      {
        title: "Performance Optimization",
        description: "Lightning-fast load times and smooth interactions"
      },
      {
        title: "SEO Integration",
        description: "Built-in best practices for search engine visibility"
      },
      {
        title: "Analytics Setup",
        description: "Comprehensive tracking and conversion optimization"
      }
    ],
    useCases: [
      "Corporate Websites",
      "E-commerce Platforms",
      "Service Portfolios",
      "Web Applications"
    ]
  }
};

interface ServiceDetailProps {
  serviceId: keyof typeof serviceDetails;
}

export function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const service = serviceDetails[serviceId];
  const Icon = service.icon;

  return (
    <div className="py-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="p-4 bg-[#00F0FF]/10 rounded-xl">
              <Icon className="w-12 h-12 text-[#00F0FF]" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white text-center font-['Orbitron'] mb-6"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto"
          >
            {service.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">Key Benefits</h2>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-[#00F0FF] rounded-full mr-4" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">Use Cases</h2>
            <ul className="space-y-4">
              {service.useCases.map((useCase, index) => (
                <motion.li
                  key={useCase}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center text-gray-300"
                >
                  <span className="w-2 h-2 bg-[#00F0FF] rounded-full mr-4" />
                  {useCase}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 font-['Orbitron'] text-center">
            Core Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="bg-[#00F0FF] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#00F0FF]/90 transition-all hover:scale-105 duration-300">
            Schedule a Free Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
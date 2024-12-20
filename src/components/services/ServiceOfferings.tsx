import React from 'react';
import { Brain, Layers, Clock, Monitor } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: Brain,
    title: "AI-Powered Customer Support",
    description: "24/7 intelligent customer service with natural language processing and sentiment analysis. Reduce response times and improve satisfaction rates.",
    features: [
      "Natural Language Processing",
      "Sentiment Analysis",
      "Multi-language Support",
      "Automated Response System"
    ],
    timeframe: "Implementation: 2-4 weeks"
  },
  {
    icon: Layers,
    title: "CRM Integration Solutions",
    description: "Seamlessly integrate AI with your existing CRM systems. Automate data entry, enhance customer insights, and improve sales forecasting.",
    features: [
      "Automated Data Synchronization",
      "Custom API Development",
      "Real-time Updates",
      "Advanced Analytics Integration"
    ],
    timeframe: "Implementation: 3-6 weeks"
  },
  {
    icon: Clock,
    title: "Smart Appointment Scheduling",
    description: "Intelligent scheduling system that optimizes appointment slots, reduces no-shows, and improves resource allocation.",
    features: [
      "AI-powered Slot Optimization",
      "Automated Reminders",
      "Calendar Integration",
      "Resource Management"
    ],
    timeframe: "Implementation: 2-3 weeks"
  },
  {
    icon: Monitor,
    title: "Web Design & Development",
    description: "Modern, responsive websites optimized for conversion and user engagement. Built with the latest technologies and best practices.",
    features: [
      "Responsive Design",
      "Performance Optimization",
      "SEO Best Practices",
      "Analytics Integration"
    ],
    timeframe: "Implementation: 4-8 weeks"
  }
];

export function ServiceOfferings() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
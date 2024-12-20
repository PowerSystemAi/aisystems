import { Bot, Cpu, Brain, Cloud } from 'lucide-react';

export const services = [
  {
    title: 'Chatbot Development',
    description: 'Intelligent chatbots using advanced NLP to streamline customer interactions and automate support.',
    icon: Bot,
    metrics: [
      { label: 'Response Time', value: 90, suffix: '%', prefix: '-' },
      { label: 'Customer Satisfaction', value: 95, suffix: '%' }
    ],
    isPrimary: true
  },
  {
    title: 'Business Automation',
    description: 'End-to-end automation solutions that streamline workflows and boost operational efficiency.',
    icon: Cpu,
    metrics: [
      { label: 'Efficiency Increase', value: 103, suffix: '%', prefix: '+' },
      { label: 'Cost Reduction', value: 67, suffix: '%', prefix: '-' }
    ],
    isPrimary: true
  },
  {
    title: 'AI Integration',
    description: 'Seamless integration of AI capabilities into your existing business systems and workflows.',
    icon: Brain,
    metrics: [
      { label: 'Process Speed', value: 85, suffix: '%', prefix: '+' }
    ]
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud solutions optimized for AI workloads and high availability.',
    icon: Cloud,
    metrics: [
      { label: 'Uptime', value: 99.9, suffix: '%' }
    ]
  }
] as const;
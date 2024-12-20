import { Brain, Layers, Clock, Monitor, Cog } from 'lucide-react';

export const features = [
  {
    title: 'AI-Powered Customer Support',
    description: 'Respond to customers 24/7 with intelligent and empathetic bots',
    icon: Brain,
    row: 1
  },
  {
    title: 'CRM Integrations',
    description: 'Streamline your sales pipeline with seamless data syncing',
    icon: Layers,
    row: 1
  },
  {
    title: 'Appointment Scheduling',
    description: 'Automate bookings and reduce no-shows with intuitive scheduling tools',
    icon: Clock,
    row: 1
  },
  {
    title: 'Web Design',
    description: 'Modern, responsive, and conversion-focused websites tailored to your business needs',
    icon: Monitor,
    row: 2
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored implementations that perfectly match your business needs',
    icon: Cog,
    row: 2
  },
] as const;
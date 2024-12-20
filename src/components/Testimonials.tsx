import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common';
import { Background } from './common';

const testimonials = [
  {
    text: "The team at PowerSystemAI has transformed our operations. The AI-driven automation has reduced our response time by 75%.",
    author: "Sarah Chen",
    position: "CTO, TechCorp Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
  },
  {
    text: "Implementing PowerSystemAI's solutions was the best decision we made last year. Our efficiency has increased dramatically.",
    author: "Michael Rodriguez",
    position: "Operations Director, InnovateX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
  }
];

// Rest of the component remains the same...
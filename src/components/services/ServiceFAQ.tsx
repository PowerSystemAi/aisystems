import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How quickly can you implement AI solutions?",
    answer: "Implementation timelines vary by solution: Customer Support (2-4 weeks), CRM Integration (3-6 weeks), Appointment Scheduling (2-3 weeks), and Web Design (4-8 weeks)."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer 24/7 technical support and regular system updates to ensure optimal performance and reliability."
  },
  {
    question: "Can your solutions integrate with existing systems?",
    answer: "Absolutely. Our solutions are designed to seamlessly integrate with your existing infrastructure and can be customized to meet your specific needs."
  },
  {
    question: "What security measures do you implement?",
    answer: "We implement enterprise-grade security protocols, including end-to-end encryption, regular security audits, and compliance with industry standards."
  }
];

export function ServiceFAQ() {
  return (
    <div className="py-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white font-['Orbitron'] text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg border border-gray-800"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
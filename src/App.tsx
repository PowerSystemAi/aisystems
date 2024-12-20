import React from 'react';
import { Navbar } from './components/navigation';
import { Hero } from './components/Hero';
import { Features } from './components/features';
import { ProcessSection } from './components/process';
import { PricingSection } from './components/pricing';
import { FAQSection } from './components/faq';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <Features />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
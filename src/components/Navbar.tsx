import React from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-[#0A0A0A]/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-[#00F0FF] font-['Orbitron'] text-xl font-bold">PowerSystemAI</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Services', 'Solutions', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00F0FF] transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#00F0FF] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#00F0FF]/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0A0A0A]">
            {['Services', 'Solutions', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#00F0FF] block px-3 py-2 text-base font-medium"
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-[#00F0FF] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#00F0FF]/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
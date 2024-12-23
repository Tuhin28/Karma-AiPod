import React from 'react';
import { Menu } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 py-4 px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-[#333333]">Peter</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-600 hover:text-[#FF7757]">About Me</a>
          <a href="#works" className="text-gray-600 hover:text-[#FF7757]">Works</a>
          <a href="#blog" className="text-gray-600 hover:text-[#FF7757]">Blog</a>
          <a href="#experience" className="text-gray-600 hover:text-[#FF7757]">Experience</a>
          <a 
            href="#contact" 
            className="bg-[#FF7757] text-white px-6 py-2 rounded-full hover:bg-[#ff8f75] transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="text-gray-600">About Me</a>
              <a href="#works" className="text-gray-600">Works</a>
              <a href="#blog" className="text-gray-600">Blog</a>
              <a href="#experience" className="text-gray-600">Experience</a>
              <a 
                href="#contact" 
                className="bg-[#FF7757] text-white px-6 py-2 rounded-full text-center"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
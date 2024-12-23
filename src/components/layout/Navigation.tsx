import React from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export function Navigation() {
  const activeSection = useActiveSection();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`relative text-base font-medium transition-colors ${
            activeSection === id
              ? 'text-[#FF7757]'
              : 'text-gray-600 dark:text-gray-300 hover:text-[#FF7757]'
          }`}
        >
          {label}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF7757] transition-all duration-300 ${
              activeSection === id ? 'w-full' : 'w-0'
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
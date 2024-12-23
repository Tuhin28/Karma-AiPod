import React from 'react';
import { Logo } from '../../../components/shared/Logo';
import { useTheme } from '../../../hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          <Logo variant="ai" />

          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-[#FF7757]">Features</a>
              <a href="#showcase" className="text-gray-600 dark:text-gray-300 hover:text-[#FF7757]">Showcase</a>
              <a href="#pricing" className="text-gray-600 dark:text-gray-300 hover:text-[#FF7757]">Pricing</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-[#FF7757]">Contact</a>
            </nav>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600" />
              ) : (
                <Sun className="h-5 w-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
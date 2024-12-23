import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { Navigation } from './Navigation/Navigation';
import { MobileNavigation } from './Navigation/MobileNavigation';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-full px-8 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-2xl font-bold text-gray-900 dark:text-white"
            aria-label="Go to home section"
          >
            Peter
          </a>

          <div className="flex items-center gap-6">
            <Navigation />
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
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
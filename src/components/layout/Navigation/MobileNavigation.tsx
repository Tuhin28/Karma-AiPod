import React from 'react';
import { Menu } from 'lucide-react';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { navItems } from '../../../constants/navigation';
import { NavLink } from './NavLink';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const activeSection = useActiveSection();

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
      </button>

      {isOpen && (
        <div 
          className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          role="menu"
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                isActive={activeSection === item.id}
                onClick={() => setIsOpen(false)}
                variant="mobile"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
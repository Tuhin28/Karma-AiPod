import React from 'react';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { navItems } from '../../../constants/navigation';
import { NavLink } from './NavLink';

export function Navigation() {
  const activeSection = useActiveSection();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          item={item}
          isActive={activeSection === item.id}
        />
      ))}
    </nav>
  );
}
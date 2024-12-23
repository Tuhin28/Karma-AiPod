import React from 'react';
import type { NavItem } from '../../../constants/navigation';
import { scrollToSection } from '../../../utils/scroll';

interface NavLinkProps {
  item: NavItem;
  isActive: boolean;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export function NavLink({ item, isActive, onClick, variant = 'desktop' }: NavLinkProps) {
  const handleClick = () => {
    scrollToSection(item.id);
    onClick?.();
  };

  if (variant === 'mobile') {
    return (
      <button
        onClick={handleClick}
        className={`text-left px-4 py-2 rounded-lg transition-colors ${
          isActive
            ? 'bg-[#FF7757]/10 text-[#FF7757]'
            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
      >
        {item.label}
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`relative text-base font-medium transition-colors ${
        isActive
          ? 'text-[#FF7757]'
          : 'text-gray-600 dark:text-gray-300 hover:text-[#FF7757]'
      }`}
    >
      {item.label}
      <span
        className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF7757] transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0'
        }`}
      />
    </button>
  );
}
import React from 'react';
import { Cpu } from 'lucide-react';

interface LogoProps {
  variant?: 'default' | 'ai';
}

export function Logo({ variant = 'default' }: LogoProps) {
  return (
    <div className="flex items-center gap-2">
      {variant === 'ai' ? (
        <Cpu className="h-8 w-8 text-[#FF7757]" />
      ) : (
        <span className="text-2xl font-bold text-[#333333] dark:text-white">P</span>
      )}
      <span className="text-2xl font-bold text-[#333333] dark:text-white">
        {variant === 'ai' ? 'AiPod' : 'Peter'}
      </span>
    </div>
  );
}
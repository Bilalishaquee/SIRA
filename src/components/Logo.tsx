import React from 'react';
import { Plus } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export function Logo({ size = 'md', variant = 'light' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl'
  };

  const iconSize = {
    sm: 20,
    md: 24,
    lg: 32
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className={`${variant === 'light' ? 'text-[#38bdf8]' : 'text-[#7dd3fc]'} relative`}>
          <Plus size={iconSize[size] * 0.9} className="transform rotate-0" />
          <Plus size={iconSize[size] * 0.9} className="absolute top-0 left-0 text-[#22c55e] transform rotate-45" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className={`${sizeClasses[size]} font-bold leading-tight font-aileron ${variant === 'light' ? 'text-[#0284c7]' : 'text-white'}`}>
          SIRA
        </span>
        <span className={`text-xs font-medium tracking-wider leading-tight font-aileron ${variant === 'light' ? 'text-[#16a34a]' : 'text-[#4ade80]'}`}>
          {size === 'lg' ? 'MEDICAL PRO' : 'ERP MEDICAL'}
        </span>
      </div>
    </div>
  );
}
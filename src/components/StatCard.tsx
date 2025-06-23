import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  isPositive: boolean;
  bgColor: string;
  textColor: string;
}

export function StatCard({ title, value, change, isPositive, bgColor, textColor }: StatCardProps) {
  return (
    <div className={`${bgColor} ${textColor} p-3 sm:p-4 md:p-5 rounded-xl ${bgColor.includes('white') ? 'border border-gray-200' : ''} shadow-sm relative overflow-hidden`}>
      <div className="relative z-10">
        <p className="text-xs opacity-90 mb-1 capitalize truncate">{title}</p>
        <div className="flex items-center justify-between">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold">{value}</p>
          <div className="flex items-center space-x-1">
            {isPositive ? (
              <>
                <TrendingUp size={14} className="opacity-80 sm:hidden" />
                <TrendingUp size={18} className="opacity-80 hidden sm:block" />
              </>
            ) : (
              <>
                <TrendingDown size={14} className="opacity-80 sm:hidden" />
                <TrendingDown size={18} className="opacity-80 hidden sm:block" />
              </>
            )}
            <span className="text-xs sm:text-sm font-medium">
              {isPositive ? '+ ' : '- '}{Math.abs(change)}%
            </span>
          </div>
        </div>
      </div>
      {/* Background pattern for blue card */}
      {(bgColor.includes('blue') || bgColor.includes('[#38bdf8]')) && (
        <div className="absolute top-1 right-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-20">
          <TrendingUp size={40} className="transform rotate-12 sm:hidden" />
          <TrendingUp size={55} className="transform rotate-12 hidden sm:block md:hidden" />
          <TrendingUp size={70} className="transform rotate-12 hidden md:block" />
        </div>
      )}
      {/* Background pattern for white card */}
      {bgColor.includes('white') && (
        <div className="absolute top-1 right-1 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-10">
          <TrendingDown size={40} className="transform rotate-12 text-[#ef4444] sm:hidden" />
          <TrendingDown size={55} className="transform rotate-12 text-[#ef4444] hidden sm:block md:hidden" />
          <TrendingDown size={70} className="transform rotate-12 text-[#ef4444] hidden md:block" />
        </div>
      )}
    </div>
  );
}
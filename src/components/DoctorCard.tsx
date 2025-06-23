import React from 'react';

interface DoctorCardProps {
  name: string;
  avatar: string;
  specialty?: string;
  status?: 'available' | 'busy' | 'offline';
}

export function DoctorCard({ name, avatar, specialty, status = 'available' }: DoctorCardProps) {
  const statusColors = {
    available: 'bg-green-500',
    busy: 'bg-yellow-500',
    offline: 'bg-gray-400'
  };

  return (
    <div className="flex flex-col items-center space-y-2 sm:space-y-3 group cursor-pointer">
      <div className="relative">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full object-cover border-2 sm:border-4 border-white shadow-lg group-hover:shadow-xl transition-shadow"
        />
        <div className={`absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ${statusColors[status]} border-2 border-white rounded-full`} />
      </div>
      <div className="text-center">
        <p className="font-medium text-gray-900 text-xs sm:text-sm truncate max-w-full">{name}</p>
        {specialty && <p className="text-gray-500 text-xs hidden sm:block">{specialty}</p>}
      </div>
    </div>
  );
}
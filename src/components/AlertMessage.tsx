import React from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';

interface AlertMessageProps {
  type: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  time: string;
  from: string;
  avatar: string;
  onDismiss?: () => void;
}

export function AlertMessage({ type, title, message, time, from, avatar, onDismiss }: AlertMessageProps) {
  return (
    <div className="flex items-center space-x-2 sm:space-x-3 flex-1">
      <img
        src={avatar}
        alt={from}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gray-200 flex-shrink-0"
      />
      
      <div className="flex-1 min-w-0"> {/* min-w-0 permet aux enfants de rétrécir correctement */}
        <div className="flex items-center space-x-2">
          <h4 className="font-semibold text-gray-700 text-xs sm:text-sm truncate">{from}</h4>
        </div>
        
        <p className="text-xs sm:text-sm text-gray-500 my-1 line-clamp-2">{message}</p>
        
        <div className="text-xs text-gray-400">
          <span>il y'a {time}</span>
        </div>
      </div>
    </div>
  );
}
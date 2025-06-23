import React from 'react';
import { Star, User } from 'lucide-react';

interface PatientTreatmentProps {
  patientName: string;
  treatmentCode: string;
  doctor: string;
  status: 'active' | 'completed' | 'pending';
  priority: number;
}

export function PatientTreatment({
  patientName,
  treatmentCode,
  doctor,
  status,
  priority,
}: PatientTreatmentProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-2 sm:p-3 flex items-center justify-between border border-gray-100 mb-2">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <div className="bg-gray-100 p-1.5 sm:p-2 rounded-full flex-shrink-0">
          <User size={16} className="text-gray-500 sm:hidden" />
          <User size={20} className="text-gray-500 hidden sm:block" />
        </div>
        <div className="min-w-0"> {/* Permet aux enfants de rétrécir correctement */}
          <div className="flex items-center">
            <h3 className="font-medium text-gray-900 text-xs sm:text-sm truncate max-w-[80px] sm:max-w-[120px] md:max-w-full">{patientName}</h3>
            <span className="text-xs text-gray-400 ml-1 sm:ml-2 flex-shrink-0">
              {status === 'active' ? 'actif' : status === 'pending' ? 'en attente' : 'terminé'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
        <div>
          <div className="text-[#16a34a] font-medium text-right text-xs sm:text-sm">{treatmentCode}</div>
          <div className="flex items-center justify-end text-xs sm:text-sm text-gray-500">
            <span className="truncate max-w-[60px] sm:max-w-full">{doctor}</span>
            <Star size={12} className="text-[#eab308] ml-1 sm:hidden" />
            <Star size={14} className="text-[#eab308] ml-1 hidden sm:block" />
          </div>
        </div>
      </div>
    </div>
  );
}
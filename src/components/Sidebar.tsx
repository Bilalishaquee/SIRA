import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Stethoscope, 
  UserPlus, 
  Package, 
  HelpCircle, 
  LogOut, 
  Settings 
} from 'lucide-react';
import { Logo } from './Logo';
import { useAuth } from '../contexts/AuthContext';

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'TABLEAU DE BORD', icon: LayoutDashboard, color: 'text-blue-500' },
  { id: 'patients', label: 'Patients 2.0', icon: Users },
  { id: 'planning', label: 'Planning', icon: Calendar },
  { id: 'cabinet', label: 'Cabinet', icon: Stethoscope },
  { id: 'doctors', label: 'Médecins', icon: UserPlus },
  { id: 'resources', label: 'Ressources Humaines', icon: Package },
  { id: 'marketplace', label: 'Marketplace', icon: Package },
  { id: 'support', label: 'Support', icon: HelpCircle }
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-white h-screen shadow-lg flex flex-col border-r border-gray-200 overflow-y-auto">
      <div className="p-6 border-b border-gray-200">
        <Logo size="md" variant="light" />
      </div>
      
      {/* Active Dashboard Button */}
      <div className="p-4">
        <button
          onClick={() => onItemClick('dashboard')}
          className="w-full bg-[#38bdf8] text-white px-4 py-3 rounded-lg font-medium flex items-center space-x-3 shadow-md"
        >
          <LayoutDashboard size={20} />
          <span className="text-sm md:text-base">TABLEAU DE BORD</span>
        </button>
      </div>
      
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.slice(1).map((item) => {
            const Icon = item.icon;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onItemClick(item.id)}
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                >
                  <Icon size={20} className="text-gray-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium truncate">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-200 space-y-1">
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          <LogOut size={20} className="text-gray-400 flex-shrink-0" />
          <span className="text-xs md:text-sm font-medium">Se déconnecter</span>
        </button>
        
        <button
          onClick={() => onItemClick('settings')}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          <Settings size={20} className="text-gray-400 flex-shrink-0" />
          <span className="text-xs md:text-sm font-medium">Paramètres</span>
        </button>
      </div>
    </div>
  );
}
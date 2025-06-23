import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { Menu } from 'lucide-react';

export function DashboardLayout() {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Patients 2.0</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Patients en développement...</p>
            </div>
          </div>
        );
      case 'planning':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Planning</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Planning en développement...</p>
            </div>
          </div>
        );
      case 'cabinet':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Cabinet</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Cabinet en développement...</p>
            </div>
          </div>
        );
      case 'doctors':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Médecins</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Médecins en développement...</p>
            </div>
          </div>
        );
      case 'resources':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Ressources Humaines</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module RH en développement...</p>
            </div>
          </div>
        );
      case 'marketplace':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Marketplace</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Marketplace en développement...</p>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Support</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Support en développement...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="flex-1 bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Paramètres</h1>
            <div className="bg-white rounded-xl shadow-sm p-8 text-center">
              <p className="text-gray-500">Module Paramètres en développement...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="relative flex h-screen bg-gray-50 overflow-hidden">
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-md bg-white shadow-md text-gray-600 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for mobile with overlay */}
      <div 
        className={`${sidebarOpen ? 'block' : 'hidden'} lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Responsive Sidebar */}
      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:relative z-40 transition-transform duration-300 ease-in-out
      `}>
        <Sidebar activeItem={activeItem} onItemClick={(item) => {
          setActiveItem(item);
          setSidebarOpen(false);
        }} />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto w-full">
        {renderContent()}
      </div>
    </div>
  );
}
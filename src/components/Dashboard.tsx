import React from 'react';
import { Search, MessageSquare, Bell, Plus, ChevronDown } from 'lucide-react';
import { StatCard } from './StatCard';
import { DoctorCard } from './DoctorCard';
import { PatientTreatment } from './PatientTreatment';
import { AlertMessage } from './AlertMessage';
import { StatisticsChart } from './StatisticsChart';
import { useAuth } from '../contexts/AuthContext';

const mockDoctors = [
  { name: 'Alfredo', avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300', specialty: 'Cardiologue' },
  { name: 'Claudia', avatar: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300', specialty: 'Dermatologue' },
  { name: 'Cahaya', avatar: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300', specialty: 'Neurologue' },
  { name: 'Mariana', avatar: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300', specialty: 'Pédiatre' },
  { name: 'Olivia', avatar: 'https://images.pexels.com/photos/5327647/pexels-photo-5327647.jpeg?auto=compress&cs=tinysrgb&w=300', specialty: 'Chirurgienne' }
];

const mockPatients = [
  { patientName: 'BOX1', treatmentCode: 'ACTE 1', doctor: 'MEDECIN 1', status: 'active' as const, priority: 4 },
  { patientName: 'BOX2', treatmentCode: 'ACTE 2', doctor: 'MEDECIN 2', status: 'active' as const, priority: 3 },
  { patientName: 'BOX3', treatmentCode: 'ACTE 3', doctor: 'MEDECIN 3', status: 'pending' as const, priority: 5 }
];

const mockAlerts = [
  {
    id: '1',
    type: 'info' as const,
    title: 'Technicien',
    message: 'problème au niveau de l\'aspiration',
    time: 'il y a 1 minute',
    from: 'Service Technique',
    avatar: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=300'
  }
];

const statisticsData = [
  { week: 'Week 1', value1: 5, value2: 5, value3: 5 },
  { week: 'Week 2', value1: 8, value2: 8, value3: 4 },
  { week: 'Week 3', value1: 15, value2: 10, value3: 5 },
  { week: 'Week 4', value1: 18, value2: 14, value3: 8 }
];

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      {/* Header */}
      <div className="bg-white px-4 sm:px-6 md:px-8 py-4 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center w-full sm:w-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher ici..."
                className="pl-10 pr-4 py-2 w-full sm:w-64 md:w-80 lg:w-96 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4 w-full sm:w-auto justify-end">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
              <MessageSquare size={18} />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <button className="bg-[#38bdf8] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#0ea5e9] transition-colors flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
              <Plus size={16} />
              <span>Nouveau Patient</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Aperçu Section */}
          <div className="lg:col-span-7">
            {/* Aperçu Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-gray-900">Aperçu</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>ce jour</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 border border-gray-100 rounded-2xl p-3 bg-white">
              <StatCard
                title="chiffre d'affaire"
                value="20.000 DH"
                change={70}
                isPositive={true}
                bgColor="bg-[#0ea5e9]"
                textColor="text-white"
              />
              <StatCard
                title="Impayés"
                value="50.000"
                change={-10}
                isPositive={false}
                bgColor="bg-white"
                textColor="text-gray-900"
              />
            </div>

            {/* Salle D'attente */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-semibold text-gray-900">Salle D'attente</h3>
                <button className="text-[#38bdf8] hover:text-[#0284c7] text-xs font-medium">
                  voir tout
                </button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mockDoctors.map((doctor, index) => (
                  <DoctorCard
                    key={index}
                    name={doctor.name}
                    avatar={doctor.avatar}
                    specialty={doctor.specialty}
                  />
                ))}
              </div>
            </div>

            {/* Alertes & Messages */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Alertes & Messages</h3>
                <button className="text-[#38bdf8] hover:text-[#0284c7] text-sm font-medium">
                  Voir tout
                </button>
              </div>
              
              <div className="space-y-4 mt-2">
                {mockAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                    <AlertMessage {...alert} />
                    <button className="ml-4 bg-[#38bdf8] text-white px-5 py-2 rounded-xl hover:bg-[#0284c7] transition-colors text-sm font-medium">
                      Répondre
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Traitements Section */}
          <div className="lg:col-span-5">
            {/* Traitements en cours */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Traitements en cours</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>Ce jour</span>
                  <ChevronDown size={14} />
                </div>
              </div>
              
              <div>
                {mockPatients.map((patient, index) => (
                  <PatientTreatment
                    key={index}
                    patientName={patient.patientName}
                    treatmentCode={patient.treatmentCode}
                    doctor={patient.doctor}
                    status={patient.status}
                    priority={patient.priority}
                  />
                ))}
              </div>
            </div>

            {/* Statistiques */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-900">Statistiques</h2>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <span>CE MOIS</span>
                  <ChevronDown size={14} />
                </div>
              </div>
              
              <StatisticsChart data={statisticsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
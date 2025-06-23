export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'doctor' | 'staff';
}

export interface Doctor {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  status: 'available' | 'busy' | 'offline';
}

export interface Patient {
  id: string;
  name: string;
  avatar: string;
  treatment: string;
  doctor: string;
  status: 'active' | 'completed' | 'pending';
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  time: string;
  from: string;
  avatar: string;
}

export interface Statistics {
  revenue: number;
  revenueChange: number;
  unpaid: number;
  unpaidChange: number;
  weeklyData: Array<{
    week: string;
    value: number;
  }>;
}
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend, LabelList } from 'recharts';

interface StatisticsChartProps {
  data: Array<{
    week: string;
    value1: number;
    value2: number;
    value3: number;
  }>;
}

export function StatisticsChart({ data }: StatisticsChartProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-3 sm:p-4">
      <div className="h-48 sm:h-52 md:h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 15, right: 5, left: -5, bottom: 5 }} className="text-xs sm:text-sm">
            <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="3 3" />
            <XAxis 
              dataKey="week" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: '#6B7280' }}
              width={25}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '0.5rem',
                fontSize: '0.75rem',
                padding: '0.5rem'
              }}
              itemStyle={{ padding: 0 }}
              formatter={(value) => [`${value}`, '']}
              labelFormatter={(label) => `${label}`}
            />
            <Bar 
              name="Consultations"
              dataKey="value1" 
              fill="#38bdf8"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
            <Bar 
              name="Patients"
              dataKey="value2" 
              fill="#0ea5e9"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
            <Bar 
              name="Revenus"
              dataKey="value3" 
              fill="#0369a1"
              radius={[4, 4, 0, 0]}
              barSize={15}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
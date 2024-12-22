import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const BusScheduleApp = () => {
  const schedules = {
    toDeuxOrmeaux: [
      '07:05', '07:25', '07:45', '08:05', '08:25', '08:45',
      '09:05', '09:35', '10:05', '10:35', '11:05', '11:35',
      '12:05', '12:35', '13:05', '13:35', '14:05', '14:35',
      '15:05', '15:35', '16:05', '16:25', '16:45', '17:05',
      '17:25', '17:45', '18:05', '18:25', '18:45', '19:15',
      '19:45', '20:15', '20:45'
    ],
    toUniversite: [
      '06:45', '07:05', '07:25', '07:45', '08:05', '08:25',
      '08:55', '09:25', '09:55', '10:25', '10:55', '11:25',
      '11:55', '12:25', '12:55', '13:25', '13:55', '14:25',
      '14:55', '15:25', '15:45', '16:05', '16:25', '16:45',
      '17:05', '17:25', '17:45', '18:15', '18:45', '19:15',
      '19:45', '20:15'
    ]
  };

  const [currentTime] = useState(new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }));

  const getNextDepartures = (times) => {
    const now = currentTime;
    return times.filter(time => time >= now).slice(0, 5);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h1 className="text-xl font-bold text-center mb-4">
        Ligne 81 - Horaires du jour
      </h1>
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-semibold mb-2">Vers Deux Ormeaux</h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
            <Clock size={16} />
            <span>Il est actuellement {currentTime}</span>
          </div>
          <div className="space-y-2">
            {getNextDepartures(schedules.toDeuxOrmeaux).map((time, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                <Clock size={16} className="text-blue-500" />
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Vers Université</h2>
          <div className="space-y-2">
            {getNextDepartures(schedules.toUniversite).map((time, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                <Clock size={16} className="text-blue-500" />
                <span>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusScheduleApp;
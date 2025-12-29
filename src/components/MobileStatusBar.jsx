import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

const MobileStatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <div className="w-full px-6 py-2 flex justify-between items-center text-white text-sm font-medium z-50 select-none mix-blend-difference">
      <div className="time">
        <span>{formatTime(time)}</span>
      </div>
      <div className="flex items-center gap-2">
        <Signal size={16} fill="currentColor" />
        <Wifi size={16} />
        <Battery size={20} className='ml-1' />
      </div>
    </div>
  );
};

export default MobileStatusBar;

import React, { useEffect, useState } from 'react';
import '../styles/DaySummary.scss';
import Weather from './Weather';

function DaySummary() {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
  const [day, setDay] = useState<string>(new Date().toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' }));
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
    const getDay = () => {
      setDay(new Date().toLocaleString('default', { year: 'numeric', month: 'short', day: 'numeric' }));
    };
    getDay();
    return () => {
      clearInterval(timer);
    };
  }, [setTime]);

  return (
    <div className="background">
      <div className="summary-items">
        <div className="summary-item-left">
          <h2 className="summary-time">{time}</h2>
          <p className="summary-day">{day}</p>
        </div>
        <div className="summary-item-right">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default DaySummary;

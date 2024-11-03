import React, { createContext, useState, useEffect } from 'react';
import calendarData from '../data/calendarData.json';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [selectedDay, setSelectedDay] = useState(null);
  const [timer, setTimer] = useState('');

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0
    );
    const difference = midnight - now;

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    setTimer(`${hours}h ${minutes}m ${seconds}s`);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = midnight - now;

      if (difference <= 0) {
        setCurrentDay(new Date().getDate());
        clearInterval(interval);
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimer(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentDay]);

  return (
    <AppContext.Provider
      value={{ calendarData, currentDay, selectedDay, setSelectedDay, timer }}
    >
      {children}
    </AppContext.Provider>
  );
} 
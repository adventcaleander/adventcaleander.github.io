import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import Day from './Day.jsx';
import '../styles/Calendar.css';

function Calendar() {
  const { calendarData, currentDay, timer } = useContext(AppContext);

  return (
    <div className="calendar-container">
      <div className="countdown">
        Next day unlocks in: {timer}
      </div>
      <div className="calendar-grid">
        {calendarData.map((dayData) => (
          <Day key={dayData.day} dayData={dayData} currentDay={currentDay} />
        ))}
      </div>
    </div>
  );
}

export default Calendar; 
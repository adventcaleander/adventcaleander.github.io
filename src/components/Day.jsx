import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import '../styles/Day.css';

function Day({ dayData, currentDay }) {
  const { setSelectedDay } = useContext(AppContext);
  const isUnlocked = dayData.day <= currentDay;

  const handleClick = () => {
    if (isUnlocked) {
      setSelectedDay(dayData);
    }
  };

  return (
    <div
      className={`day ${isUnlocked ? 'unlocked' : 'locked'}`}
      onClick={handleClick}
    >
      <div className="day-number">{dayData.day}</div>
      {isUnlocked ? (
        <img
          src={`/src/assets/images/${dayData.image}`}
          alt={`Day ${dayData.day}`}
          className="day-image"
        />
      ) : (
        <div className="lock-icon">🔒</div>
      )}
    </div>
  );
}

export default Day; 
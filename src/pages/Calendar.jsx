import React from 'react';
import './Calendar.css';

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h1>Calendar</h1>
        <div>{today.toLocaleDateString("en-MY", options)}</div>
      </div>
      <div className="days-of-week">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="calendar-grid">
        {days.map((day) => (
          <div
            key={day}
            className={`calendar-day ${day === today.getDate() ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
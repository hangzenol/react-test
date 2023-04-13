import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const days = [
    "Sun", 
    "Mon", 
    "Tue", 
    "Wed", 
    "Thu", 
    "Fri", 
    "Sat"
    ];

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentYear, currentMonth));

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = [...Array(firstDay ? firstDay - 1 : 6).fill(null), ...Array(daysInMonth).fill().map((_, index) => index + 1)];

  const handleSelectDate = (day) => {
    setSelectedDate(day);
  }

  return (
    <div className="calendar">
        <div className='main'>
            <h1>Calendar</h1>
        </div>
      <div className="month">{monthName} {currentYear}</div>
      <div className="weekdays">
        {days.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="days">
        {daysArray.map((day) => (
          <div
            key={day}
            className={`day ${day ? '' : 'null'} ${selectedDate === day ? 'selected' : ''}`}
            onClick={() => handleSelectDate(day)}
          >
            {day}
          </div>
        ))}
      </div>
      {selectedDate && (
        <div className="selected-date">Date: {selectedDate} {monthName} {currentYear}</div>
      )}
    </div>
  );
};

export default Calendar;

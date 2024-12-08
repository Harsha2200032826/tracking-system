import React from 'react';
import './Schedule.css'; // Importing CSS for styling

const Schedule = () => {
  // Example schedule data (can be replaced with dynamic data from an API or database)
  const scheduleData = [
    {
      id: 1,
      time: '9:00 AM - 10:00 AM',
      topic: 'Keynote: Future of Technology',
      speaker: 'Dr. Sarah Johnson',
    },
    {
      id: 2,
      time: '10:15 AM - 11:15 AM',
      topic: 'AI in Healthcare',
      speaker: 'Prof. Alan Smith',
    },
    {
      id: 3,
      time: '11:30 AM - 12:30 PM',
      topic: 'Cybersecurity Trends',
      speaker: 'Ms. Emma Davis',
    },
    {
      id: 4,
      time: '2:00 PM - 3:00 PM',
      topic: 'Blockchain and Finance',
      speaker: 'Mr. Robert Brown',
    },
    {
      id: 5,
      time: '3:15 PM - 4:15 PM',
      topic: 'Closing Panel Discussion',
      speaker: 'Various Experts',
    },
  ];

  return (
    <div className="schedule">
      <h1 className="schedule-title">Conference Schedule</h1>
      <div className="schedule-container">
        {scheduleData.map((session) => (
          <div key={session.id} className="schedule-card">
            <h2 className="session-time">{session.time}</h2>
            <h3 className="session-topic">{session.topic}</h3>
            <p className="session-speaker">Speaker: {session.speaker}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

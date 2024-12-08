
import React from 'react';
import { Link } from 'react-router-dom';
import './Session.css';

const sessions = [
  {
    id: 1,
    title: 'Advancements in Artificial Intelligence',
    speaker: 'Dr. Alice Johnson',
    time: '10:00 AM - 11:30 AM',
    location: 'Hall A',
    description: 'Explore the latest trends and research in AI, including deep learning and neural networks.',
  },
  {
    id: 2,
    title: 'Sustainable Technologies in Construction',
    speaker: 'Prof. Mark Thompson',
    time: '12:00 PM - 1:30 PM',
    location: 'Hall B',
    description: 'Discuss innovative solutions and technologies for sustainable construction practices.',
  },
  {
    id: 3,
    title: 'Cybersecurity in a Digital World',
    speaker: 'Dr. Rebecca Smith',
    time: '2:00 PM - 3:30 PM',
    location: 'Hall C',
    description: 'Understand modern cybersecurity threats and how to protect systems effectively.',
  },
];

const Session = () => {
  return (
    <div className="session">
      <h1>Conference Sessions</h1>
      <div className="session-list">
        {sessions.map((session) => (
          <div key={session.id} className="session-card">
            <h2><Link to={`/sessions/${session.id}`}>{session.title}</Link></h2>
            <p><strong>Speaker:</strong> {session.speaker}</p>
            <p><strong>Time:</strong> {session.time}</p>
            <p><strong>Location:</strong> {session.location}</p>
            <p><strong>Description:</strong> {session.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Session;

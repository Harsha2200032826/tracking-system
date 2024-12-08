import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

const SessionDetail = () => {
  const { id } = useParams();
  const session = sessions.find((session) => session.id === parseInt(id, 10));

  if (!session) {
    return <h1>Session not found</h1>;
  }

  return (
    <div className="session-detail">
      <h1>{session.title}</h1>
      <p><strong>Speaker:</strong> {session.speaker}</p>
      <p><strong>Time:</strong> {session.time}</p>
      <p><strong>Location:</strong> {session.location}</p>
      <p><strong>Description:</strong> {session.description}</p>

      {/* Button to Enter the Session */}
      <div className="enter-session">
        <Link to={`/session/${session.id}/enter`} className="enter-session-button">
          Enter Session
        </Link>
      </div>
    </div>
  );
};

export default SessionDetail;

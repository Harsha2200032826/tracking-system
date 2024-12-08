import React from 'react';
import './Speaker.css'; // Create a CSS file for styling the Speaker component

const Speaker = () => {
  const speakers = [
    {
      id: 1,
      name: 'Dr. Emily Brown',
      title: 'AI Researcher',
      bio: 'Expert in artificial intelligence and machine learning, with over 15 years of experience.',
    },
    {
      id: 2,
      name: 'Prof. James Wilson',
      title: 'Cybersecurity Specialist',
      bio: 'Renowned professor and speaker on cybersecurity and data privacy.',
    },
    {
      id: 3,
      name: 'Dr. Sarah Johnson',
      title: 'Data Scientist',
      bio: 'Pioneer in big data analytics and its applications in healthcare.',
    },
    {
      id: 4,
      name: 'Mr. John Doe',
      title: 'Tech Entrepreneur',
      bio: 'Founder of multiple successful startups in the tech industry.',
    },
  ];

  return (
    <div className="speaker-page">
      <header className="speaker-header">
        <h1>Our Speakers</h1>
        <p>Meet the experts who will be sharing their insights at the conference.</p>
      </header>
      <section className="speaker-list">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="speaker-card">
            <h2 className="speaker-name">{speaker.name}</h2>
            <h3 className="speaker-title">{speaker.title}</h3>
            <p className="speaker-bio">{speaker.bio}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Speaker;

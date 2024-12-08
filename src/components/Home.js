import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Paper submitted successfully!");
    setFormData({ title: "", author: "", file: null }); // Reset the form
  };

  return (
    <div className="home">
      {/* Header */}
      <header className="header">
        <div className="logo">ConferencePro</div>
        <nav>
          <ul>
            <li><a href="Session">Sessions</a></li>
            <li><a href="Speaker">Speaker</a></li>
            <li><a href="Registration">Registration</a></li>
            <li><a href="schedule">Schedule</a></li>
            <li><Link to="/signup">Login/Sign Up</Link></li>
            <li><Link to="/learn-more" className="learn-more-button">Learn More</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Streamline Your Conference Experience</h1>
          <p>Manage paper submissions, schedules, and attendee registrations effortlessly.</p>
          <button className="learn-more-button">Learn More</button>
        </div>
        <div className="hero-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXnwj4SYEoOkSqZI4xF0F7MxyhDSEsVxvTDw&s" alt="Conference management" />
        </div>
      </section>

      {/* Paper Submission Section */}
      <section className="paper-submission">
        <h2>Submit Your Paper</h2>
        <form onSubmit={handleSubmit} className="submission-form">
          <div className="form-group">
            <label htmlFor="title">Paper Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Enter paper title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author Name:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload Paper:</label>
            <input
              type="file"
              id="file"
              name="file"
              onChange={handleFileChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Submit Paper
          </button>
        </form>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Paper Submissions</h3>
            <p>Submit, review, and manage academic papers seamlessly.</p>
          </div>
          <div className="feature-card">
            <h3>Session Scheduling</h3>
            <p>Plan and organize conference sessions effectively.</p>
            <Link to="/schedule" className="feature-link">View Schedule</Link>
          </div>
          <div className="feature-card">
            <h3>Attendee Management</h3>
            <p>Track registrations and provide a smooth attendee experience.</p>
            <a href="https://example.com/attendee-management" target="_blank" rel="noopener noreferrer" className="feature-link">
              Read More
            </a>
          </div>
          <div className="feature-card">
            <h3>Speaker Profiles</h3>
            <p>Highlight key speakers and their expertise.</p>
            <Link to="/speakers" className="feature-link">Meet Speakers</Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Register</h3>
            <p>Sign up and set up your profile for the conference.</p>
          </div>
          <div className="step">
            <h3>Step 2: Submit Papers</h3>
            <p>Upload your academic papers for review.</p>
          </div>
          <div className="step">
            <h3>Step 3: View Schedule</h3>
            <p>Access the conference schedule and session details.</p>
          </div>
          <div className="step">
            <h3>Step 4: Attend Sessions</h3>
            <p>Participate in sessions and network with peers.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"ConferencePro made managing my session a breeze!"</p>
            <h4>— Dr. Emily Brown, Researcher</h4>
          </div>
          <div className="testimonial-card">
            <p>"The paper submission system is incredibly user-friendly."</p>
            <h4>— Prof. James Wilson, Speaker</h4>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="social-media">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 ConferencePro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import './Registration.css'; // Create a CSS file for styling the Registration component

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    sessionPreference: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
    setSubmitted(true);
  };

  return (
    <div className="registration-page">
      <header className="registration-header">
        <h1>Conference Registration</h1>
        <p>Secure your spot at the conference by filling out the form below.</p>
      </header>
      {!submitted ? (
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="institution">Institution/Organization</label>
            <input
              type="text"
              id="institution"
              name="institution"
              value={formData.institution}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="sessionPreference">Session Preference</label>
            <select
              id="sessionPreference"
              name="sessionPreference"
              value={formData.sessionPreference}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a session</option>
              <option value="Keynote">Keynote</option>
              <option value="Workshop">Workshop</option>
              <option value="Panel Discussion">Panel Discussion</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      ) : (
        <div className="registration-success">
          <h2>Thank you for registering!</h2>
          <p>We have received your details. See you at the conference!</p>
        </div>
      )}
    </div>
  );
};

export default Registration;

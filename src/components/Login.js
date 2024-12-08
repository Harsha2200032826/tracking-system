import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform login logic here (e.g., API call)
    // For demonstration purposes, we'll just log the values
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Reset form on successful login (this is just a placeholder)
    setEmail('');
    setPassword('');
    setError('');
  };

  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
     
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5XZBLrwJLUB5TxrSut_UB14HjUA_TKdalg&s")', // Replace with your image URL
      backgroundSize: 'cover', // Ensures the image covers the entire viewport
      backgroundRepeat: 'no-repeat', // Prevents tiling of the image
      backgroundPosition: 'center', // Centers the image
      backgroundColor: '#f0f2f5', // Fallback background color
      fontFamily: "'Arial', sans-serif",
        },
    formContainer: {
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '300px',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#007BFF',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        {error && <div style={styles.error}>{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Log In</button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/signup" style={{ color: '#007BFF' }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
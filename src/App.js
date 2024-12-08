import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // Importing Home component
import './App.css'; // Importing CSS for styling
import SignUp from './components/SignUp'; // Importing SignUp component
import Session from './components/Session'; // Importing Session component
import SessionDetail from './components/SessionDetail'; // Importing SessionDetail component
import Speaker from './components/Speaker'; // Importing Speaker component
import Registration from './components/Registration'; // Importing Registration component
import Schedule from './components/Schedule';
import LearnMore from './components/LearnMore';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* SignUp route */}
          <Route path="/signup" element={<SignUp />} />

          {/* Session route */}
          <Route path="/Session" element={<Session />} />

          {/* Dynamic Session Detail route */}
          <Route path="/sessions/:id" element={<SessionDetail />} />

          {/* Speaker route */}
          <Route path="/Speaker" element={<Speaker />} />

          {/* Registration route */}
          <Route path="/Registration" element={<Registration />} />

          <Route path="/schedule" element={<Schedule />} />

          <Route path="/LearnMore" element={<LearnMore />} />

          <Route path="/Login" element={<Login />} />


          

        </Routes>
      </div>
    </Router>
  );
}

export default App;

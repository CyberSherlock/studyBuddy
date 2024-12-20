import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import VideoConferencing from './video';
import Navbar from './navbar'; // Import the Navbar
import ScheduleTutor from './scheduleTutor';
import ScheduleTutoree from './scheduleTutoree';
import Register from './register';
import Dashboard from './dashboard';
// The main App component that handles the routing and overall structure of the application
const App = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Check the user type from localStorage when the component mounts
    const storedUserType = localStorage.getItem('userType');
    setUserType(storedUserType);
  }, []);
  return (
    <Router> {/* Wraps the entire app in a Router to enable routing functionality */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Register />} />
            <Route path="/video" element={<VideoConferencing />} />
            <Route path="/schedule" element={userType === 'tutor' ? <ScheduleTutor /> : <ScheduleTutoree />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Define additional pages here */}
          </Routes>
        </div>
    </Router>
  );
};

export default App;
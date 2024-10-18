import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './components/login/login';
import Register from './components/register/register';
import ForgotPassword from './components/forgotpass/ForgotPassword';
import UserDashboard from './components/userdashboard/UserDashboard'; // Import UserDashboard
import PrivateRoute from './auth/PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Navbar />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Protect the dashboard route */}
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            } 
          />

          {/* Default route - redirects to /login */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

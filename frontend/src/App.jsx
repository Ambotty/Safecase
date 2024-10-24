import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Navbar from './components/login/login';
import Register from './components/register/register';
import ForgotPassword from './components/forgotpass/ForgotPassword';
import UserDashboard from './components/userdashboard/UserDashboard'; 
import UniformSafetyEquipment from './components/uniformsafetyequipment/UniformSafetyEquipment'; // Import the component
import HealthAndSafetyIncidents from './components/healthAndSafety/HealthAndSafetyIncidents'; 
import EquipmentRelatedIncidents from './components/equipmentrelatedincidents/EquipmentRelatedIncidents'; 
import { onAuthStateChanged } from 'firebase/auth'; // Import onAuthStateChanged from Firebase
import { auth } from './firebase'; // Firebase auth import

const App = () => {
  const [user, setUser] = useState(null); // Store user state
  const [loading, setLoading] = useState(true); // To manage loading state while checking auth

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is logged in
      } else {
        setUser(null); // User is not logged in
      }
      setLoading(false); // Authentication state is now determined
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while the auth state is being checked
  }

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Navbar />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/uniform-safety-equipment" element={<UniformSafetyEquipment />} /> 
          <Route path="/health-and-safety-incidents" element={<HealthAndSafetyIncidents />} /> 
          <Route path="/equipment-related-incidents" element={<EquipmentRelatedIncidents />} /> 
          

          
          {/* Protect the dashboard route */}
          <Route 
            path="/dashboard" 
            element={user ? <UserDashboard /> : <Navigate to="/login" />} 
          />

          {/* Default route - redirects to /login */}
          <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

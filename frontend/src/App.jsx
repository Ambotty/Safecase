import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/login/login';
import Register from './components/register/register';
import ForgotPassword from './components/forgotpass/ForgotPassword';

const App = () => {
  return (
    <Router>
      <div className='app'>
        {/* Define the Routes for your app */}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Navbar />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* Add a default route or homepage route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
 
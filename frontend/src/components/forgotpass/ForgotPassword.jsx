import React, { useState } from 'react';
import './forgotpassword.css'; // You can create a similar CSS file for styling
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  // State for storing email and errors
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError('Email is required.');
      return;
    }

    // Logic for forgot password process (could be an API call)
    console.log('Reset link sent to:', email);

    // Simulate success message after form submission
    setSuccessMessage('A password reset link has been sent to your email.');
    setError('');
    setEmail('');
  };

  return (
    <div className='background'>
      <div className="forgot-password-container">
        <h3 className='form-title'>Forgot Password</h3>
        <form action="#" className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            Enter your email address:
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
          <button type="submit" className="reset-btn">Send Reset Link</button>
        </form>
        <p className="sign-in-text">
          Remembered your password? <Link className="bold" to="/login">Log In Here</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

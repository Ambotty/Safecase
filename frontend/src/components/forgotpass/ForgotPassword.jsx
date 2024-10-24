import React, { useState } from 'react';
import './forgotpassword.css'; // Your existing CSS
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth'; // Import from Firebase
import { auth } from '../../firebase'; // Import auth from your Firebase configuration

const ForgotPassword = () => {
  // State for storing email, success, and error messages
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');  // Reset error state
    setSuccessMessage('');  // Reset success message

    // Basic validation
    if (!email) {
      setError('Email is required.');
      return;
    }

    try {
      // Send password reset email using Firebase
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage('A password reset link has been sent to your email.');
    } catch (error) {
      setError('Error sending reset email. Please check the email address and try again.');
    }

    // Clear the input field
    setEmail('');
  };

  return (
    <div className='background'>
      <div className="forgot-password-container">
        <h3 className='form-title'>Forgot Password</h3>
        <form className="forgot-password-form" onSubmit={handleSubmit}>
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

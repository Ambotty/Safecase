import React, { useState } from 'react';
import './register.css';
import logoimg from '../../assets/safecase.png';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import Firebase auth from your firebase.js

const SignUp = () => {
  // State for storing user input and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Create user with email and password using Firebase Authentication
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', { username, email });

      // Clear form and error after successful sign-up
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setError('');

      // You can also redirect to another page here (e.g., dashboard) after successful sign-up
    } catch (err) {
      // Handle Firebase errors
      setError(err.message);
    }
  };

  return (
    <div className='background'>
      <div className="signup-container">
        <h3 className='form-title'>USER SIGN UP</h3>
        <form action="#" className="signup-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            Username
            <input
              type="text"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            Email
            <input
              type="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            Password
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            Confirm Password
            <input
              type="password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="sign-in-text">
          Already have an account? <Link className="bold" to="/login">Log In Here</Link>
        </p>
      </div>
      <div className="signup-page-text">
        <h2 className="welcome-message">WELCOME</h2>
        <div className="logo">
          <img className="logo-img" src={logoimg} alt="Logo" />
        </div>
        <div className="caption-heading">
          <h3>Your Safety, Our Priority!</h3>
          <p className='caption-message'>Stay proactive in ensuring a safer <br /> environment. Our platform allows <br />you to report, track, and resolve <br /> safety incidents effortlessly.</p>
        </div>    
      </div>     
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import './register.css';
// import myimage from '../../assets/safecace-signup-background.jpg';
import logoimg from '../../assets/safecase.png';

const SignUp = () => {
  // State for storing user input and errors
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
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

    // Logic for sign-up process (could be API call, authentication, etc.)
    console.log('Signing up with:', { username, email, password });

    // Clear form and error after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className='background'>
      {/* <img className='background-image' src={myimage} alt="SignUp Background" /> */}
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
          Already have an account? <a className="bold" href="./components/login/login">Log In Here</a>
        </p>
      </div>
      <div className="signup-page-text">
        <h2 className="welcome-message">JOIN US</h2>
        <div className="logo">
          {/* <img className="logo-img" src={logoimg} alt="Logo" /> */}
        </div>
        <div className="caption-heading">
          <h3>Safety First!</h3>
          {/* <p className='caption-message'>Become part of a proactive <br /> community where safety is <br /> always a priority. Sign up now <br /> and make a difference.</p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from 'react';
import './login.css';
import myimage from '../../assets/safecace-login-background.jpg';
import logoimg from '../../assets/safecase.png';

const Login = () => {
  // State for storing username, password, and errors
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Both username and password are required.');
      return;
    }

    // Logic for login process (could be API call, authentication, etc.)
    console.log('Logging in with:', { username, password });

    // Clear form and error after submission
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className='background'>
      {/* <img className='background-image' src={myimage} alt="Login Background" /> */}
      <div className="login-container">
        <h3 className='form-title'>USER LOGIN</h3>
        <form action="#" className="login-form" onSubmit={handleSubmit}>
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
            Password
            <input
              type="password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <a href="#" className="forgot-pass-link">Forgot Password?</a>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="sign-up-text">
          New Here? <a className="bold" href="./components/register/register">Click Here to Register</a>
        </p>
      </div>
      <div className="login-page-text">
        <h2 className="welcome-message">WELCOME</h2>
        <div className="logo">
          <img className="logo-img" src={logoimg} alt="" />
        </div>
        <div className="caption-heading">
          <h3>Your Safety, Our Priority!</h3>
          <p className='caption-message'>Stay proactive in ensuring a safer <br />  environment. Our platform allows <br />you to report, track, and resolve <br /> safety incidents effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

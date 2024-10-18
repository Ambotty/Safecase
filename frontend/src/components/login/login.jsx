import React, { useState } from 'react';
import './login.css';
import myimage from '../../assets/safecace-login-background.jpg';
import logoimg from '../../assets/safecase.png';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Import Firebase auth from your firebase.js

const Login = () => {
  // State for storing email (username), password, and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate after successful login

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Both email and password are required.');
      return;
    }

    try {
      // Firebase sign in with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);

      // Navigate to dashboard after successful login
      navigate('/dashboard');

      // Clear form and error after successful login
      setEmail('');
      setPassword('');
      setError('');
    } catch (err) {
      // Handle Firebase authentication errors
      setError(err.message);
    }
  };

  return (
    <div className='background'>
      <div className="login-container">
        <h3 className='form-title'>USER LOGIN</h3>
        <form action="#" className="login-form" onSubmit={handleSubmit}>
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
          {error && <p className="error-message">{error}</p>}
          <Link to="/forgot-password" className="forgot-pass-link">Forgot Password?</Link>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <p className="sign-up-text">
          New Here? <Link className="bold" to="/register">Click Here to Register</Link>
        </p>
      </div>
      <div className="login-page-text">
        <h2 className="welcome-message">WELCOME</h2>
        <div className="logo">
          <img className="logo-img" src={logoimg} alt="" />
        </div>
        <div className="caption-heading">
          <h3>Your Safety, Our Priority!</h3>
          <p className='caption-message'>
            Stay proactive in ensuring a safer <br /> environment. Our platform allows <br />
            you to report, track, and resolve <br /> safety incidents effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

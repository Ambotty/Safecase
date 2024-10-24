import React from 'react';
import './UserDashboard.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { signOut } from 'firebase/auth'; // Import signOut from Firebase
import { auth } from '../../firebase'; // Assuming you have auth initialized in firebase.js
import workimg from '../../assets/work-safety.png';
import logo from '../../assets/safecase.png';
import gear from '../../assets/gear.png';
import equipment from '../../assets/equipment.png';

const UserDashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out');
        navigate('/login'); // Redirect to login after successful logout
      })
      .catch((error) => {
        console.error('Sign out error:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1>WELCOME</h1>
        <i className="fas fa-user-circle user-icon"></i>
        <div className="username">USERNAME</div>
        <Link className="menu-item" to="/reporting">REPORTING</Link>
        <Link className="menu-item" to="/user-info">USER INFORMATION</Link>
        <Link className="menu-item" to="/feedback">FEEDBACK</Link>  
        <button className="logout" onClick={handleLogout}>LOG OUT</button>
      </div>
      <div className="main-content">
        <div className="content-header">
          <div className="logo">
            <img className='safecase-logo' src={logo} alt="" />
          </div>
          <div className="user-info">
            USER
            <i className="fas fa-user-circle user-icon"></i>
          </div>
        </div>
        <div className="grid">
          <div className="grid-item">
            <img className="work-image" src={workimg} alt="" />
            <i className="fas fa-vest"></i>
            <p>Uniform/Safety Equipment Violation</p> 
          </div>
          <div className="grid-item">
            <img className="gear-image" src={gear} alt="" />
            <i className="fas fa-first-aid"></i>
            <p>Health And Safety Incidents</p>
          </div>
          <div className="grid-item">
            <img className="equipment-image" src={equipment} alt="" />
            <i className="fas fa-tools"></i>
            <p>Equipment Related Incidents</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-fire"></i>
            <p>Fire And Electrical Hazards</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-radiation"></i>
            <p>Hazardous Material Violation</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-leaf"></i>
            <p>Environmental Hazards</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-briefcase"></i>
            <p>Worksite Policy Violations</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-cloud-showers-heavy"></i>
            <p>Weather Related Violations</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-user-alt-slash"></i>
            <p>Human Errors Incident Violation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

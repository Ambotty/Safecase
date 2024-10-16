import React from 'react';
import './UserDashboard.css';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <h1>WELCOME</h1>
        <i className="fas fa-user-circle user-icon"></i>
        <div className="username">USERNAME</div>
        <Link className="menu-item" to="/reporting">REPORTING</Link>
        <Link className="menu-item" to="/user-info">USER INFORMATION</Link>
        <Link className="menu-item" to="/feedback">FEEDBACK</Link>
        <div className="logout">LOG OUT</div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="logo">SafeCase</div>
          <div className="user-info">
            USER
            <i className="fas fa-user-circle user-icon"></i>
          </div>
        </div>
        <div className="grid">
          <div className="grid-item">
            <i className="fas fa-vest"></i>
            <p>Uniform/Safety Equipment Violation</p>
          </div>
          <div className="grid-item">
            <i className="fas fa-first-aid"></i>
            <p>Health And Safety Incidents</p>
          </div>
          <div className="grid-item">
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

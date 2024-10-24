import React from "react";
import "./UserDashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import workimg from "../../assets/work-safety.png";
import logo from "../../assets/safecase.png";
import gear from "../../assets/gear.png";
import equipment from "../../assets/equipment.png";
import fireimg from "../../assets/risk.png"
import hazardimg from "../../assets/hazardous-material.png"
import envimg from "../../assets/technology.png"
import policyimg from "../../assets/policy-violation.png"
import weatherimg from "../../assets/rainy-day.png"
import humanimg from "../../assets/humanerror.png"


const UserDashboard = () => {
  const navigate = useNavigate();

  const navigateToUniformSafety = () => {
    navigate("/uniform-safety-equipment");
  };

  const navigateToHealthAndSafety = () => {
    navigate("/health-and-safety");
  };

  const navigateToEquipmentIncidents = () => {
    navigate("/equipment-related-incidents");
  };

  const navigateToFireHazards = () => {
    navigate("/fire-electrical-hazards");
  };

  const navigateToHazardousMaterial = () => {
    navigate("/hazardous-material-violation");
  };

  const navigateToEnvironmentalHazards = () => {
    navigate("/environmental-hazards");
  };

  const navigateToPolicyViolations = () => {
    navigate("/worksite-policy-violations");
  };

  const navigateToWeatherViolations = () => {
    navigate("/weather-related-violations");
  };

  const navigateToHumanErrors = () => {
    navigate("/human-errors-incident-violation");
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1>WELCOME</h1>
        <i className="fas fa-user-circle user-icon"></i>
        <div className="username">{auth.currentUser?.displayName || "USERNAME"}</div>
        <Link className="menu-item" to="/reporting">REPORTING</Link>
        <Link className="menu-item" to="/user-info">USER INFORMATION</Link>
        <Link className="menu-item" to="/feedback">FEEDBACK</Link>
        <button className="logout" onClick={handleLogout}>LOG OUT</button>
      </div>
      <div className="main-content">
        <div className="content-header">
          <div className="logo">
            <img className="safecase-logo" src={logo} alt="Safe Case Logo" />
          </div>
          <div className="user-info">
            USER
            <i className="fas fa-user-circle user-icon"></i>
          </div>
        </div>
        <div className="grid">
          <div className="grid-item" onClick={navigateToUniformSafety} style={{ cursor: "pointer" }} tabIndex="0">
            <img className="work-image" src={workimg} alt="Work Safety" />
            <i className="fas fa-vest"></i>
            <p>Uniform Safety Equipments</p>
          </div>
          <div className="grid-item" onClick={navigateToHealthAndSafety} style={{ cursor: "pointer" }} tabIndex="0">
            <img className="gear-image" src={gear} alt="Health and Safety" />
            <i className="fas fa-first-aid"></i>
            <p>Health And Safety Incidents</p>
          </div>
          <div className="grid-item" onClick={navigateToEquipmentIncidents} style={{ cursor: "pointer" }} tabIndex="0">
            <img className="equipment-image" src={equipment} alt="Equipment Related" />
            <i className="fas fa-tools"></i>
            <p>Equipment Related Incidents</p>
          </div>
          <div className="grid-item" onClick={navigateToFireHazards} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={fireimg} alt="Equipment Related" />
            <i className="fas fa-fire"></i>
            <p>Fire And Electrical Hazards</p>
          </div>
          <div className="grid-item" onClick={navigateToHazardousMaterial} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={hazardimg} alt="Equipment Related" />
            <i className="fas fa-radiation"></i>
            <p>Hazardous Material Violation</p>
          </div>
          <div className="grid-item" onClick={navigateToEnvironmentalHazards} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={envimg} alt="Equipment Related" />
            <i className="fas fa-leaf"></i>
            <p>Environmental Hazards</p>
          </div>
          <div className="grid-item" onClick={navigateToPolicyViolations} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={policyimg} alt="Equipment Related" />
            <i className="fas fa-briefcase"></i>
            <p>Worksite Policy Violations</p>
          </div>
          <div className="grid-item" onClick={navigateToWeatherViolations} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={weatherimg} alt="Equipment Related" />
            <i className="fas fa-cloud-showers-heavy"></i>
            <p>Weather Related Violations</p>
          </div>
          <div className="grid-item" onClick={navigateToHumanErrors} style={{ cursor: "pointer" }} tabIndex="0">
          <img className="equipment-image" src={humanimg} alt="Equipment Related" />
            <i className="fas fa-user-alt-slash"></i>
            <p>Human Errors Incident Violation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

import React from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import Header from "./Header";
import "./RoleAndLocation.css";

function RoleAndLocation() {
  
const [roleOpen, setRoleOpen] = React.useState(false);
const [locationOpen, setLocationOpen] = React.useState(false);

  const location = useLocation();
  const username = location.state?.username;
  const navigate = useNavigate();
  



  
const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 18) return "Good Evening";
  return "Good Night";
};

const handleCancel = () => {
    navigate("/signoff");
  };


  return (
    <>
    <Header hideIcons/>
    
<div className="page-container">
      <div className="card">
        <label className="greeting-day">{getGreeting()}, {username}</label>
<h4>Please select your role and current location</h4>
        <div className="dropdown-row">
          

<div className="dropdown-group">
  <label className="role">Role</label>

  <div className="select-wrapper">
    <select
      className="underline-select"
      onFocus={() => setRoleOpen(true)}
      onBlur={() => setRoleOpen(false)}
      onChange={() => setRoleOpen(false)}   // ✅ closes after select
    >
      <option value="branch-licenced">Branch Licensed Banker</option>
      <option value="branch-manager">Branch Manager</option>
    </select>

    <img
      src={
        roleOpen
          ? "/images/up-arrow.png"
          : "/images/down-arrow.png"
      }
      className="dropdown-arrow"
      alt="dropdown arrow"
    />
  </div>
</div>

<div className="dropdown-group">
  <label className="location">Location</label>

  <div className="select-wrapper">
    <select
      className="underline-select"
      onFocus={() => setLocationOpen(true)}
      onBlur={() => setLocationOpen(false)}
      onChange={() => setLocationOpen(false)}
    >
      <option value="napa-downtown">Napa Downtown</option>
      <option value="wells-fargo">Wells Fargo Center Skyway</option>
      <option value="woodward">Woodward Park</option>
      <option value="yountville">Yountville</option>
    </select>

    <img
      src={
        locationOpen
          ? "/images/up-arrow.png"
          : "/images/down-arrow.png"
      }
      className="dropdown-arrow"
      alt="dropdown arrow"
    />
  </div>
</div>


        </div>
          <div className="button-row">
            <button className="btn-cancel" onClick={handleCancel}>Cancel</button>
            <button className="btn-continue">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoleAndLocation;

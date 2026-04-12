
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignOff.css";
import Header from "./Header";

const SignOff = () => {
  const navigate = useNavigate();

  const handleSignOn = () => {
    navigate("/");
  };

  return (
    <>
      <Header hideIcons />
      <p className="signoff-title">You signed off Compass</p>

      <div className="signoff-container">
        {/* <h2 className="signoff-content-text">
          Your Session was closed. <b>Sign on</b> to relaunch Compass
        </h2> */}
        
<p className="signoff-content-text">
  Your Session was closed. <span className="bold-text">Sign on</span> to relaunch Compass.
</p>


        {/* ✅ Responsive action area */}
        <div className="signoff-actions">
          <label className="signon-code">IADSK_BNK_0023</label>
          <button className="btn-signoff" onClick={handleSignOn}>
            Sign On
          </button>
        </div>
      </div>
    </>
  );
};

export default SignOff;

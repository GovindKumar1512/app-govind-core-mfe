
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignOn.css";
import Header from "./Header";

const SignOn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignOn = (e) => {
    e.preventDefault(); // ✅ stop page reload

    // ✅ default HTML validation check
    if (!e.target.checkValidity()) {
      e.target.reportValidity(); // show browser validation messages
      return; // 🔴 stop redirect
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      navigate("/role-and-location", {
        state: { username }
      });
    }, 2000);
  };

  return (
    <>
      <Header hideIcons />

      <div className="signon-container">
        <h2>Channel Secure Sign On</h2>

        <form className="signon-form" onSubmit={handleSignOn}>
          
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"            
            className="btn-signon"
            disabled={loading}
          >
            {loading ? "Signing on…" : "Sign On"}
          </button>

          <label className="warning-text">
            Warning: you have accessed a private computer system. Unauthorized
            access, use, connection, or entry is not permitted and constitutes
            a crime punishable by law. We reserve the right to fully pursue
            criminal and civil legal penalties. All individuals using this
            computer system with or without authorization are subject to having
            all of their activities on this system monitored.
          </label>

        </form>
      </div>
    </>
  );
};

export default SignOn;

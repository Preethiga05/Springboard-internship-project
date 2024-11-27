import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignupForm.css";
import buildingImage from "../assets/hero-bg.jpg";
import logo from "../assets/logo.jpg";

function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("resident");
  const navigate = useNavigate();

  // Handle form submission
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Sending the user data to the backend for registration
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
        role
      });

      // Storing the JWT token in localStorage
      localStorage.setItem("token", response.data.token);

      // Alert success
      alert("Registration Successful");

      // Redirect based on role
      if (role === "resident") {
        navigate("/register/resident");
      } else if (role === "admin") {
        navigate("/register/admin");
      }
    } catch (error) {
      console.error(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div
          className="signup-image"
          style={{
            backgroundImage: `url(${buildingImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="signup-form-container">
          <div className="signup-logo-container">
            <img src={logo} alt="CommUnity Logo" className="signup-logo" />
            <h1 className="highlighted-text">CommUnity</h1>
          </div>
          <h3 className="form-title">Sign Up</h3>
          <form className="signup-form" onSubmit={handleSignup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="resident">Resident</option>
              <option value="admin">Administrator</option>
            </select>

            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="login-link">
            Already have an account?{" "}
            <a href="/login" className="redirect-link">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

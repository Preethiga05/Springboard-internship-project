import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";
import heroBg from "../assets/hero-bg.jpg";

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup"); // Redirects to the Signup Form page
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1>Welcome to CommUnity</h1>
        <p>
          Your ultimate platform for housing society management and
          connectivity.
        </p>
        <button className="get-started-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default HeroSection;

import React from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <h1 className="title">CommUnity</h1>
      </div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Simplifying Society, Connecting Lives</h3>
      <div className="social-icons">
        <FaTwitter />
        <FaPinterest />
        <FaFacebook />
        <FaInstagram />
      </div>
      <div className="contact">
        <p>Email: CommUnityMail@mail.com</p>
        <p>Phone: 9988776655</p>
      </div>
    </footer>
  );
};

export default Footer;

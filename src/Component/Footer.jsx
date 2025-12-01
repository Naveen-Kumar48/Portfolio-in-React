import React from "react";
import "./Footer.css";
import { FaUser } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src="/image.png" className="f-logo" alt="Footer logo" />
          <p>
            I am a frontend developer from India, with 1 years of experience in
            Web development and DSA.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Naveen Kumar. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

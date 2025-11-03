import React from "react";
import "./Hero.css";
import profile_img from "../assets/profile-img.jpg";
import Naveen_resume from "../../public/Naveen_Resume.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="Hero">
      <img src={profile_img} className="profile-img" alt="ProfileImage" />
      <h1>
        <span>I'm Naveen Kumar</span> Learning Frontend Development in React
      </h1>
      <p>
        I’m a passionate Frontend Developer with a strong foundation in React.js
        and JavaScript focused on building fast, scalable, and user-friendly web
        applications.
      </p>
      <div className="Hero-action">
        <div className="Hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="Hero-resume">
          <a href={Naveen_resume} target="_blank" download={Naveen_resume}>
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

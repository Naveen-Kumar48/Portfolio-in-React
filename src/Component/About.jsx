import React from "react";
import "./About.css";
import { FaCode } from "react-icons/fa";
import profile_img from "../assets/profile-img.jpg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <FaCode className="theme-pattern" />
      </div>
      <section className="about-section">
        <div className="about-left">
          <img src={profile_img} className="profile-img" alt="ProfileImage" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I’m a frontend developer with a strong foundation in modern web
              technologies. Over the past year, I’ve been continuously learning
              new tech stacks and improving my skills through hands-on projects
              and self-driven practice
            </p>
            <p>
              I’m passionate about frontend development and eager to apply my
              skills to real-world projects. I bring enthusiasm, creativity, and
              a strong willingness to learn and grow with every opportunity.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "50%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>React JS</p> <hr style={{ width: "80%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Java</p> <hr style={{ width: "60%" }} />{" "}
            </div>
            <div className="about-skill">
              <p>Next Js</p> <hr style={{ width: "20%" }} />{" "}
            </div>
          </div>
        </div>
      </section>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>4+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>React</h1>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import "./Hero.css";
import profile_img from "../assets/profile-img.jpg";
import Typed from "typed.js";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Naveen Kumar", "Learning Frontend Development in React"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="Hero">
      <motion.div
        className="hero-img-container"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img src={profile_img} className="profile-img" alt="ProfileImage" />
      </motion.div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span ref={el}></span>
      </motion.h1>
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        I’m a passionate Frontend Developer with a strong foundation in React.js
        and JavaScript focused on building fast, scalable, and user-friendly web
        applications.
      </motion.p>
      <motion.div
        className="Hero-action"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="Hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="Hero-resume">
          <a href="/Naveen_Resume.pdf" target="_blank" download>
            My Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

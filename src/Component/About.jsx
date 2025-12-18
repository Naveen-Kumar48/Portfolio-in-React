import React from "react";
import "./About.css";
import theme_pattern from "../assets/pattern-img.svg";
import profile_img from "../assets/profile-img.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="about">
      <motion.div
        className="about-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </motion.div>
      <div className="about-section">
        <motion.div
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={profile_img} className="about-img" alt="ProfileImage" />
        </motion.div>
        <div className="about-right">
          <motion.div
            className="about-para"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </motion.div>
          <div className="about-skills">
            {[
              { skill: "HTML & CSS", width: "80%" },
              { skill: "JavaScript", width: "80%" },
              { skill: "React js", width: "80%" },
              { skill: "Node js", width: "60%" },
              { skill: "Java", width: "80%" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="about-skill"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p>{item.skill}</p>{" "}
                <motion.hr
                  initial={{ width: "0%" }}
                  whileInView={{ width: item.width }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />{" "}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-achievements">
        {[
          { count: "1+", label: "YEARS OF EXPERIENCE" },
          { count: "5+", label: "PROJECTS COMPLETED" },
          { count: "2+", label: "HAPPY CLIENTS" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="about-achievement"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h1>{item.count}</h1>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;

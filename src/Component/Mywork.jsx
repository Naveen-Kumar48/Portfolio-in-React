import React from "react";
import "./Mywork.css";
import mywork_data from "../assets/mywork_data.js";
import { FaCode } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <motion.div
        className="mywork-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My Latest Work</h1>
        <FaCode className="theme-pattern" />
      </motion.div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <motion.img
              key={index}
              src={work.w_img}
              alt=""
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          );
        })}
      </div>
      <motion.div
        className="mywork-showmore"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <p>Show More</p>
        <i>
          <FaArrowRightLong />
        </i>
      </motion.div>
    </div>
  );
};

export default Mywork;

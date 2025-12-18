import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";
import Services_Data from "../assets/Services_data.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div id="services" className="services">
      <motion.div
        className="services-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>My Services</h1>
        <FaCode className="theme-pattern" />
      </motion.div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <motion.div
              key={index}
              className="services-format"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <i>
                  <FaArrowRightLong />
                </i>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import "./Services.css";
import { FaCode } from "react-icons/fa";
import Services_Data from "../assets/Services_data.js";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <FaCode className="theme-pattern" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <i>
                  <FaArrowRightLong />
                </i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

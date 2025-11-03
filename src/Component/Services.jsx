import React from "react";
import "./Services.css";
import theme_pattern from "../assets/pattern-img.svg";
import Services_Data from "../assets/Services_data.js";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <div  id="services"  className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="Pattern-img" />
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
        <i><FaArrowRightLong /></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

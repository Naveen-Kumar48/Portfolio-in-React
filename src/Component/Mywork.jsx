import React from "react";
import "./Mywork.css";
import mywork_data from "../assets/mywork_data.js";
import theme_pattern from "../assets/pattern-img.svg";
import { FaArrowRightLong } from "react-icons/fa6";
const Mywork = () => {
  return (
    <div  id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="Pattern-design" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <i>
          <FaArrowRightLong />
        </i>
      </div>
    </div>
  );
};

export default Mywork;

import React from "react";
import "./Contact.css";
import Pattern_img from "../assets/pattern-img.svg";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2206b175-aaeb-4898-9255-f85c28977e04");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={Pattern_img} alt="Pattern-image" />
      </div>
      <section className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <i>
                <FiMail />
              </i>
              <p>abc@gmail.com</p>
            </div>
            <div className="contact-detail">
              <i>
                {" "}
                <FaPhoneVolume />
              </i>
              <p>+91-2345-234532</p>
            </div>
            <div className="contact-detail">
              <i>
                <IoLocationSharp />
              </i>
              <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter Your email"
            name="email"
            required
          />
          <label htmlFor=""> Write Your message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            {" "}
            Submit Now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;

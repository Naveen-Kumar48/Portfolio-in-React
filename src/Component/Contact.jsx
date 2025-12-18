import React, { useRef, useState } from "react";
import "./Contact.css";
import { FiMail } from "react-icons/fi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

import HCaptcha from "@hcaptcha/react-hcaptcha";

const Contact = () => {
  const captchaRef = useRef(null);
  const [token, setToken] = useState(null);

  const onHCaptchaChange = (token) => {
    console.log("Captcha token set:", token);
    setToken(token);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "2206b175-aaeb-4898-9255-f85c28977e04");
    if (token) {
      formData.append("h-captcha-response", token);
    } else {
      console.warn("No captcha token present");
    }

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    console.log("Form payload:", json);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      console.log("API Response:", res);

      if (res.success) {
        toast.success(res.message);
        event.target.reset();
        setToken(null);
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
      } else {
        toast.error(res.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <motion.div
        className="contact-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Get in Touch</h1>
        <FaCode className="theme-pattern" />
      </motion.div>
      <section className="contact-section">
        <motion.div
          className="contact-left"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
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
              <p>kumarnaveen123@example.com</p>
            </div>
            <div className="contact-detail">
              <i>
                {" "}
                <FaPhoneVolume />
              </i>
              <p>+91 8979******</p>
            </div>
            <div className="contact-detail">
              <i>
                <IoLocationSharp />
              </i>
              <p>India</p>
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={onSubmit}
          className="contact-right"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
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

          <div className="captcha-container">
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
              ref={captchaRef}
            />
          </div>

          <button type="submit" className="contact-submit">
            {" "}
            Submit Now
          </button>
        </motion.form>
      </section>
    </div>
  );
};

export default Contact;

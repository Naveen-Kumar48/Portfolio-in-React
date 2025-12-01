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

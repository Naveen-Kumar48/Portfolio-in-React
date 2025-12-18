import { useRef, useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-100%";
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.scroll() > 500) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of viewport
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("div[id], section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      // ScrollTrigger automatically cleans up on component unmount if we killed it,
      // but here we are creating a global trigger.
      // Ideally we should kill it.
      ScrollTrigger.getAll().forEach((t) => t.kill());
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        <img src="/image.png" className="logo" alt="Logo" />
        <IoMenu onClick={openmenu} className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <IoClose onClick={closemenu} className="nav-mob-close" />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p
                className={activeSection === "home" ? "active" : ""}
                onClick={() => setActiveSection("home")}
              >
                Home
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p
                className={activeSection === "about" ? "active" : ""}
                onClick={() => setActiveSection("about")}
              >
                About Me
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p
                className={activeSection === "services" ? "active" : ""}
                onClick={() => setActiveSection("services")}
              >
                Services
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p
                className={activeSection === "work" ? "active" : ""}
                onClick={() => setActiveSection("work")}
              >
                Portfolio
              </p>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </p>
            </AnchorLink>
          </li>
        </ul>
        <div className="connect-btn">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;

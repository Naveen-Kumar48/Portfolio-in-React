import { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <>
      <nav className="navbar">
        <img src="/image.png" className="logo" alt="Logo" />
        <IoMenu onClick={openmenu} className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <IoClose onClick={closemenu} className="nav-mob-close" />
          <li>
            <AnchorLink className="anchor-link" href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </AnchorLink>{" "}
            {menu === "home" ? <div className="nav-underline"></div> : <> </>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>{" "}
            {menu === "about" ? <div className="nav-underline"></div> : <> </>}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#services">
              <p onClick={() => setMenu("services")}>Services</p>
            </AnchorLink>{" "}
            {menu === "services" ? (
              <div className="nav-underline"></div>
            ) : (
              <> </>
            )}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#work">
              <p onClick={() => setMenu("work")}>Portfolio</p>
            </AnchorLink>{" "}
            {menu === "work" ? <div className="nav-underline"></div> : <> </>}{" "}
          </li>
          <li>
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>{" "}
            {menu === "contact" ? (
              <div className="nav-underline"></div>
            ) : (
              <> </>
            )}
          </li>
        </ul>
        <div className="connect-btn">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

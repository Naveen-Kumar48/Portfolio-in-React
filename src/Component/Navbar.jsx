import React, { useRef, useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import underline from "../assets/nav_underline.svg"
import menuopen from "../assets/menubar.svg"
import menuclose from "../assets/menuclose.svg"
import logo from "../assets/logo.jpg"

const Navbar = () => {
  const[menu,setMenu]=useState("home")
  const menuRef=useRef()

  const openmenu=()=>{
    menuRef.current.style.right="0";
  }
  const closemenu=()=>{
    menuRef.current.style.right="-350px";
  }


  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" alt="Logo" />
     <img src={menuopen}  onClick={openmenu} alt="menubar" className="nav-mob-open" />
        <ul ref={menuRef} className="nav-menu">
          <img src={menuclose}  onClick={closemenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className="anchor-link" href="#home"><p onClick={()=>setMenu("home")}>Home</p></AnchorLink> {menu==="home"?<img src={underline} alt=''/>:<> </>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>  {menu==="about"?<img src={underline} alt=''/>:<> </>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#services"><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>  {menu==="services"?<img src={underline} alt=''/>:<> </>}</li>
            <li><AnchorLink className="anchor-link" offset={50} href="#work"><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink> {menu==="work"?<img src={underline} alt=''/>:<> </>}  </li>
            <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>  {menu==="contact"?<img src={underline} alt=''/>:<> </>}</li>
        </ul>
        <div className="connect-btn" ><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
      </nav>

    </>
  );
};

export default Navbar;

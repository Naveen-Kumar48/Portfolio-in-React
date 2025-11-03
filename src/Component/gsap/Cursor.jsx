import React, { useEffect } from "react";
import gsap from "gsap";
import { use } from "react";


const Cursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX - 30/3,
        y: clientY - 30/3,
        duration: 1,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div id="cursor" className="cursor"></div>;
};

export default Cursor;
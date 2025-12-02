import React from "react";
import Cursor from "./Component/gsap/Cursor";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./Component/Services";
import Mywork from "./Component/Mywork";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import SmoothScroll from "./gsap/SmoothScroll";
const App = () => {
  return (
    <SmoothScroll>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="theme-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#df8908" />
            <stop offset="100%" stopColor="#b415ff" />
          </linearGradient>
        </defs>
      </svg>
      <ToastContainer />
      <Analytics />
      <SpeedInsights />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </SmoothScroll>
  );
};

export default App;

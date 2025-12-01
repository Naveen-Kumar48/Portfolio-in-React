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

const App = () => {
  return (
    <>
      <ToastContainer />
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

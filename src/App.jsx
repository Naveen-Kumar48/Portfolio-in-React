import React from "react";
import Cursor from "./Component/gsap/cursor";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Services from "./Component/Services";
import Mywork from "./Component/Mywork";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
const App = () => {
  return (
    <>
    <Cursor/>
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

import React from "react";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import OurMisssion from "./homeComponents/OurMisssion";
import Services from "./homeComponents/Services";
import WhyKerala from "./homeComponents/WhyKerala";
import OurPromise from "./homeComponents/OurPromise";
import OurDoctors from "./homeComponents/OurDoctors";
import Contact from "./homeComponents/Contact";

const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero />
      </div>
      <div id="about-us">
        <About />
      </div>
      <OurMisssion />
      <div id="services">
        <Services />
      </div>
      <div id="why-kerala">
        <WhyKerala />
      </div>
      <OurPromise />
      <div id="doctors">
        <OurDoctors />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;

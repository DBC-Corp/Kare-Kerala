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
      <Hero />
      <About />
      <OurMisssion />
      <Services />
      <WhyKerala />
      <OurPromise />
      <OurDoctors />
      <Contact />
    </div>
  );
};

export default Home;

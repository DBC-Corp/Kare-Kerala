import React from "react";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import OurMisssion from "./homeComponents/OurMisssion";
import Services from "./homeComponents/Services";
import WhyKerala from "./homeComponents/WhyKerala";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurMisssion />
      <Services />
      <WhyKerala />
    </div>
  );
};

export default Home;

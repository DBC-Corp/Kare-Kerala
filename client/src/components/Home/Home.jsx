import React from "react";
import Hero from "./homeComponents/Hero";
import About from "./homeComponents/About";
import OurMisssion from "./homeComponents/OurMisssion";
import Services from "./homeComponents/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <OurMisssion />
      <Services />
    </div>
  );
};

export default Home;

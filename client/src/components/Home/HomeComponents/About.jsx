import React from "react";
import AboutHighlights from "./ui/AboutHighlights";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutCarousel from "./ui/AboutCarousel";
import AboutTextCarousel from "./ui/AboutTextCarousel";

const About = () => {
  return (
    <section className="w-full">
      <AboutHighlights />

      {/* Main About Section */}
      <div
        className="w-full max-w-[1600px] mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] 
        py-8 sm:py-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-10">
          {/* Carousel */}
          <div className="w-full lg:w-[45%]">
            <AboutCarousel />
          </div>

          {/* Content */}
          <div className="w-full lg:w-[50%] text-[#244C38] flex flex-col gap-3 sm:gap-4 text-center lg:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl xl:text-[30px] font-medium playfair uppercase">
              About Us
            </h1>

            <p className="text-sm sm:text-base md:text-lg xl:text-[19px] inter leading-relaxed">
              Kare Kerala, founded by the renowned Kattooran Groups, is
              dedicated to positioning Kerala as a world-class medical and
              wellness tourism hub. Rooted in Kerala's legacy of Ayurveda and
              advanced healthcare, we connect patients with safe, ethical, and
              high-quality care.
              <br className="hidden md:block" />
              Our commitment goes beyond treatment – we offer a complete journey
              of healing, combining the best of modern medicine with time-tested
              traditional therapies in the serene environment of God's Own
              Country.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-1 justify-center lg:justify-start">
              <button className="px-6 py-2.5 flex items-center justify-center gap-2 bg-[#1B6498] text-white rounded-[10px] hover:bg-[#134d77] transition font-medium shadow-sm hover:shadow-md w-full sm:w-auto">
                Learn More <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Text Carousel Section */}
      <div
        className="w-full max-w-[1600px] mx-auto 
        px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] 
        py-8 sm:py-10"
      >
        <AboutTextCarousel />
      </div>
    </section>
  );
};

export default About;

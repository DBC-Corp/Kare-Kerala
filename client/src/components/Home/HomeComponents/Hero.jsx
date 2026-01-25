import React from "react";
import Star from "../../../assets/images/heroSection/star.svg";
import BottomShape from "../../../assets/images/heroSection/BottomShape.svg";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden inter text-white flex flex-col items-center justify-center text-center py-24 md:py-32 lg:py-42.5 px-4 lg:px-0  ">
      {/* Lighter gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[165%] z-0 bg-[linear-gradient(to_top,rgba(41,86,64,0.70)_0%,rgba(41,86,64,0.55)_35%,rgba(20,30,24,0.45)_65%,rgba(10,15,12,0.65)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-sm font-medium">
          <img src={Star} alt="Star" className="w-4 h-4" />
          <p>Medical Tourism & Authentic Ayurveda</p>
        </div>

        <div>
          <h1 className="playfair text-[40px] md:text-[60px] lg:text-[72px] leading-[110%] lg:leading-[120%] font-bold">
            Global Gateway to <span className="text-[#1B6498]">Healing</span>
            <br /> in Kerala
          </h1>

          <p className="text-gray-200 text-base md:text-lg pt-4 md:pt-5 max-w-[90%] md:max-w-3xl mx-auto leading-relaxed">
            Connecting global patients with trusted hospitals, expert doctors,
            and authentic Ayurvedic treatment centres across Kerala.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-4 w-full sm:w-auto px-4 sm:px-0">
          {/* Primary */}
          <button
            className="
      px-7 py-3 rounded-[10px] font-medium w-full sm:w-auto
      bg-[#1B6498] text-white border border-[#1B6498]
      transition-all duration-300 ease-out
      hover:bg-black/30 hover:backdrop-blur hover:text-white
      hover:border-[#1B6498] hover:shadow-lg hover:scale-[1.03] cursor-pointer
    "
          >
            Start Your Journey
          </button>

          {/* Secondary */}
          <button
            className="
      px-7 py-3 rounded-[10px] font-medium w-full sm:w-auto
      border border-[#1B6498] bg-black/30 backdrop-blur text-white
      transition-all duration-300 ease-out
      hover:bg-[#1B6498] hover:text-white
      hover:border-[#1B6498] hover:shadow-lg hover:scale-[1.03] cursor-pointer
    "
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Bottom Shape Image */}
      <img
        src={BottomShape}
        alt=""
        className="absolute -bottom-px left-0 w-full z-20 pointer-events-none"
      />
    </div>
  );
};

export default Hero;

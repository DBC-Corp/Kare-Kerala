import React from "react";
import Star from "../../../assets/images/star.svg";
import BottomShape from "../../../assets/images/BottomShape.svg";

const Hero = () => {
  return (
    <div className="hero-section relative overflow-hidden inter text-white flex flex-col items-center justify-center text-center py-42.5">
      {/* Lighter gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[165%] z-0 bg-[linear-gradient(to_top,rgba(41,86,64,0.70)_0%,rgba(41,86,64,0.55)_35%,rgba(20,30,24,0.45)_65%,rgba(10,15,12,0.65)_100%)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-sm font-medium">
          <img src={Star} alt="Star" className="w-4 h-4" />
          <p>Medical Tourism & Authentic Ayurveda</p>
        </div>

        <div>
          <h1 className="playfair text-[72px] leading-[120%] font-bold">
            Global Gateway to <span className="text-[#1B6498]">Healing</span>
            <br /> in Kerala
          </h1>

          <p className="text-gray-200 text-lg pt-5 max-w-3xl mx-auto">
            Connecting global patients with trusted hospitals, expert doctors,
            and authentic Ayurvedic treatment centres across Kerala.
          </p>
        </div>

        <div className="flex gap-4 mt-4">
          <button className="px-7 py-3 bg-[#1B6498] text-white rounded-[10px] hover:bg-[#134d77] transition">
            Start Your Journey
          </button>

          <button className="px-7 py-3 border border-[#1B6498] bg-black/30 backdrop-blur rounded-[10px] hover:bg-white/10 transition">
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

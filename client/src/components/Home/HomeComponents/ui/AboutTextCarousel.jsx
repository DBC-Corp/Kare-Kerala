import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../../../../animations/ScrollBasedVelocity";

const AboutTextCarousel = () => {
  return (
    <div
      className="w-full border-y border-[#4DBD89]/60 
      py-2 sm:py-3 md:py-4 lg:py-5 
      backdrop-blur-sm bg-white/5"
    >
      <ScrollVelocityContainer
        className="w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <ScrollVelocityRow
          baseVelocity={1}
          className="text-[#1B6498] font-medium tracking-wide sm:tracking-wider"
        >
          <span
            className="
              uppercase text-[#4DBD89]
              text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[22px]
              whitespace-nowrap
            "
          >
            Legacy of Trust & Expertise &nbsp;|&nbsp; Integrated Healthcare
            Excellence &nbsp;|&nbsp; Authentic Ayurvedic Healing &nbsp;|&nbsp;
            Transparent &nbsp;|&nbsp; Verified Network of Excellence
            &nbsp;|&nbsp; Ethical & Patient-Centric Approach &nbsp;|&nbsp;
          </span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
};

export default AboutTextCarousel;

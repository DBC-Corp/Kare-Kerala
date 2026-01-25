import React from "react";
import Overlay0 from "../../../../assets/images/aboutSection/Overlay(0).svg";
import Overlay1 from "../../../../assets/images/aboutSection/Overlay (1).svg";
import Overlay2 from "../../../../assets/images/aboutSection/Overlay (2).svg";
import Overlay3 from "../../../../assets/images/aboutSection/Overlay (3).svg";
import Overlay4 from "../../../../assets/images/aboutSection/Overlay (4).svg";

const highlights = [
  { img: Overlay0, label: "Trusted Hospitals" },
  { img: Overlay1, label: "Expert Doctors" },
  { img: Overlay2, label: "Authentic Ayurveda" },
  { img: Overlay3, label: "Affordable Care" },
  { img: Overlay4, label: "Personalized Support" },
];

const AboutHighlights = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-15 pt-10 pb-16 lg:pt-15  px-5">
      {highlights.map((highlight, index) => (
        <div key={index} className="flex flex-col justify-center items-center text-center max-w-[140px] md:max-w-none">
          <img 
            src={highlight.img} 
            alt={highlight.label} 
            className="w-14 h-14 md:w-auto md:h-auto mb-2"
          />
          <p className="text-[#577566] text-sm md:text-[16px] font-medium">
            {highlight.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutHighlights;

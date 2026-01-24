import React from "react";
import OurMissionIcon from "../../../assets/images/OurMissionIcon.svg";
import OurVisionIcon from "../../../assets/images/OurVisionIcon.svg";
import { FaRegCircleCheck } from "react-icons/fa6";

const OurMission = () => {
  return (
    <section className="bg-[#e9f6f1] py-20 px-5 sm:px-10">
      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-sm sm:text-base inter uppercase tracking-[0.25em] text-[#4DBD89] mb-2">
          Our Purpose
        </h3>
        <h1 className="text-3xl sm:text-5xl playfair font-semibold text-[#244C38]">
          Mission and Vision
        </h1>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Mission Card */}
        <div className="bg-white flex flex-col items-start justify-center rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-8 sm:p-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <img src={OurMissionIcon} alt="Our Mission" className="w-10" />
            <h2 className="text-[24px] playfair font-semibold text-[#244C38]">
              Our Mission
            </h2>
          </div>

          {/* Points */}
          <ul className="space-y-4 text-[#5f7f73] text-sm leading-relaxed">
            <li className="flex items-start gap-3">
              <FaRegCircleCheck className="text-[#4DBD89] mt-1" />
              Encourage global access to Kerala's healthcare system
            </li>
            <li className="flex items-start gap-3">
              <FaRegCircleCheck className="text-[#4DBD89] mt-1" />
              Promote wellness-oriented living
            </li>
            <li className="flex items-start gap-3">
              <FaRegCircleCheck className="text-[#4DBD89] mt-1" />
              Integrate healthcare with tourism
            </li>
            <li className="flex items-start gap-3">
              <FaRegCircleCheck className="text-[#4DBD89] mt-1" />
              Support Ayurveda and modern medicine
            </li>
          </ul>
        </div>

        {/* Vision Card */}
        <div className="bg-[#214131] flex flex-col items-start justify-center rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 sm:p-10 text-white ">
          <div>
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img src={OurVisionIcon} alt="Our Vision" className="w-10 h-10" />
              <h2 className="text-[24px] playfair font-semibold">Our Vision</h2>
            </div>

            {/* Vision text */}
            <p className="text-[18px] leading-relaxed text-[#d6ebe2]">
              To become a globally trusted healthcare and wellness gateway,
              making Kerala the first choice for medical tourism and holistic
              healing.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-10 pt-5 border-t border-white/20 w-full">
            <p className="text-xs italic tracking-wide text-[#4DBD89]">
              "Where ancient wisdom meets modern excellence"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;

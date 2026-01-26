import React from "react";
import Overlay0 from "../../../../assets/images/whyKeralaSection/Overlay (0).svg";
import Overlay1 from "../../../../assets/images/whyKeralaSection/Overlay (1).svg";
import Overlay2 from "../../../../assets/images/whyKeralaSection/Overlay (2).svg";
import Overlay3 from "../../../../assets/images/whyKeralaSection/Overlay (3).svg";

const WhyKeralaSection1 = () => {
  const reasons = [
    { id: 1, image: Overlay0, title: "Serene Nature" },
    { id: 2, image: Overlay1, title: "Perfect Climate" },
    { id: 3, image: Overlay2, title: "Healing Culture" },
    { id: 4, image: Overlay3, title: "God's Own Country" },
  ];

  return (
    <div className="py-16 md:py-25 px-5 bg-[linear-gradient(150deg,#244C38_20%,#203c2e_80%)]">
      {/* section 1 */}
      <div className="text-center mb-10 md:mb-14 text-[#FCFAF8]">
        <h3 className="text-xs sm:text-base inter uppercase tracking-[0.25em] text-[#4DBD89] mb-2">
          The Perfect Destination
        </h3>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl playfair font-semibold mb-4 leading-tight">
          Why Kerala for Healthcare & Ayurveda
        </h1>
        <p className="inter w-full sm:w-[80%] lg:w-[50%] mx-auto text-[#FCFAF8] text-[14px] sm:text-[16px] font-light leading-relaxed">
          Kerala offers a unique blend of nature, traditional medicine, and
          modern healthcare. <br className="hidden sm:block" /> Its climate,
          wellness culture, and medical expertise create an ideal{" "}
          <br className="hidden sm:block" /> environment for healing and
          recovery.
        </p>
      </div>
      {/* section 2 */}
      <div className="grid grid-cols-2 lg:flex justify-center items-stretch lg:items-center gap-y-10 gap-x-4 lg:gap-10 text-[#FCFAF8] text-[13px] inter">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="flex flex-col items-center gap-2 text-center h-full"
          >
            <img
              src={reason.image}
              alt={reason.title}
              className="w-12 h-12 sm:w-auto sm:h-auto object-contain"
            />
            <p className="text-center max-w-[120px] sm:max-w-none">
              {reason.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyKeralaSection1;

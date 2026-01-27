import React from "react";
import Image1 from "../../../assets/images/ourPromiseSection/image1.png";
import Image2 from "../../../assets/images/ourPromiseSection/image2.png";
import Image3 from "../../../assets/images/ourPromiseSection/image3.png";
import Image4 from "../../../assets/images/ourPromiseSection/image4.png";

const OurPromise = () => {
  const promises = [
    {
      img: Image1,
      title: "Experienced doctors",
      desc: "Highly experienced doctors trained in leading institutions, delivering safe, ethical, and patient-focused care. You are guided by experienced doctors who combine medical expertise with compassionate, personalized care.",
    },
    {
      img: Image2,
      title: "Reputed global healthcare partners",
      desc: "We partner with reputed hospitals and healthcare providers trusted by patients worldwide. Access to internationally reputed healthcare partners known for safety and excellence.",
    },
    {
      img: Image4,
      title: "Multi-specialty hospitals",
      desc: "Access to multi-specialty hospitals equipped with advanced technology and expert medical teams. Advanced multi-specialty hospitals for complete, coordinated care.",
    },
    {
      img: Image3,
      title: "Transparent and personalized support",
      desc: "Clear processes and personalized support at every step of your care journey. End-to-end personalized assistance with transparent care processes.",
    },
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-[92vh] py-16 px-4 sm:px-8 lg:px-20">
      {/* Header */}
      <div className="flex justify-center mb-16">
        <h1 className="playfair text-[#244C38] text-[48px] text-center font-bold">
          Our Promise
        </h1>
      </div>

      {/* Grid Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Desktop Divider Lines (Absolute Positioned) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#244C38]" />
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#244C38]" />

        {/* Center Circle */}
        <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-[#F8F9FA] border border-[#244C38] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

        <div className="grid grid-cols-1 md:grid-cols-2">
          {promises.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row gap-6 items-start py-10 ${
                /* Add specific padding based on quadrant to create space around the center lines */
                index % 2 === 0 ? "md:pr-10" : "md:pl-10"
              }`}
            >
              {/* Image */}
              <div className="w-[150px] sm:w-[180px] md:w-[200px] shrink-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full aspect-square object-cover rounded-xl shadow-sm"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h3 className="playfair text-[#244C38] text-2xl font-bold">
                  {item.title}
                </h3>
                <p className="text-[#5F6C65] text-sm leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromise;

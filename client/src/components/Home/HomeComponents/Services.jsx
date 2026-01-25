import React from "react";
import ServicesImage from "../../../assets/images/serviceSection/ServicesImage.png";
import Frame51 from "../../../assets/images/serviceSection/Frame 5 (1).svg";
import Frame52 from "../../../assets/images/serviceSection/Frame 5 (2).svg";
import Frame53 from "../../../assets/images/serviceSection/Frame 5 (3).svg";
import Frame54 from "../../../assets/images/serviceSection/Frame 5 (4).svg";
import Frame55 from "../../../assets/images/serviceSection/Frame 5 (5).svg";
import Frame6 from "../../../assets/images/serviceSection/Frame 6.svg";
import Frame7 from "../../../assets/images/serviceSection/Frame 5.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
  // Data Array containing content + layout logic
  const serviceItems = [
    {
      id: 1,
      icon: Frame7,
      title: (
        <>
          Ayurveda & Holistic <br /> Wellness
        </>
      ),
      // Top Left
      positionClass: "lg:col-start-1 lg:row-start-1",
    },
    {
      id: 2,
      icon: Frame51,
      title: "Neurosurgery",
      // Middle Left
      positionClass: "lg:col-start-1 lg:row-start-2",
    },
    {
      id: 3,
      icon: Frame6,
      title: "Gastroenterology",
      // Bottom Left
      positionClass: "lg:col-start-1 lg:row-start-3",
    },
    {
      id: 4,
      icon: Frame52,
      title: "Ayurvedic Medicine",
      // Bottom Center
      positionClass: "lg:col-start-2 lg:row-start-3",
    },
    {
      id: 5,
      icon: Frame55,
      title: "Dental Care",
      // Bottom Right
      positionClass: "lg:col-start-3 lg:row-start-3",
    },
    {
      id: 6,
      icon: Frame54,
      title: "Optometry & Eye Care",
      // Middle Right
      positionClass: "lg:col-start-3 lg:row-start-2",
    },
    {
      id: 7,
      icon: Frame53,
      title: (
        <>
          Dermatology <br /> & Aesthetic Care
        </>
      ),
      // Top Right + Mobile Centering (col-span-2)
      positionClass: "col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1",
    },
  ];

  return (
    <div>
      <div className="px-6 py-15 lg:p-20 ">
        {/* Section 1: Header */}
        <div className="text-center mb-14">
          <h3 className="text-sm sm:text-base inter uppercase tracking-[0.25em] text-[#4DBD89] mb-2">
            What We Offer
          </h3>
          <h1 className="text-3xl sm:text-5xl playfair font-semibold text-[#244C38] mb-4">
            Our Services
          </h1>
          <p className="inter text-[#577566] text-[16px]">
            Comprehensive healthcare and wellness services tailored to your
            needs
          </p>
        </div>

        {/* Section 2: Grid Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 playfair text-[#7A7A7A] gap-10 text-[18px] justify-items-center items-start text-center max-w-[1200px]">
            {/* Mapped Service Items */}
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className={`${item.positionClass} flex flex-col items-center justify-start gap-2`}
              >
                <img
                  src={item.icon}
                  alt={
                    typeof item.title === "string" ? item.title : "Service Icon"
                  }
                />
                <p>{item.title}</p>
              </div>
            ))}

            {/* Center Image (Static Item) */}
            <div className="col-span-2 order-first lg:order-none lg:mx-0 lg:col-span-1 lg:col-start-2 lg:row-start-2 mt-0 lg:mt-[-150px] flex flex-col items-center justify-center">
              <img src={ServicesImage} alt="Main Services" />
            </div>
          </div>
        </div>

        {/* Section 3: Button */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-10">
          <button className="px-6 cursor-pointer py-2.5 flex items-center justify-center gap-2 bg-[#1B6498] text-white rounded-[10px] hover:bg-[#134d77] transition font-medium shadow-sm hover:shadow-md w-full sm:w-auto">
            Book an Appointment <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

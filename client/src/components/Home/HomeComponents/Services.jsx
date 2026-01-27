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
import PerfectSpirit from "../../../assets/images/serviceSection/Perfect-Spirit-01.svg fill.svg";
import PerfectMind from "../../../assets/images/serviceSection/Perfect-Mind-01.svg fill.svg";
import PerfectBody from "../../../assets/images/serviceSection/Perfect-Body-01.svg fill.svg";

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

  const perfectServices = [
    {
      id: 1,
      image: PerfectBody,
      title: "Perfect Body",
      description:
        "Physical Well-being involves on one side maintaining a good health and on another side to treat the occurred disease",
    },
    {
      id: 2,
      image: PerfectMind,
      title: "Perfect Mind",
      description:
        "Emotional and psychological well- being to a person is equally important as physical health",
    },
    {
      id: 3,
      image: PerfectSpirit,
      title: "Perfect Spirit",
      description:
        "Spiritual health is important to for our total well being and an integral part of holistic health philosophy",
    },
  ];

  return (
    <div>
      {/* Services Section */}
      <div className="px-6 py-15 lg:p-20 ">
        {/* Section 1: Header */}
        <div className="text-center mb-14">
          <h3 className="text-sm sm:text-base inter uppercase tracking-[0.25em] text-[#4DBD89] mb-2">
            What We Offer
          </h3>
          <h1 className="text-3xl sm:text-5xl playfair font-semibold text-[#244C38] mb-4">
            Our Services
          </h1>
          <p className="inter text-[#577566] text-[14px] sm:text-[16px]">
            Comprehensive healthcare and wellness services tailored to your
            needs
          </p>
        </div>

        {/* Section 2: Grid Layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-3 playfair text-[#7A7A7A] gap-10 text-[14px] lg:text-[18px] justify-items-center items-start text-center max-w-[1200px]">
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
                  className="w-12 h-12 lg:w-auto lg:h-auto"
                />
                <p>{item.title}</p>
              </div>
            ))}

            {/* Center Image (Static Item) */}
            <div className="col-span-2 order-first lg:order-0 lg:mx-0 lg:col-span-1 lg:col-start-2 lg:row-start-2 mt-0 lg:mt-[-150px] flex flex-col items-center justify-center">
              <img
                src={ServicesImage}
                alt="Main Services"
                className="w-[80%] lg:w-auto"
              />
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

      {/* Services Footer Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:justify-evenly gap-10 lg:gap-0 text-center bg-[#e9f6f1] py-10 lg:py-20 px-5 ">
        {perfectServices.map((service) => (
          <div
            key={service.id}
            className="w-full sm:w-[70%] lg:w-[20%] xl:w-[14%] flex flex-col items-center justify-start gap-4 "
          >
            <img src={service.image} alt={service.title} />
            <div>
              <h1 className="text-[20px] text-[#244C38] playfair font-bold pb-2 ">
                {service.title}
              </h1>
              <p className="text-[14px] sm:text-[16px] text-[#244C38] inter ">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

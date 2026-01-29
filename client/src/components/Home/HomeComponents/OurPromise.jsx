import React from "react";
import { LuShieldCheck } from "react-icons/lu";
import Image1 from "../../../assets/images/ourPromiseSection/image1.png";
import Image2 from "../../../assets/images/ourPromiseSection/image2.png";
import Image3 from "../../../assets/images/ourPromiseSection/image3.png";
import Image4 from "../../../assets/images/ourPromiseSection/image4.png";
import Img5 from "../../../assets/images/ourPromiseSection/boldDedicated1.svg";
import Img6 from "../../../assets/images/ourPromiseSection/Group15589.svg";
import { motion } from "framer-motion";

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
    <section>
      <div className="bg-[#F8F9FA] min-h-[92vh] pt-20 pb-10 px-4 sm:px-8 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-16 space-y-4"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8F3EF] text-[#244C38] text-xs font-semibold tracking-wide uppercase">
            <LuShieldCheck className="text-lg" />
            <span>Our Commitment</span>
          </div>
          <h1 className="playfair text-[#244C38] text-3xl md:text-5xl text-center font-bold leading-tight">
            Our Promise
          </h1>
          <p className="text-gray-500 text-center max-w-2xl text-sm md:text-base">
            We are dedicated to ensuring your medical journey is safe,
            transparent, and comfortable, connecting you with the best care
            Kerala has to offer.
          </p>
        </motion.div>

        {/* Grid Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Divider Lines (Absolute Positioned) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#244C38]" />
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-[#244C38]" />

          {/* Center Circle */}
          <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 bg-[#F8F9FA] border border-[#244C38] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2"
          >
            {promises.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={`flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start text-center sm:text-left py-8 md:py-10 ${
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
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="playfair text-[#244C38] text-xl sm:text-2xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-[#5F6C65] text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className=" pb-16 px-4 sm:px-8 lg:px-20"
      >
        <h1 className="text-[#244C38] playfair lg:text-[48px] text-3xl font-bold text-center pb-6 md:pb-10 ">
          Your journey with Kare Kerala
        </h1>
        <div className="flex items-center justify-center bg-[#E4F2EC] p-4 md:p-10 rounded-[20px] md:rounded-[30px]  ">
          <img src={Img5} alt="Journey" className="hidden lg:block" />
          <img
            src={Img6}
            alt="Journey"
            className="block lg:hidden w-full lg:w-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default OurPromise;

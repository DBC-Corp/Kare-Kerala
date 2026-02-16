import React from "react";
import Overlay0 from "../../../../assets/images/aboutSection/Overlay(0).svg";
import Overlay1 from "../../../../assets/images/aboutSection/Overlay (1).svg";
import Overlay2 from "../../../../assets/images/aboutSection/Overlay (2).svg";
import Overlay3 from "../../../../assets/images/aboutSection/Overlay (3).svg";
import Overlay4 from "../../../../assets/images/aboutSection/Overlay (4).svg";
import { motion } from "framer-motion";

const highlights = [
  { img: Overlay0, label: "Trusted Hospitals" },
  { img: Overlay1, label: "Expert Doctors" },
  { img: Overlay2, label: "Authentic Ayurveda" },
  { img: Overlay3, label: "Affordable Care" },
  { img: Overlay4, label: "Personalized Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 },
  },
};

const AboutHighlights = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-15 pt-10 pb-16 lg:pt-15  px-5"
    >
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col justify-center items-center text-center max-w-[140px] md:max-w-none"
        >
          <img
            src={highlight.img}
            alt={highlight.label}
            className="w-14 h-14 md:w-auto md:h-auto mb-2"
          />
          <p className="text-[#577566] text-sm md:text-[16px] font-medium">
            {highlight.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutHighlights;

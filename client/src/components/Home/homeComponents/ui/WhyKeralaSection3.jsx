import React from "react";
import BGImg from "../../../../assets/images/whyKeralaSection/ayurved.png";
import { motion } from "framer-motion";

const WhyKeralaSection3 = () => {
  return (
    <div
      className="bg-cover bg-left md:bg-center bg-no-repeat min-h-[300px] md:min-h-[420px] flex items-center justify-center md:justify-end px-6 md:px-20"
      style={{ backgroundImage: `url(${BGImg})` }}
    >
      <motion.h3
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-[48px] text-white playfair text-center md:text-right leading-tight max-w-md md:max-w-none"
      >
        Why Choose Kare Kerala ?
      </motion.h3>
    </div>
  );
};

export default WhyKeralaSection3;

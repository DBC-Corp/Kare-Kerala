import React from "react";
import { LuMapPin } from "react-icons/lu";
import Overlay0 from "../../../../assets/images/whyKeralaSection/Overlay (0).svg";
import Overlay1 from "../../../../assets/images/whyKeralaSection/Overlay (1).svg";
import Overlay2 from "../../../../assets/images/whyKeralaSection/Overlay (2).svg";
import Overlay3 from "../../../../assets/images/whyKeralaSection/Overlay (3).svg";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mb-10 md:mb-16 space-y-4 text-[#FCFAF8]"
      >
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-[#4DBD89] text-xs font-semibold tracking-wide uppercase">
          <LuMapPin className="text-lg" />
          <span>The Perfect Destination</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl playfair font-bold text-center leading-tight">
          Why Kerala for Healthcare & Ayurveda
        </h1>
        <p className="text-gray-300 text-center max-w-3xl text-sm md:text-base font-light leading-relaxed">
          Kerala offers a unique blend of nature, traditional medicine, and
          modern healthcare. Its climate, wellness culture, and medical
          expertise create an ideal environment for healing and recovery.
        </p>
      </motion.div>
      {/* section 2 */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-2 lg:flex justify-center items-stretch lg:items-center gap-y-10 gap-x-4 lg:gap-10 text-[#FCFAF8] text-[13px] inter"
      >
        {reasons.map((reason) => (
          <motion.div
            key={reason.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WhyKeralaSection1;

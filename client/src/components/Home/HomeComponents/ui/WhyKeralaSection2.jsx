import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Image Imports
import CarouselImgOne from "../../../../assets/images/whyKeralaSection/CarouselImg(1).png";
import CarouselImgTwo from "../../../../assets/images/whyKeralaSection/CarouselImg(2).png";
import CarouselImgThree from "../../../../assets/images/whyKeralaSection/CarouselImg(3).png";
import CarouselImgFour from "../../../../assets/images/whyKeralaSection/CarouselImg(4).png";

const WhyKeralaSection2 = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Base images (pure list)
  const baseImages = [
    CarouselImgOne,
    CarouselImgTwo,
    CarouselImgThree,
    CarouselImgFour,
  ];

  const [mobileIndex, setMobileIndex] = useState(0);

  // Duplicate images for seamless looping (Desktop)
  const displayImages = [
    ...baseImages,
    ...baseImages,
    ...baseImages,
    ...baseImages,
  ];

  useEffect(() => {
    // Desktop GSAP Logic
    const slider = sliderRef.current;
    if (!slider) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(slider, {
        xPercent: -25,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const handleContainerEnter = () => {
    tweenRef.current?.pause();
  };

  const handleContainerLeave = () => {
    tweenRef.current?.play();
    setHoveredIndex(null);
  };

  // Mobile Handlers
  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + 1) % baseImages.length);
  };

  const handleMobilePrev = () => {
    setMobileIndex(
      (prev) => (prev - 1 + baseImages.length) % baseImages.length,
    );
  };

  return (
    <div>
      <div className="min-h-[60vh] lg:h-[92vh] why-kerala-section relative flex items-center justify-center overflow-hidden py-10 lg:py-0">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#000000_40%,#134221_100%)] opacity-50 z-0"></div>

        <div className="relative z-10 text-white w-full px-4 lg:pr-0 lg:pl-6">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
            {/* Left Static Text */}
            <div className="w-full lg:w-[35%] shrink-0 p-2 lg:p-5 text-center lg:text-left">
              <h1 className="playfair text-[32px] md:text-[45px] lg:text-[60px] leading-[1.1] mb-4 lg:mb-6">
                Healing Journeys <br /> in Kerala
              </h1>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] inter opacity-90 leading-relaxed max-w-2xl lg:max-w-none mx-auto">
                Embark on transformative health and wellness experiences in
                Kerala. Explore our diverse healing journeys designed for
                natural recovery and renewal.
              </p>
            </div>

            {/* --- DESKTOP CAROUSEL (Infinite Loop) --- */}
            {/* --- DESKTOP CAROUSEL (Infinite Loop) --- */}
            <div
              className="hidden lg:block w-full flex-1 overflow-hidden relative"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div
                ref={sliderRef}
                className="flex gap-6 w-max py-10 pr-6 will-change-transform"
                onMouseEnter={handleContainerEnter}
                onMouseLeave={handleContainerLeave}
              >
                {displayImages.map((img, index) => {
                  const isHovered = hoveredIndex === index;
                  const isAnyHovered = hoveredIndex !== null;
                  const isBlurred = isAnyHovered && !isHovered;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`
                        relative h-[450px] w-auto shrink-0 rounded-2xl cursor-pointer
                        transition-all duration-500 ease-out origin-center
                        ${isHovered ? "scale-105 z-20 shadow-2xl brightness-110" : "z-10"}
                        ${isBlurred ? "scale-95 blur-xs opacity-40 grayscale-[0.5]" : "opacity-100 blur-0"}
                        ${!isAnyHovered ? "scale-100" : ""}
                      `}
                    >
                      <img
                        src={img}
                        alt={`Kerala Healing Journey ${index + 1}`}
                        className="h-full w-auto max-w-none object-contain select-none pointer-events-none"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* --- MOBILE CAROUSEL (Centered Slide + Buttons) --- */}
            <div className="flex flex-col gap-6 lg:hidden w-[calc(100%+2rem)] -mx-4 pb-10">
              <div className="w-full overflow-hidden">
                <div
                  className="flex gap-[5vw] transition-transform duration-500 ease-in-out"
                  style={{
                    // 15vw offset to center the 70vw card. Step is 70vw + 5vw gap = 75vw.
                    transform: `translateX(calc(15vw - ${mobileIndex * 75}vw))`,
                  }}
                >
                  {baseImages.map((img, index) => {
                    const isActive = mobileIndex === index;
                    return (
                      <div
                        key={index}
                        className={`
                          relative h-[500px] w-[70vw] shrink-0 rounded-2xl transition-all duration-500
                          ${isActive ? "scale-100 opacity-100 z-10" : "scale-95 opacity-50 z-0"}
                        `}
                      >
                        <img
                          src={img}
                          alt={`Kerala Healing Journey ${index + 1}`}
                          className="w-full h-full object-contain rounded-2xl select-none"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Buttons - Placed relatively below */}
              <div className="flex items-center justify-center gap-8 z-20">
                <button
                  onClick={handleMobilePrev}
                  className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 active:scale-95 transition-all text-white border border-white/20"
                  aria-label="Previous Slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                  {baseImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${mobileIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/40"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleMobileNext}
                  className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 active:scale-95 transition-all text-white border border-white/20"
                  aria-label="Next Slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKeralaSection2;

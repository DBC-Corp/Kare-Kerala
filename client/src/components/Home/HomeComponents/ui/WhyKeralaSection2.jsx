import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

// Image Imports
import CarouselImgOne from "../../../../assets/images/whyKeralaSection/CarouselImg(1).png";
import CarouselImgTwo from "../../../../assets/images/whyKeralaSection/CarouselImg(2).png";
import CarouselImgThree from "../../../../assets/images/whyKeralaSection/CarouselImg(3).png";
import CarouselImgFour from "../../../../assets/images/whyKeralaSection/CarouselImg(4).png";

// Register GSAP Plugin
gsap.registerPlugin(Draggable);

const WhyKeralaSection2 = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  // Using the images directly since text is baked in
  const images = [
    CarouselImgOne,
    CarouselImgTwo,
    CarouselImgThree,
    CarouselImgFour,
    CarouselImgOne, // Repeating to match length in video if needed
  ];

  useEffect(() => {
    // 1. Calculate boundaries
    const slider = sliderRef.current;
    const container = containerRef.current;

    // Total width of all cards + gaps - visible width
    const totalWidth = slider.scrollWidth;
    const containerWidth = container.offsetWidth;
    const maxScroll = -(totalWidth - containerWidth);

    // 2. Initialize GSAP Draggable
    const draggableInstance = Draggable.create(slider, {
      type: "x",
      bounds: {
        minX: maxScroll, // Stop at the last image
        maxX: 0, // Stop at the first image
      },
      inertia: true, // Enables the smooth "throw" physics
      edgeResistance: 0.65, // Bouncy effect when hitting edges
      cursor: "grab",
      activeCursor: "grabbing",
    });

    // Cleanup on unmount
    return () => {
      draggableInstance[0].kill();
    };
  }, []);

  return (
    <div>
      <div className="h-[92vh] why-kerala-section relative flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000000_0%,#000000_40%,#134221_100%)] opacity-50 z-0"></div>

        <div className="relative z-10 text-white text-[#F7F7F7] w-full pr-0 pl-6">
          <div className="flex items-center gap-10">
            {/* Left Static Text */}
            <div className="w-[35%] shrink-0 p-5 ">
              <h1 className="playfair text-[60px] leading-[1.1] mb-6">
                Healing Journeys <br /> in Kerala
              </h1>
              <p className="text-[20px] inter opacity-90 leading-relaxed">
                Embark on transformative health and wellness experiences in
                Kerala. Explore our diverse healing journeys designed for
                natural recovery and renewal.
              </p>
            </div>

            {/* Right Carousel Container */}
            {/* 'overflow-hidden' ensures images don't spill out of this area */}
            <div
              ref={containerRef}
              className="flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
            >
              {/* The Sliding Track */}
              <div ref={sliderRef} className="flex gap-6 w-max pr-8">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative  shrink-0  overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Kerala Healing Journey ${index + 1}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      // pointer-events-none prevents dragging the image ghost itself
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyKeralaSection2;

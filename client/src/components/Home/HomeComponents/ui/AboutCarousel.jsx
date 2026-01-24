import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800",
  },
];

const AboutCarouselGSAP = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef([]); // Store references to image elements
  const containerRef = useRef(null); // Scope for GSAP cleanup

  // --- AUTOPLAY LOGIC ---
  useEffect(() => {
    const t = setInterval(
      () => setCurrentIndex((p) => (p + 1) % slides.length),
      3000,
    );
    return () => clearInterval(t);
  }, []);

  // --- GSAP ANIMATION LOGIC ---
  useLayoutEffect(() => {
    // Create a GSAP Context for easy cleanup
    const ctx = gsap.context(() => {
      // Loop through all slides
      slideRefs.current.forEach((slide, index) => {
        if (!slide) return;

        if (index === currentIndex) {
          // Animate the Active Slide IN
          gsap.to(slide, {
            autoAlpha: 1, // opacity: 1 + visibility: visible
            duration: 1,
            ease: "power2.inOut",
            // Optional: Add a slight scale effect for a premium feel
            scale: 1,
            zIndex: 10, // Bring to front
          });
        } else {
          // Animate Inactive Slides OUT
          gsap.to(slide, {
            autoAlpha: 0, // opacity: 0 + visibility: hidden
            duration: 1,
            ease: "power2.inOut",
            scale: 1.1, // Slight zoom out effect when fading away
            zIndex: 1,
          });
        }
      });
    }, containerRef); // Scope to this component

    return () => ctx.revert(); // Cleanup GSAP on unmount/update
  }, [currentIndex]);

  // --- DIMENSIONS & CONFIGURATION ---
  const containerHeight = 420;
  const containerWidth = 320;
  const imageWidth = 230;
  const imageHeight = 330;
  const borderGap = 12;
  const textOffsetFromBorder = 14;

  // --- GEOMETRY CALCULATIONS ---
  const borderWidth = imageWidth + borderGap * 2;
  const borderHeight = imageHeight + borderGap * 2;
  const borderRadius = borderWidth / 2;
  const borderTopPosition = (containerHeight - borderHeight) / 2;
  const arcCenterY = borderTopPosition + borderRadius;
  const textRadius = borderRadius + textOffsetFromBorder;
  const center = containerWidth / 2;
  const startX = center - textRadius;
  const endX = center + textRadius;
  const pathString = `M ${startX} ${arcCenterY} A ${textRadius} ${textRadius} 0 0 1 ${endX} ${arcCenterY}`;

  return (
    <div className="flex justify-center items-center">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        style={{ width: `${containerWidth}px`, height: `${containerHeight}px` }}
      >
        {/* --- CURVED TEXT --- */}
        <svg
          viewBox={`0 0 ${containerWidth} ${containerHeight}`}
          className="absolute inset-0 z-40 pointer-events-none"
          style={{ overflow: "visible" }}
        >
          <path id="textArc" d={pathString} fill="none" />
          <text
            fill="#296496"
            fontSize="12.5"
            fontWeight=""
            className="tracking-[0.10em] inter"
          >
            <textPath
              href="#textArc"
              startOffset="50%"
              textAnchor="middle"
              dominantBaseline="auto"
            >
              Kerala’s Ancient Wisdom, World-Class Care...
            </textPath>
          </text>
        </svg>

        {/* --- DECORATIVE BORDER LINE --- */}
        <div
          className="absolute z-10 rounded-full border border-[#1B6498]/30 pointer-events-none"
          style={{
            width: `${borderWidth}px`,
            height: `${borderHeight}px`,
          }}
        ></div>

        {/* --- IMAGE PILL --- */}
        <div
          className="relative rounded-full overflow-hidden z-20 bg-gray-100 shadow-xl"
          style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
        >
          {slides.map((s, i) => (
            <img
              key={s.id}
              ref={(el) => (slideRefs.current[i] = el)} // Assign DOM element to ref array
              src={s.image}
              alt=""
              // Set initial opacity to 0 (invisible)
              // GSAP will handle the visibility from here on
              className="absolute inset-0 w-full h-full object-cover opacity-0"
            />
          ))}

          {/* Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1 z-30">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#4DBD89] scale-125"
                    : "bg-white/50"
                }`}
                aria-label={`slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCarouselGSAP;

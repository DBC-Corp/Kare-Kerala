import gsap from "gsap";

export const animateMenuToggle = (isMenuOpen, hamburgerRef, closeRef) => {
  if (isMenuOpen) {
    // === OPENING (To X) ===

    // 1. Hamburger: Fade OUT & Rotate CW
    gsap.to(hamburgerRef.current, {
      rotate: 90,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: "auto", // Ensures clean override
    });

    // 2. X Icon: Fade IN & Rotate CW (to upright)
    gsap.to(closeRef.current, {
      rotate: 0,
      opacity: 1,
      duration: 0.3,
      delay: 0.05, // Slight delay so they don't clash instantly
      ease: "power2.inOut",
      overwrite: "auto",
    });
  } else {
    // === CLOSING (To Hamburger) ===

    // 1. X Icon: Fade OUT & Rotate CCW
    gsap.to(closeRef.current, {
      rotate: -90,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      overwrite: "auto",
    });

    // 2. Hamburger: Fade IN & Rotate CCW (back to 0)
    gsap.to(hamburgerRef.current, {
      rotate: 0,
      opacity: 1,
      duration: 0.3,
      delay: 0.05, // Slight delay allows X to disappear first
      ease: "power2.inOut",
      overwrite: "auto",
    });
  }
};

import React, { useState, useEffect, useRef } from "react";
import KareKeralaLogo from "../../assets/images/websiteLogo/kareKeralaLogo.svg";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { animateMenuToggle } from "../../animations/menuAnimations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeRef = useRef(null);

  const navLinks = ["Home", "About Us", "Services", "Why Kerala", "Doctors"];

  // --- ANIMATION LOGIC ---
  useEffect(() => {
    animateMenuToggle(isMenuOpen, hamburgerRef, closeRef);
  }, [isMenuOpen]);

  // --- CLICK OUTSIDE LOGIC ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FCFAF8] inter shadow-sm">
      <div className="flex items-center justify-between h-[72px] px-5 lg:px-10">
        {/* Logo */}
        <div className="w-[120px] lg:w-auto">
          <img
            src={KareKeralaLogo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer hover:text-[#1B6498] transition-colors"
            >
              {link}
            </p>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="uppercase flex items-center gap-2 py-2.5 px-5 rounded-xl border-2 border-[#1B6498] text-[#1B6498] font-medium transition hover:bg-[#1B6498] hover:text-white">
            <FiPhone /> Contact Us
          </button>
        </div>

        {/* --- MOBILE TOGGLE BUTTON --- */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#1B6498] relative w-[30px] h-[30px] flex items-center justify-center outline-none"
        >
          {/* HAMBURGER: Starts visible (opacity 1), Rotation 0 */}
          <div
            ref={hamburgerRef}
            className="absolute inset-0 flex items-center justify-center"
          >
            <FiMenu size={30} />
          </div>

          {/* CLOSE (X): Starts invisible (opacity 0), Rotated -90deg */}
          <div
            ref={closeRef}
            className="absolute inset-0 flex items-center justify-center opacity-0 -rotate-90"
          >
            <FiX size={30} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#FCFAF8] shadow-md ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-10 text-[16px] font-medium">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer transition hover:text-[#1B6498]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </p>
          ))}
          <button className="mt-4 uppercase flex items-center gap-2 py-3 px-7 rounded-xl border-2 border-[#1B6498] text-[#1B6498] font-medium transition hover:bg-[#1B6498] hover:text-white">
            <FiPhone /> Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

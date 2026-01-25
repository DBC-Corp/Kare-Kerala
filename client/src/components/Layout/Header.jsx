import React, { useState, useEffect, useRef } from "react";
import KareKeralaLogo from "../../assets/images/websiteLogo/kareKeralaLogo.svg";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = ["Home", "About Us", "Services", "Why Kerala", "Doctors"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open and click is outside menu AND outside the toggle button
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
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FCFAF8] inter shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between h-[72px] px-5 lg:px-10">
        {/* Logo */}
        <div className="w-[120px] lg:w-auto">
          <img
            src={KareKeralaLogo}
            alt="KareKeralaLogo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <p
              key={link}
              className="cursor-pointer hover:text-[#1B6498] transition-colors duration-300"
            >
              {link}
            </p>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="uppercase flex items-center gap-2 py-2.5 px-5 rounded-xl border-2 border-[#1B6498] text-[#1B6498] font-medium transition hover:bg-[#1B6498] hover:text-white">
            <FiPhone />
            Contact Us
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#1B6498]"
        >
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-[#FCFAF8] shadow-md
        ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
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
            <FiPhone />
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

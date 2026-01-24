// src/components/Footer.jsx
import React from "react";
import KareKeralaLogo from "../../assets/images/kareKeralaLogoWhite.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#214131] text-white inter">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-14 sm:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 */}
          <div className="space-y-6 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start">
              <img src={KareKeralaLogo} alt="Kare Kerala" className="w-28" />
            </div>

            <p className="text-sm text-[#d5e6de] max-w-xs mx-auto sm:mx-0 leading-relaxed">
              Your trusted partner for medical tourism and authentic Ayurvedic
              treatments in Kerala, India.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-3 text-[#cfe9df]">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center cursor-pointer
                               transition-all duration-300 hover:bg-[#4DBD89] hover:text-[#214131] hover:scale-110"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-5 playfair">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-[#d5e6de]">
              {[
                "Ayurveda & Holistic",
                "Ayurvedic Medicine",
                "Neurosurgery",
                "Gastroenterology",
                "Dermatology",
                "Eye Care",
                "Dental Care",
              ].map((service) => (
                <li
                  key={service}
                  className="cursor-pointer transition-all duration-300 hover:text-[#4DBD89] hover:translate-x-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-5 playfair">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-[#d5e6de]">
              {["Home", "About Us", "Services", "Why Kerala", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer transition-all duration-300 hover:text-[#4DBD89] hover:translate-x-1"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-5 playfair">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm text-[#d5e6de]">
              <div className="flex justify-center sm:justify-start items-start gap-3">
                <FaLocationDot className="text-[#4DBD89] mt-0.5" size={16} />
                <div>
                  <div className="text-[#cfe9df]">xxxxxxxx</div>
                  <div className="text-[#a9d3c0] text-xs">
                    Kochi, Kerala, India
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-3">
                <FaPhone className="text-[#4DBD89]" size={15} />
                <span className="text-[#cfe9df]">+91 xxxxxxxxxxx</span>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-3">
                <FaEnvelope className="text-[#4DBD89]" size={15} />
                <span className="text-[#cfe9df]">xxxxxx@xxxxxxxxx.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#0f2923]/40 pt-6">
          <p className="text-center text-xs text-[#9fb8a8]">
            © {new Date().getFullYear()} Kare Kerala | Medical Tourism & Ayurveda in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
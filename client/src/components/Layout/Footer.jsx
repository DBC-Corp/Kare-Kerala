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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1: Logo + description + social */}
          <div className="space-y-6 ">
            <div className="flex items-center gap-3">
              <img src={KareKeralaLogo} alt="Kare Kerala" className="w-28" />
            </div>
            <p className="text-sm text-[#d5e6de] max-w-xs leading-relaxed">
              Your trusted partner for medical tourism and authentic Ayurvedic
              treatments in Kerala, India.
            </p>

            <div className="flex items-center gap-3">
              {/** Social buttons: update hrefs */}
              <div className="flex items-center gap-3 text-[#cfe9df]">
                <a
                  href="#"
                  aria-label="facebook"
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <FaFacebookF size={14} />
                </a>

                <a
                  href="#"
                  aria-label="instagram"
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <FaInstagram size={15} />
                </a>

                <a
                  href="#"
                  aria-label="twitter"
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <FaXTwitter size={14} />
                </a>

                <a
                  href="#"
                  aria-label="linkedin"
                  className="w-9 h-9 rounded-full bg-white/6 flex items-center justify-center hover:bg-white/10 transition"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-6 playfair">
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

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-6 playfair">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {["Home", "About Us", "Services", "Why Kerala", "Contact"].map(
                (item) => (
                  <li
                    key={item}
                    className="text-[#d5e6de] cursor-pointer transition-all duration-300 hover:text-[#4DBD89] hover:translate-x-1"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#e6f2ea] mb-6 playfair">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm text-[#d5e6de]">
              <div className="flex items-start gap-3">
                <FaLocationDot className="text-[#4DBD89] mt-0.5" size={16} />

                <div>
                  <div className="text-[#cfe9df]">xxxxxxxx</div>
                  <div className="text-[#a9d3c0] text-xs">
                    Kochi, Kerala, India
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="text-[#4DBD89]" size={15} />
                <div className="text-[#cfe9df]">+91 xxxxxxxxxxx</div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#4DBD89]" size={15} />
                <div className="text-[#cfe9df]">xxxxxx@xxxxxxxxx.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom copyright */}
        <div className="mt-10 border-t border-[#0f2923]/30 pt-6">
          <p className="text-center text-xs text-[#9fb8a8]">
            &copy; {new Date().getFullYear()} Kare Kerala | Medical Tourism &
            Ayurveda in Kerala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import KareKeralaLogo from "../../assets/images/kareKeralaLogo.svg";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-100 flex items-center justify-between py-2 px-10 bg-[#FCFAF8]  inter text-[14px] ">
      {/* logo  */}
      <div>
        <img src={KareKeralaLogo} alt="KareKeralaLogo" />
      </div>

      {/* nav items  */}
      <div className="flex gap-7 font-medium  ">
        <p>Home</p>
        <p>About Us</p>
        <p>Services</p>
        <p>Why Kerala</p>
        <p>Doctors</p>
      </div>

      {/* button  */}
      <div>
        <button
          className="uppercase flex items-center justify-center gap-2 py-1 px-2 rounded-[10px] 
               border-2 border-[#1B6498] text-[#1B6498] font-medium cursor-pointer
               transition-all duration-300 ease-in-out
               hover:bg-[#1B6498] hover:text-white"
        >
          <FiPhone />
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;

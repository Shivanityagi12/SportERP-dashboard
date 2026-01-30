

import { useState } from "react";
import {
 
  FiChevronUp,
  FiChevronDown} from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";





const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-gray-300 mt-25">
      <div
        className="
          px-6 py-4
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-4
          text-sm
          text-gray-500
        "
      >
        {/* LEFT SIDE (Copyright + Links) */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© 2021 SportERP. All rights reserved.</p>

          <div className="flex gap-4 font-semibold text-gray-700">
            <span className="cursor-pointer underline">
              Privacy Policy
            </span>
            <span className="cursor-pointer underline">
              API
            </span>
            <span className="cursor-pointer underline">
              Contact
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4 relative text-gray-700">
          {/* Language */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 font-semibold hover:text-gray-900"
            >
              <img
                src="/flags/us.png"
                alt="US"
                className="w-5 h-4 rounded-sm object-cover"
              />
              <span>English (US)</span>
              {open ? <FiChevronUp /> : <FiChevronDown />}
            </button>

            {/* Dropdown */}
            {open && (
              <div
                className="
                  absolute right-0 bottom-8
                  bg-white border
                  rounded-md shadow-md
                  w-44
                  font-semibold
                "
              >
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/us.png" className="w-5 h-4 rounded-sm" />
                  <span>English (US)</span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/in.png" className="w-5 h-4 rounded-sm" />
                  <span>English (IN)</span>
                </div>
                <div className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer">
                  <img src="/flags/fr.png" className="w-5 h-4 rounded-sm" />
                  <span>Français</span>
                </div>
              </div>
            )}
          </div>

          {/* Icons */}
          <HiOutlineAdjustments className="cursor-pointer text-gray-600 hover:text-gray-800 text-[18px]" />
  <IoSettingsOutline className="text-gray-500 cursor-pointer hover:text-gray-800 text-lg" />

</div>
     
         
      </div>
    </footer>
  );
};

export default Footer;


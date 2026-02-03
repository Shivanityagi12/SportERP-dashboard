import { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const Footer = () => {
  const [openLang, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("English (US)");
  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const languages = [
    { name: "English (US)", flag: "/flags/us.png" },
    { name: "English (IN)", flag: "/flags/in.png" },
    { name: "Français", flag: "/flags/fr.png" },
  ];

  return (
    <>
      <footer className="bg-white border-t border-gray-300 mt-10">
        <div className="px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          {/* LEFT SIDE */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center md:text-left">
            <p>© 2026 SportERP. All rights reserved.</p>

            <div className="flex gap-4 font-medium text-gray-700">
              <span className="cursor-pointer underline hover:text-red-600 transition">
                Privacy Policy
              </span>
              <span className="cursor-pointer underline hover:text-red-600 transition">
                API
              </span>
              <span className="cursor-pointer underline hover:text-red-600 transition">
                Contact
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 relative">

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="flex items-center gap-2 font-medium text-gray-700 hover:text-gray-900 transition"
              >
                <img
                  src={languages.find((l) => l.name === language)?.flag}
                  alt="flag"
                  className="w-5 h-4 rounded-sm object-cover"
                />
                <span className="hidden sm:inline">{language}</span>
                {openLang ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {openLang && (
                <div className="absolute right-0 bottom-8 bg-white border rounded-md shadow-md w-44 z-50">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      onClick={() => {
                        setLanguage(lang.name);
                        setOpenLang(false);
                      }}
                      className="px-3 py-2 flex items-center gap-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <img src={lang.flag} className="w-5 h-4 rounded-sm" />
                      <span className="text-sm font-medium">{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FILTER ICON */}
            <HiOutlineAdjustments
              onClick={() => setShowFilter(true)}
              className="cursor-pointer text-gray-600 hover:text-red-600 text-lg transition"
            />

            {/* SETTINGS ICON */}
            <IoSettingsOutline
              onClick={() => setShowSettings(true)}
              className="cursor-pointer text-gray-600 hover:text-red-600 text-lg transition"
            />
          </div>
        </div>
      </footer>

      {/* FILTER MODAL */}
      {showFilter && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-75">
            <h2 className="text-lg font-semibold mb-3"> Filter Options</h2>
            <p className="text-sm text-gray-600 mb-4">
              Here you can add filter settings.
            </p>
            <button
              onClick={() => setShowFilter(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* SETTINGS MODAL */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-75">
            <h2 className="text-lg font-semibold mb-3"> Settings</h2>
            <p className="text-sm text-gray-600 mb-4">
              Manage system settings here.
            </p>
            <button
              onClick={() => setShowSettings(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

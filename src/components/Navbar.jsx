


import {
  FaSearch,
  FaShoppingCart,
  FaBell,
  FaThLarge,
} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


const Navbar = ({
  searchQuery,
  setSearchQuery,
  logo,
  profileImage,
  onUpgrade,
  onCartClick,
  onNotificationClick,
}) => {
  return (
    <nav className="w-full h-16 bg-white border-b border-gray-300 flex items-center justify-between px-4 md:px-6">

      {/* LEFT: LOGO */}
      <div className="flex items-center gap-2 cursor-pointer">
        {logo ? (
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        ) : (
          <span className="text-lg font-bold text-red-600">SportERP</span>
        )}
      </div>

      {/*  PAGE LINKS  */}
     

      {/* CENTER: SEARCH (hidden on small screens) */}
      <div className="hidden md:flex w-1/3">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full pl-10 pr-4 py-2
              border border-gray-300 rounded-lg
              bg-gray-50 text-sm
              focus:outline-none focus:ring-2 focus:ring-red-500
            "
          />
        </div>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="flex items-center gap-2 sm:gap-4">


        {/* Upgrade Button */}
        <button
          onClick={onUpgrade}
          className="hidden sm:flex bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm"
        >
          + Upgrade
        </button>

        {/* Icons */}
        <FaShoppingCart
          onClick={onCartClick}
          className="cursor-pointer text-gray-600 hover:text-gray-900 text-lg"
        />
        <FaBell
          onClick={onNotificationClick}
          className="cursor-pointer text-gray-600 hover:text-gray-900 text-lg"
        />
        <FaThLarge className="hidden sm:block cursor-pointer text-gray-600 hover:text-gray-900 text-lg" />

        {/* Profile */}
        {profileImage ? (
          <img
            src={profileImage}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover cursor-pointer border"
          />
        ) : (
          <FaUserCircle className="text-3xl text-gray-500 cursor-pointer" />
        )}
         
      </div>
      
    </nav>
  );
};

export default Navbar;  
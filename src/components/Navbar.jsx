
import { FaSearch, FaShoppingCart, FaBell, FaThLarge, FaUserCircle } from "react-icons/fa";
import logo from "../assets/logos/sporterp-logo.png.svg";
import profile from "../assets/images/profile.jpg";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="w-full h-16 bg-white border-b  border-gray-300 flex items-center justify-between px-6">
      
      {/* LEFT: Logo */}
   <div className="flex items-center gap-2 cursor-pointer">
        <img
          src={logo}
          alt="SportERP Logo"
          className="h-8 w-auto"
        />
      </div>

      {/* CENTER: Search */}
      <div className="hidden md:flex w-1/3">
        <div className="relative w-full">
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg border-gray-300  focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-50"
          />
        </div>
      </div>

      {/* RIGHT: Actions */}
       <div className="flex items-center gap-3 min-w-55">
      <div className="flex items-center gap-2 sm:gap-4">
        <button className="hidden sm:flex bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
         + Upgrade
        </button>

        <FaShoppingCart className="cursor-pointer text-gray-600 hover:text-gray-900" />
        <FaBell className="cursor-pointer text-gray-600 hover:text-gray-900" />
       <FaThLarge className="hidden sm:block cursor-pointer text-gray-600 hover:text-gray-900" />
</div>

       
         {/* Profile Image */}
        <img
          src={profile}
          alt="User Profile"
          className="w-9 h-9 rounded-full object-cover cursor-pointer border"
        />
      </div>
    </nav>
  );
};

export default Navbar;

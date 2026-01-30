
import { FaSearch, FaFilter, FaCog, FaPlus } from "react-icons/fa";

const PageHeader = ({ value, onChange, onSearch }) => {
  return (
    <div className="bg-white border-b border-gray-300 ">
      <div className="px-6 py-4">

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          All Products
        </h1>

        {/* CONTROLS */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          {/* LEFT SIDE */}
          <div className="flex flex-wrap items-center gap-3 w-full">

            {/* SEARCH */}
            <div className="flex w-full md:max-w-md">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search subscriptions"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="w-full h-10 pl-9 pr-3 border border-gray-300 bg-gray-50 rounded-l-md text-sm
                             focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                onClick={onSearch}
                className="h-10 px-5 bg-red-600 text-white text-sm font-medium
                           rounded-r-md hover:bg-red-700 whitespace-nowrap"
              >
                Search
              </button>
            </div>

            {/* FILTER */}
            <button className="flex items-center gap-2 h-10 px-4 border border-gray-300
                               rounded-md text-sm text-red-600 hover:bg-gray-100 whitespace-nowrap">
              <FaFilter />
              Filters
            </button>

            {/* CONFIG */}
            <button className="flex items-center gap-2 h-10 px-4 border border-gray-300
                               rounded-md text-sm text-gray-700 hover:bg-gray-100 whitespace-nowrap">
              <FaCog />
              Configurations
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-start lg:justify-end">
            <button className="flex items-center gap-2 h-10 px-4 bg-red-600 text-white
                               rounded-md text-sm font-medium hover:bg-red-700
                               whitespace-nowrap shrink-0">
              <FaPlus />
              Add new product
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PageHeader;






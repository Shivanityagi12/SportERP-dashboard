


import { FaSearch, FaFilter, FaCog, FaPlus } from "react-icons/fa";

const PageHeader = ({
  searchQuery,
  setSearchQuery,
  onAddProduct,
  onToggleConfig,
  statusFilter,
  setStatusFilter,
}) => {

  const handleFilterClick = () => {
    setStatusFilter((prev) =>
      prev === "All" ? "Active" : prev === "Active" ? "Archived" : "All"
    );
  };

  return (
    <div className="bg-white border-b border-gray-300">
      <div className="px-4 sm:px-6 py-4">

        <h1 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          All Products
        </h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

          <div className="flex flex-wrap items-center gap-3 w-full">

            {/* SEARCH BOX */}
            <div className="flex w-full sm:max-w-md">
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="text"
                  placeholder="Search by name, brand, category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="
                    w-full h-10 pl-9 pr-3
                    border border-gray-300 bg-gray-50
                    rounded-l-md text-sm
                    focus:outline-none focus:ring-2 focus:ring-red-500
                    transition
                  "
                />
              </div>

              <button
                className="
                  h-10 px-3 sm:px-5
                  bg-red-600 text-white text-sm font-medium
                  rounded-r-md hover:bg-red-700
                  transition whitespace-nowrap
                "
              >
                Search
              </button>
            </div>

            {/* FILTER BUTTON */}
            <button
              onClick={handleFilterClick}
              className="
                flex items-center gap-2 h-10 px-4
                border border-gray-300 rounded-md
                text-sm hover:bg-gray-100 transition
                text-red-600
              "
            >
              <FaFilter />
              {statusFilter === "All" ? "Filters" : statusFilter}
            </button>

            {/* CONFIGURATION BUTTON */}
            <button
              onClick={onToggleConfig}
              className="
                flex items-center gap-2 h-10 px-4
                border border-gray-300 rounded-md
                text-sm text-gray-700 hover:bg-gray-100
                transition whitespace-nowrap
              "
            >
              <FaCog />
              Configurations
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-start lg:justify-end w-full lg:w-auto">
            <button
              onClick={onAddProduct}
              className="
                flex items-center gap-2 h-10 px-4
                bg-red-600 text-white rounded-md
                text-sm font-medium hover:bg-red-700
                transition whitespace-nowrap w-full sm:w-auto
              "
            >
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















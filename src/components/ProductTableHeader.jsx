
import { FaSortUp, FaSortDown } from "react-icons/fa";

const ProductTableHeader = ({setSortKey}) => {
  return (
   <div className="bg-gray-50 border-b border-gray-300 overflow-x-auto">
  <div
    className="
      min-w-225
      grid grid-cols-[48px_3fr_1.5fr_1.5fr_1fr_1fr_1fr_48px]
      items-center
      px-6 py-4
      text-[11px]
      font-semibold
      text-gray-500
      uppercase
    "
  >
       {/* Checkbox */}
        <div className="flex justify-center  gap-3 ml-1">
      <input
  type="checkbox"
  className={`
    w-4 h-4
    appearance-none
    rounded-[3px]
    border border-gray-200
    bg-white
    cursor-pointer
    checked:border-gray-300
    checked:bg-white
    hover:border-gray-300
    focus:outline-none
  `}
/>

        </div>

        {/* Course Name */}
        <div>Course Name</div>

           {/* Category */}
        <div
          onClick={() => setSortKey("category")}
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
        >
          Category
          <div className="flex flex-col leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

       {/* Brand */}
        <div
          onClick={() => setSortKey("brand")}
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
        >
          Brand
          <div className="flex flex-col leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

 
 {/* Price */}
        <div
          onClick={() => setSortKey("price")}
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
        >
          Price
          <div className="flex flex-col leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>
        
        {/* Stock */}
        <div
          onClick={() => setSortKey("stock")}
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
        >
          Stock
          <div className="flex flex-col leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

        {/* Status */}
        <div
          onClick={() => setSortKey("status")}
          className="flex items-center gap-1 cursor-pointer hover:text-gray-700"
        >
          status
          <div className="flex flex-col leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

        {/* Actions */}
        <div></div>
      </div>
  </div>
  );
};

export default ProductTableHeader;












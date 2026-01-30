
import { FaSortUp, FaSortDown } from "react-icons/fa";

const ProductTableHeader = () => {
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
        <div className="flex items-center gap-1">
          Category
          <div className="flex flex-col items-center leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

        {/* Brand */}
        <div className="flex items-center gap-1">
          Brand
          <div className="flex flex-col items-center leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>
 {/* Price */}
        <div className="flex items-center gap-1">
          Price
          <div className="flex flex-col items-center leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

        {/* Stock */}
        <div className="flex items-center gap-1">
          Stock
          <div className="flex flex-col items-center leading-[0.7]">
            <FaSortUp className="text-[8px]" />
            <FaSortDown className="text-[8px] -mt-1" />
          </div>
        </div>

        {/* Status */}
        <div className="flex items-center gap-1">
          Status
          <div className="flex flex-col items-center leading-[0.7]">
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




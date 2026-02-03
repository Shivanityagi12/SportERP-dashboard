
import { FaInfoCircle } from "react-icons/fa";

const ProductsMetaInfo = ({ totalResults = 6560}) => {
  return (
    <div className="flex items-center gap-2  bg-white border-b border-gray-300 ">
      
      <h2 className="text-sm font-semibold text-gray-900 px-6 py-4">SportERP Products
      </h2>

      <span className="text-sm text-gray-500">
        {totalResults.toLocaleString()} results
      </span>

      <FaInfoCircle className="text-gray-400 text-sm cursor-pointer hover:text-gray-600" />
    </div>
  );
};

export default ProductsMetaInfo;
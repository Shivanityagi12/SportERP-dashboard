 

import { FaEllipsisH } from "react-icons/fa";
import products from "../data/products";

const ProductTable = () => {
  return (
    <div className="bg-white overflow-x-auto">
  {products.map((product, index) => (
   <div
  key={product.id}
  className="
    flex flex-col gap-3
    md:grid md:grid-cols-[48px_3fr_1.5fr_1.5fr_1fr_1fr_1fr_48px]
    md:items-center
    px-4 md:px-6 py-4
    border-b border-gray-300
    hover:bg-gray-50
    min-w-225 md:min-w-0
  "
>


          {/* Checkbox */}
          <div className="flex justify-center">
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
          <div className="flex items-center gap-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-10 h-10 rounded-md object-cover"
            />
           <span className="text-sm md:text-base font-medium text-gray-900">
  {product.name}
</span>

          </div>

          {/* Category */}
          <div className="text-sm font-medium text-gray-900">{product.category}</div>

          {/* Brand */}
          <div className="text-sm font-medium text-gray-900">{product.brand}</div>

<div className="text-sm font-medium text-gray-900">
  {index === 0 ? "€" : "$"}{product.price}
</div>

<div className="text-sm font-medium text-gray-900">
  {index === 0 ? "€" : "$"}{product.stock}
</div>



     
          {/* Status */}
          <div>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                product.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-200 text-yellow-700"
              }`}
            >
              {product.status}
            </span>
          </div>

          {/* Actions */}
          <div className="flex justify-center">
            <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTable;  
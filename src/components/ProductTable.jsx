import { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";

const ProductTable = ({ products, onDelete, onEdit, onView }) => {
  const [openMenuId, setOpenMenuId] = useState(null);

  return (
    <div className="bg-white overflow-x-auto">
      {products.map((product, index) => {
        const currency = index === 0 ? "€" : "$";

        return (
          <div
            key={product.id}
            className="
              relative
              flex flex-col md:grid md:grid-cols-[48px_3fr_1.5fr_1.5fr_1fr_1fr_1fr_48px]
              md:items-center
              px-4 md:px-6 py-4
              border-b border-gray-300
              hover:bg-gray-50
            "
          >
            {/* Checkbox */}
            <div className="flex justify-center">
              <input type="checkbox" className="w-4 h-4 border rounded" />
            </div>

            {/* Name */}
            <div className="flex items-center gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-10 h-10 rounded-md object-cover"
              />
              <span className="text-sm font-medium">{product.name}</span>
            </div>

            <div className="text-sm">{product.category}</div>
            <div className="text-sm">{product.brand}</div>

            {/* Price */}
            <div className="text-sm font-medium">
              {currency}
              {product.price}
            </div>

            {/* Stock */}
            <div className="text-sm font-medium">
              {currency}
              {product.stock}
            </div>

            {/* Status */}
            <div>
              <span
                className={`px-3 py-1 text-xs rounded-full ${
                  product.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {product.status}
              </span>
            </div>

            {/* Action Menu */}
            <div className="flex justify-center relative">
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === product.id ? null : product.id)
                }
              >
                <FaEllipsisH className="text-gray-500 cursor-pointer hover:text-gray-700" />
              </button>

              {openMenuId === product.id && (
                <div className="absolute right-0 top-8 bg-white border shadow-lg rounded-md w-32 z-50">
                  <button
                    onClick={() => {
                      onView(product);
                      setOpenMenuId(null);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    View
                  </button>

                  <button
                    onClick={() => {
                      onEdit(product);
                      setOpenMenuId(null);
                    }}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-gray-100"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      onDelete(product.id);
                      setOpenMenuId(null);
                    }}
                    className="w-full px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductTable;




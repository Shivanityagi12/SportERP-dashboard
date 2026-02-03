
import { useState } from "react";

const AddProductModal = ({ onAdd, onClose }) => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    status: "Active",
    image: "",
  });

  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "Product name is required";
    if (!product.category) newErrors.category = "Category is required";
    if (!product.brand) newErrors.brand = "Brand is required";
    if (!product.price) newErrors.price = "Price is required";
    if (!product.stock) newErrors.stock = "Stock is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setProduct({ ...product, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onAdd(product);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-3">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-6 animate-fadeIn">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Add New Product
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <div>
            <input
              name="name"
              placeholder="Product Name"
              value={product.name}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <input
              name="category"
              placeholder="Category"
              value={product.category}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            />
            {errors.category && <p className="text-xs text-red-500">{errors.category}</p>}
          </div>

          <div>
            <input
              name="brand"
              placeholder="Brand"
              value={product.brand}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            />
            {errors.brand && <p className="text-xs text-red-500">{errors.brand}</p>}
          </div>

          <div>
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={product.price}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            />
            {errors.price && <p className="text-xs text-red-500">{errors.price}</p>}
          </div>

          <div>
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            />
            {errors.stock && <p className="text-xs text-red-500">{errors.stock}</p>}
          </div>

          <div>
            <select
              name="status"
              value={product.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded focus:ring-2 focus:ring-red-500"
            >
              <option>Active</option>
              <option>Archived</option>
            </select>
          </div>
        </div>

        {/* Image Upload */}
        <div className="mt-3">
          <label className="text-sm text-gray-600">Product Image</label>
          <input
            type="file"
            onChange={handleImage}
            className="w-full mt-1 text-sm"
          />
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-12 h-12 mt-2 rounded object-cover border"
            />
          )}
        </div>

        {/*button*/}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;


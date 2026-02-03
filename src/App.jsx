import { useState } from "react";
import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";
import ProductsMetaInfo from "./components/ProductsMetaInfo";
import ProductTableHeader from "./components/ProductTableHeader";
import ProductTable from "./components/ProductTable";
import Footer from "./components/Footer";
import productsData from "./data/products";
import logo from "./assets/logos/sporterp-logo.png.svg";
import profile from "./assets/images/profile.jpg";
import AddProductModal from "./components/AddProductModal";

function App() {
  const [products, setProducts] = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  //  SEARCH + FILTER LOGIC
  const filteredProducts = products.filter((product) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "All" || product.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  //  SORTING LOGIC
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (!sortKey) return 0;
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });

  //  ADD PRODUCT FUNCTION
  const addProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        image: newProduct.image || "https://via.placeholder.com/40",
        ...newProduct,
      },
    ]);
    alert(" Product Added Successfully!");
    setShowAddModal(false);
  };

  return (
    <>
      {/*  NAVBAR */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        logo={logo}
        profileImage={profile}
        onUpgrade={() => alert("Upgrade clicked")}
        onCartClick={() => alert("Cart clicked")}
        onNotificationClick={() => alert("Notification clicked")}
      />

      {/*  PAGE HEADER */}
      <PageHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onAddProduct={() => setShowAddModal(true)}
        onToggleConfig={() => setShowConfig(true)}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      {/*  META INFO */}
      <ProductsMetaInfo totalResults={sortedProducts.length} />

      {/*  TABLE HEADER */}
      <ProductTableHeader setSortKey={setSortKey} />

      {/*  PRODUCT TABLE */}
      <ProductTable products={sortedProducts} />

      {/*  ADD PRODUCT MODAL */}
      {showAddModal && (
        <AddProductModal
          onAdd={addProduct}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {/*  CONFIGURATION MODAL */}
      {showConfig && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-87.5 max-w-full">
            <h2 className="text-lg font-semibold mb-3">
              ⚙️ Configuration Panel
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Here you can manage settings.
            </p>

            <button
              onClick={() => setShowConfig(false)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/*  FOOTER */}
      <Footer />
    </>
  );
}

export default App;   








import { useLocation } from "wouter";
import ProductCard from "./ProductCard";
import { dryFruitsCombos } from "../data/products";

const DryFruitsCombos = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const [, navigate] = useLocation();

  const handleNavigate = (productId) => {
    // Force navigation even if same URL
    navigate(`/product/${productId}`, { replace: false });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#3D3F24] mb-12">Dry Fruits Combo</h2>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex space-x-6 pb-4" style={{ minWidth: "max-content" }}>
            {dryFruitsCombos.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64">
                <div className="relative">
                  <div
                    className="aspect-square overflow-hidden cursor-pointer"
                    onClick={() => handleNavigate(product.id)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top hover:scale-125 transition-transform"
                    />
                  </div>
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                    {product.discount}% OFF
                  </div>
                  <button
                    onClick={() => handleWishlistToggle(product)}
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <i
                      className={`fas fa-heart ${
                        wishlistItems.some((item) => item.id === product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    ></i>
                  </button>
                </div>
                <div className="p-4">
                  <h3
                    className="font-semibold text-[#3D3F24] mb-2 cursor-pointer hover:underline"
                    onClick={() => handleNavigate(product.id)}
                  >
                    {product.name}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-lg font-bold text-[#4A5A2A]">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DryFruitsCombos;

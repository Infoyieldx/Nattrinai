import { useNavigate } from "react-router-dom";
import ProductCard from './ProductCard';
import { specialOffers } from '../data/products';
import { useState } from 'react';

const SpecialOffers = ({ handleAddToCart, handleWishlistToggle, wishlistItems, setShowCart }) => {
  const navigate = useNavigate();
  const [recentlyAddedId, setRecentlyAddedId] = useState(null); // Tracks the last product added

  const handleNavigate = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleCartClick = (product, e) => {
    e.stopPropagation();
    handleAddToCart(product);
    setRecentlyAddedId(product.id); // Show "View Cart" for this product
  };

   const handleViewCart = () => {
    if (typeof setShowCart === 'function') {
      setShowCart(true);
    } else {
      alert('Viewing cart (no cart UI defined)');
    }
  };

  return (
    <section className="py-16 bg-[#4A5A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Special Offers</h2>
        <p className="text-center text-white mb-12">Limited time deals on organic products</p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleNavigate(product.id)}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top hover:scale-125 transition-transform"
                  />
                </div>

                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  {product.discount}% OFF
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWishlistToggle(product);
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <i
                    className={`fas fa-heart ${
                      wishlistItems.some((item) => item.id === product.id)
                        ? 'text-red-500'
                        : 'text-gray-400'
                    }`}
                  ></i>
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-[#3D3F24] mb-2">{product.name}</h3>

                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-[#4A5A2A]">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <div className="flex space-x-2">
                  {recentlyAddedId === product.id ? (
                    <button
                      onClick={handleViewCart}
                      className="flex-1 bg-blue-500 text-[10px] text-white py-2 rounded-lg font-semibold animate-pulse"
                    >
                      View Cart
                    </button>
                  ) : (
                    <button
                      onClick={(e) => handleCartClick(product, e)}
                      className="flex-1 bg-[#4A5A2A] text-[10px] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
                    >
                      Add to Cart
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                      navigate("/cart"); // Navigate directly to cart for Buy Now
                    }}
                    className="flex-1 bg-orange-500 text-[10px] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

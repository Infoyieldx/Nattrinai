import ProductCard from './ProductCard';
import { useLocation } from "wouter";
import { specialOffers } from '../data/products';

const SpecialOffers = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const [, navigate] = useLocation();

  return (
    <section className="py-16 bg-[#4A5A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Special Offers</h2>
        <p className="text-center text-white mb-12">Limited time deals on organic products</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialOffers.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  {product.discount}% OFF
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    handleWishlistToggle(product);
                  }}
                  className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <i className={`fas fa-heart ${wishlistItems.some(item => item.id === product.id) ? 'text-red-500' : 'text-gray-400'}`}></i>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#3D3F24] mb-2">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <span className="text-lg font-bold text-[#4A5A2A]">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="flex-1 bg-[#4A5A2A] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleAddToCart(product);
                      // Navigate to checkout would be handled by parent
                    }}
                    className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap cursor-pointer"
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

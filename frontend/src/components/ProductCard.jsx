import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductCard = ({ product, onAddToCart, onWishlistToggle, isInWishlist,setShowCart, showBuyNow = false }) => {
  const navigate = useNavigate();
  const [showFullName, setShowFullName] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBuyNow = () => {
    onAddToCart(product);
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    setAddedToCart(true);
  };

    const handleViewCart = () => {
    if (typeof setShowCart === 'function') {
      setShowCart(true);
    } else {
      alert('Viewing cart (no cart UI defined)');
    }
  };
 

  // Truncate logic for mobile
  const isMobile = window.innerWidth < 768;
  const truncatedName =
    isMobile && !showFullName && product.name.length > 20
      ? product.name.slice(0, 18) + '...'
      : product.name;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-square overflow-hidden cursor-pointer" onClick={handleProductClick}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top hover:scale-125 transition-transform"
          />
        </div>
        {product.discount && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
            {product.discount}% OFF
          </div>
        )}
        <button
          onClick={() => onWishlistToggle(product)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <i className={`fas fa-heart ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}></i>
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-[#3D3F24] mb-2 cursor-pointer line-clamp-2 h-11" onClick={handleProductClick}>
          {product.name}
        </h3>

        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-[#4A5A2A]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
          )}
        </div>

                {showBuyNow ? (
              <div className="flex space-x-2">
                {addedToCart ? (
                  <button
                    onClick={handleViewCart}
                    className="flex-1 bg-blue-500 text-[10px] text-white py-2 rounded-lg font-semibold animate-pulse"
                  >
                    View Cart
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-[#4A5A2A] text-[10px] text-white py-2 rounded-lg p-1 font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap "
                  >
                    Add to Cart
                  </button>
                )}
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-orange-500 text-[10px] text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap animate-bounce"
                >
                  Buy Now
                </button>
              </div>
        ) : addedToCart ? (
          <button
            onClick={handleViewCart}
            className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold animate-pulse"
          >
            View Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

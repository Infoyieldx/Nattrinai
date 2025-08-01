import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart, onWishlistToggle, isInWishlist, showBuyNow = false }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBuyNow = () => {
    onAddToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-square overflow-hidden cursor-pointer" onClick={handleProductClick}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top"
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
        <h3 className="font-semibold text-[#3D3F24] mb-2 cursor-pointer" onClick={handleProductClick}>
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
            <button
              onClick={() => onAddToCart(product)}
              className="flex-1 bg-[#4A5A2A] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap cursor-pointer"
            >
              Buy Now
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-[#4A5A2A] text-white py-2 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors whitespace-nowrap cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

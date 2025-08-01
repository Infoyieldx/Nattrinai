const OutOfStockProductCard = ({ product, isInWishlist, onWishlistToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden opacity-60 pointer-events-none relative">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-top grayscale"
            style={{ filter: 'grayscale(80%) blur(1px)' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white bg-red-600 bg-opacity-80 px-4 py-2 rounded-lg font-bold text-lg">
              Out of Stock
            </span>
          </div>
        </div>
        {/* Wishlist toggle is still allowed, if you want */}
        <button
          onClick={() => onWishlistToggle(product)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          tabIndex={-1}
          disabled
        >
          <i className={`fas fa-heart ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}></i>
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-[#3D3F24] mb-2 cursor-default">
          {product.name}
        </h3>
        <div className="flex items-center mb-3">
          <span className="text-lg font-bold text-[#4A5A2A]">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through ml-2">
              ₹{product.originalPrice}
            </span>
          )}
        </div>
        <button
          className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold cursor-not-allowed"
          disabled
        >
          Out of Stock
        </button>
      </div>
    </div>
  );
};

export default OutOfStockProductCard;


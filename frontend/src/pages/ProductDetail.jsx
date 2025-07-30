import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById } from '../data/products';



const ProductDetail = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = getProductById(parseInt(productId));
    setProduct(foundProduct);
  }, [productId]);

  if (!product) {
    return (
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Product Not Found</h1>
          <p className="text-gray-600">The requested product does not exist.</p>
        </div>
      </div>
    );
  }

  const handleAddToCartWithQuantity = () => {
    for (let i = 0; i < quantity; i++) {
      handleAddToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCartWithQuantity();
    navigate('/checkout');
  };

  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
          />
          {product.discount && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-lg text-lg font-semibold">
              {product.discount}% OFF
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-3xl font-bold text-[#4A5A2A]">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
            )}
            {product.discount && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                Save ₹{product.originalPrice - product.price}
              </span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <i className="fas fa-minus text-sm"></i>
              </button>
              <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                <i className="fas fa-plus text-sm"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCartWithQuantity}
                className="flex-1 bg-[#4A5A2A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Buy Now
              </button>
            </div>
            <button
              onClick={() => handleWishlistToggle(product)}
              className="w-full border border-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
            >
              <i className={`fas fa-heart ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}></i>
              <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          {/* Product Features */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-4">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-green-500"></i>
                <span>100% Organic & Natural</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-green-500"></i>
                <span>No Artificial Additives</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-green-500"></i>
                <span>Sustainably Sourced</span>
              </li>
              <li className="flex items-center space-x-2">
                <i className="fas fa-check text-green-500"></i>
                <span>Free Shipping on Orders ₹500+</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

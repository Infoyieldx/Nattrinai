import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getProductById,
  getRelatedProducts
} from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductReviews from '../components/ProductReviews';
import RelatedProducts from '../components/RelatedProducts';

const ProductDetail = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [sortOption, setSortOption] = useState('latest');
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [helpfulClicked, setHelpfulClicked] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);

    const prod = getProductById(String(productId));
    setProduct(prod);
    setQuantity(1);
    setShowAllReviews(false);
    setHelpfulClicked([]);

    if (prod?.id) {
      const storedReviews = JSON.parse(localStorage.getItem(`reviews-${prod.id}`)) || [];
      setReviews(storedReviews);
    }

    setIsLoading(false);
  }, [productId]);

  const handleAddToCartWithQuantity = () => {
    for (let i = 0; i < quantity; i++) {
      handleAddToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCartWithQuantity();
    navigate('/checkout');
  };

  const isInWishlist = wishlistItems.some(item => item.id === product?.id);

  if (isLoading) {
    return (
      <div className="py-16 w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
        {/* Skeleton loader */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="animate-pulse">
            <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <div className="animate-pulse h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-full mt-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
            <div className="animate-pulse h-8 bg-gray-200 rounded w-1/4 mt-4"></div>
            <div className="animate-pulse h-12 bg-gray-200 rounded w-1/2 mt-4"></div>
            <div className="animate-pulse h-12 bg-gray-200 rounded mt-4"></div>
            <div className="animate-pulse h-12 bg-gray-200 rounded mt-4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Product Not Found</h1>
        <p className="text-gray-600">The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div
      className="py-16 w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24"
      key={product.id} // 👈 THIS LINE FORCES COMPONENT TO RE-RENDER ON PRODUCT CHANGE
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              loading="lazy"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-2 rounded-lg text-lg font-semibold">
                {product.discount}% OFF
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-[#3D3F24]">{product.name}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>
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

          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Increase quantity"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
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
              className="w-full border border-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center space-x-2 transition-colors"
            >
              <i className={`fas fa-heart ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}></i>
              <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-4">Product Features</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-green-500" /> 100% Organic & Natural
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-green-500" /> No Artificial Additives
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-green-500" /> Sustainably Sourced
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-check text-green-500" /> Free Shipping on Orders ₹500+
              </li>
            </ul>
          </div>
        </div>
      </div>

      <RelatedProducts 
        productId={productId}
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
        title="You May Also Like"
        className="mt-20"
      />

      <div className="mt-20">
        <ProductReviews
          product={product}
          reviews={reviews}
          setReviews={setReviews}
          sortOption={sortOption}
          setSortOption={setSortOption}
          showAllReviews={showAllReviews}
          setShowAllReviews={setShowAllReviews}
          helpfulClicked={helpfulClicked}
          setHelpfulClicked={setHelpfulClicked}
        />
      </div>
    </div>
  );
};

export default ProductDetail;

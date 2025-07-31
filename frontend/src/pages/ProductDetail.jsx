import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import {
  getProductById,
  getProductCategory,
  getProductsByCategory,
  getAllProducts
} from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductReviews from '../components/ProductReviews';

const ProductDetail = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const [match, params] = useRoute('/product/:productId');
  const [, setLocation] = useLocation();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortOption, setSortOption] = useState('recent');
  const [helpfulClicked, setHelpfulClicked] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const productId = parseInt(params?.productId);

  useEffect(() => {
    const foundProduct = getProductById(productId);
    setProduct(foundProduct);
  }, [productId]);

  useEffect(() => {
    if (product?.id) {
      const storedReviews = JSON.parse(localStorage.getItem(`reviews-${product.id}`)) || [];
      setReviews(storedReviews);
    }
  }, [product?.id]);

  useEffect(() => {
    if (product?.id) {
      const category = getProductCategory(product.id);
      const allInCategory = getProductsByCategory(category).filter(p => p.id !== product.id);
      let related = allInCategory.slice(0, 4);

      // Ensure minimum of 4 related products by filling from all products
      if (related.length < 4) {
        const fallback = getAllProducts()
          .filter(p => p.id !== product.id && !related.some(r => r.id === p.id))
          .slice(0, 4 - related.length);
        related = [...related, ...fallback];
      }

      setRelatedProducts(related);
    }
  }, [product]);

  const handleAddToCartWithQuantity = () => {
    for (let i = 0; i < quantity; i++) {
      handleAddToCart(product);
    }
  };

  const handleBuyNow = () => {
    handleAddToCartWithQuantity();
    setLocation('/checkout');
  };

  const isInWishlist = wishlistItems.some(item => item.id === product?.id);

  if (!product) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Product Not Found</h1>
        <p className="text-gray-600">The requested product does not exist.</p>
      </div>
    );
  }

  return (
    <div className="py-16 w-full px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24">
      {/* Product Image & Buy Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
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
        </div>

        {/* Product Info & Actions */}
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

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">Quantity:</span>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <i className="fas fa-minus"></i>
              </button>
              <span className="w-12 text-center text-lg font-semibold">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <button
                onClick={handleAddToCartWithQuantity}
                className="flex-1 bg-[#4A5A2A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3D3F24]"
              >
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600"
              >
                Buy Now
              </button>
            </div>

            <button
              onClick={() => handleWishlistToggle(product)}
              className="w-full border border-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center space-x-2"
            >
              <i className={`fas fa-heart ${isInWishlist ? 'text-red-500' : 'text-gray-400'}`}></i>
              <span>{isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          {/* Features */}
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={handleAddToCart}
                onWishlistToggle={handleWishlistToggle}
                isInWishlist={wishlistItems.some(w => w.id === item.id)}
                showBuyNow={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Reviews */}
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

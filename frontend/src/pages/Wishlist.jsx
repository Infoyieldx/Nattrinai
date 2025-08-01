import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Wishlist = ({ wishlistItems, handleAddToCart, handleWishlistToggle }) => {
  const navigate = useNavigate();

  if (wishlistItems.length === 0) {
    return (
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <i className="fas fa-heart text-6xl text-gray-300 mb-4"></i>
          <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-8">Save your favorite organic products here</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#4A5A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
          >
            Explore Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-[#3D3F24] mb-8">My Wishlist</h1>
      <p className="text-gray-600 mb-8">{wishlistItems.length} item{wishlistItems.length !== 1 ? 's' : ''} in your wishlist</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onWishlistToggle={handleWishlistToggle}
            isInWishlist={true}
            showBuyNow={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

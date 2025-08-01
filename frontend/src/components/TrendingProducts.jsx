import ProductCard from './ProductCard';
import { trendingProducts } from '../data/products';

const TrendingProducts = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#3D3F24] mb-12">Trending Products</h2>
        <div className="overflow-x-auto custom-scrollbar">
          <div className="flex space-x-6 pb-4 " style={{ minWidth: 'max-content' }}>
            {trendingProducts.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64 ">
                
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onWishlistToggle={handleWishlistToggle}
                  isInWishlist={wishlistItems.some(item => item.id === product.id)}
                  showBuyNow={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;

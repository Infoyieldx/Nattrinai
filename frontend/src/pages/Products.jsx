import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../data/products';

const Products = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const location = useLocation(); // from react-router-dom
  const [sortBy, setSortBy] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Extract search query from URL
  const urlParams = new URLSearchParams(location.search);
  const searchQuery = urlParams.get('search') || '';

  useEffect(() => {
    const allProducts = getAllProducts();

    let products = allProducts;

    // Filter by search
    if (searchQuery) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort logic
    if (sortBy === 'price-low') {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      products = [...products].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(products);
  }, [searchQuery, sortBy]);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-6">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-gray-600">Showing {filteredProducts.length} products</p>
          <div className="flex items-center space-x-4">
            <span className="text-[#3D3F24] font-medium">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-[#A6A37E] rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A] cursor-pointer"
              >
                <option value="">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <i className="fas fa-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2 text-[#A6A37E] pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
          {searchQuery && (
            <p className="text-gray-400">Try searching with different keywords</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onWishlistToggle={handleWishlistToggle}
              isInWishlist={wishlistItems.some(item => item.id === product.id)}
              showBuyNow={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

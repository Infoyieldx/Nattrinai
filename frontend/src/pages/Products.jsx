import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { getAllProducts, getProductsByCategory, getProductCategory } from '../data/products';

const Products = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const location = useLocation(); // from react-router-dom
  const [sortBy, setSortBy] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    sortBy: ''
  });

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

    // Apply category filter
    if (filters.categories.length > 0) {
      console.log('Applying category filter:', filters.categories);
      products = products.filter(product => {
        const productCategory = getProductCategory(product.id);
        const isIncluded = productCategory && filters.categories.includes(productCategory);
        if (!isIncluded) {
          console.log(`Product ${product.name} (${product.id}) category: ${productCategory}`);
        }
        return isIncluded;
      });
      console.log('Products after category filter:', products.length);
    }

    // Apply price filter
    products = products.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Apply sorting
    if (filters.sortBy === 'price-low') {
      products = [...products].sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      products = [...products].sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'name-asc') {
      products = [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'name-desc') {
      products = [...products].sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(products);
  }, [searchQuery, filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="py-8 sm:py-12 w-full mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3D3F24] mb-4 sm:mb-6">
          {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Showing {filteredProducts.length} products
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Filter Sidebar */}
        <div className="w-full lg:w-64 lg:ml-0 mb-4 lg:mb-0">
          <FilterSidebar
            onFiltersChange={handleFiltersChange}
            selectedCategories={filters.categories}
            priceRange={filters.priceRange}
            sortBy={filters.sortBy}
            showCategoryFilter={true}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1 lg:ml-0">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found</p>
              {searchQuery && (
                <p className="text-gray-400">Try searching with different keywords</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mx-8 gap-2 sm:gap-6">
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
      </div>
    </div>
  );
};


export default Products;


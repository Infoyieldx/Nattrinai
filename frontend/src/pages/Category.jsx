import { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import { subcategories, getAllProducts } from '../data/products';

const Category = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const [match, params] = useRoute('/category/:categoryName');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    sortBy: ''
  });

  const categoryName = params?.categoryName;
  const urlParams = new URLSearchParams(window.location.search);
  const subFromUrl = urlParams.get('sub') || '';

  useEffect(() => {
    if (subFromUrl) {
      setSelectedSubcategory(subFromUrl);
    }
  }, [subFromUrl]);

  useEffect(() => {
    if (!categoryName || !subcategories[categoryName]) {
      setProducts([]);
      return;
    }

    let categoryProducts = [];
    if (selectedSubcategory) {
      const subcategory = subcategories[categoryName].find(sub => sub.name === selectedSubcategory);
      categoryProducts = subcategory ? subcategory.products : [];
    } else {
      categoryProducts = subcategories[categoryName].flatMap(sub => sub.products);
    }

    // Apply price filter
    categoryProducts = categoryProducts.filter(product => 
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    // Apply sorting
    if (filters.sortBy === 'price-low') {
      categoryProducts = [...categoryProducts].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (filters.sortBy === 'price-high') {
      categoryProducts = [...categoryProducts].sort((a, b) => Number(b.price) - Number(a.price));
    } else if (filters.sortBy === 'name-asc') {
      categoryProducts = [...categoryProducts].sort((a, b) => a.name.localeCompare(b.name));
    } else if (filters.sortBy === 'name-desc') {
      categoryProducts = [...categoryProducts].sort((a, b) => b.name.localeCompare(a.name));
    }

    setProducts(categoryProducts);
  }, [categoryName, selectedSubcategory, filters]);

  if (!categoryName || !subcategories[categoryName]) {
    return (
      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Category Not Found</h1>
          <p className="text-gray-600">The requested category does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-6">{categoryName} Products</h1>
        
        

        <p className="text-gray-600">Showing {products.length} products</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:ml-0">
          <FilterSidebar
            onFiltersChange={setFilters}
            selectedCategories={filters.categories}
            priceRange={filters.priceRange}
            sortBy={filters.sortBy}
            showCategoryFilter={false}
          />
        </div>

        {/* Products Grid */}
        <div className="flex-1 lg:ml-0">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onWishlistToggle={handleWishlistToggle}
                  isInWishlist={wishlistItems.some(item => item.id === product.id)}
                  showBuyNow={false}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;

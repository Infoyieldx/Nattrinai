import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { subcategories } from '../data/products';

const Category = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  const { categoryName } = useParams();
  const location = useLocation();

  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const subFromUrl = urlParams.get('sub') || '';
    setSelectedSubcategory(subFromUrl);
  }, [location.search]);

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

    if (sortBy === 'price-low') {
      categoryProducts = [...categoryProducts].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      categoryProducts = [...categoryProducts].sort((a, b) => b.price - a.price);
    }

    setProducts(categoryProducts);
  }, [categoryName, selectedSubcategory, sortBy]);

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
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-6">{categoryName} Products</h1>

        {/* Filter and Sort Options */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
          >
            <option value="">All Subcategories</option>
            {subcategories[categoryName].map((sub) => (
              <option key={sub.id} value={sub.name}>{sub.name}</option>
            ))}
          </select>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
          >
            <option value="">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <p className="text-gray-600">Showing {products.length} products</p>
      </div>

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
  );
};

export default Category;

import { useState, useEffect } from 'react';
import { Slider } from './ui/slider.jsx';
import { categories, getAllProducts } from '../data/products';

const FilterSidebar = ({
  onFiltersChange,
  selectedCategories = [],
  priceRange = [0, 1000],
  sortBy = '',
  showCategoryFilter = true
}) => {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);
  const [localCategories, setLocalCategories] = useState(selectedCategories);
  const [localSortBy, setLocalSortBy] = useState(sortBy);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const [minInput, setMinInput] = useState(localPriceRange[0].toString());
  const [maxInput, setMaxInput] = useState(localPriceRange[1].toString());
  const [focusedInput, setFocusedInput] = useState(null); // 'min', 'max', or null

  const allProducts = getAllProducts();
  const maxPrice = Math.max(...allProducts.map(p => p.price));
  const minPrice = Math.min(...allProducts.map(p => p.price));

  useEffect(() => {
    if (priceRange[0] === 0 && priceRange[1] === 1000) {
      setLocalPriceRange([minPrice, maxPrice]);
    }
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onFiltersChange({
        categories: localCategories,
        priceRange: localPriceRange,
        sortBy: localSortBy
      });
    }, 300);
    return () => clearTimeout(timeout);
  }, [localCategories, localPriceRange, localSortBy]);

  useEffect(() => {
    if (focusedInput !== 'min') setMinInput(localPriceRange[0].toString());
    if (focusedInput !== 'max') setMaxInput(localPriceRange[1].toString());
  }, [localPriceRange[0], localPriceRange[1], focusedInput]);

  const handleCategoryToggle = (categoryName) => {
    setLocalCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  const clearAllFilters = () => {
    setLocalCategories([]);
    setLocalPriceRange([minPrice, maxPrice]);
    setLocalSortBy('');
  };

  const FilterSection = ({ title, children }) => (
    <div className="border-b border-gray-200 pb-6 mb-6 last:border-b-0">
      <h3 className="text-lg font-semibold text-[#3D3F24] mb-4">{title}</h3>
      {children}
    </div>
  );

  const FilterContent = () => (
    <div className="space-y-6 w-full max-h-[calc(100vh-280px)] overflow-y-auto pr-2 custom-scrollbar">
      <FilterSection title="Price Range">
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{localPriceRange[0]}</span>
            <span>₹{localPriceRange[1]}</span>
          </div>
          <div className="px-2">
            <Slider
              value={localPriceRange}
              onValueChange={setLocalPriceRange}
              max={maxPrice}
              min={minPrice}
              step={10}
              className="w-full"
            />
          </div>
        </div>
         </FilterSection>
      <FilterSection title="Sort By">
        <select
          value={localSortBy}
          onChange={(e) => setLocalSortBy(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#4A5A2A] bg-white"
        >
          <option value="">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </FilterSection>

      {showCategoryFilter && (
        <FilterSection title="Categories">
          <div className="space-y-3 max-h-auto overflow-y-hidden">
            {categories.map((category) => (
              <div key={category.name} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                <input
                  type="checkbox"
                  checked={localCategories.includes(category.name)}
                  onChange={() => handleCategoryToggle(category.name)}
                  className="w-4 h-4 text-[#4A5A2A] border-gray-300 rounded focus:ring-[#4A5A2A]"
                  id={`category-${category.name}`}
                />
                <label
                  htmlFor={`category-${category.name}`}
                  className="text-gray-700 text-sm cursor-pointer select-none flex-1"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </FilterSection>
      )}

      {(localCategories.length > 0 || localSortBy || localPriceRange[0] !== minPrice || localPriceRange[1] !== maxPrice) && (
        <button
          onClick={clearAllFilters}
          className="w-full px-4 py-2 text-sm font-medium text-[#4A5A2A] border border-[#4A5A2A] rounded-lg hover:bg-[#4A5A2A] hover:text-white transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-full px-4 py-3 bg-[#4A5A2A] text-white rounded-lg flex items-center justify-between"
        >
          <span className="font-medium">Filters & Sort</span>
          <svg className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isMobileOpen && (
        <div className="lg:hidden mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <FilterContent />
        </div>
      )}

      <div className="hidden lg:block w-64 flex-shrink-0 ml-0">
        <div className="sticky-filter bg-white p-6 border border-gray-200 rounded-lg shadow-sm h-fit max-h-[calc(100vh-140px)] overflow-hidden">
          <FilterContent />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import SearchSuggestions from './SearchSuggestions';
import { getAllProducts, categories, subcategories } from '../data/products';
import logo from '../assets/logo.jpg';

const Header = ({ cartCount, wishlistCount, setShowCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const searchRef = useRef(null);
   // logo flip
     const [animate, setAnimate] = useState(false);
  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => setAnimate(true), 10);
  };
    

  const generateSearchSuggestions = (query) => {
    if (!query.trim()) return [];
   
    const allProducts = getAllProducts();
    const suggestions = [];
    
    const matchingCategories = categories.filter(category =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const matchingSubcategories = Object.entries(subcategories).flatMap(([categoryName, subs]) =>
      subs.filter(sub => sub.name.toLowerCase().includes(query.toLowerCase()))
        .map(sub => ({ ...sub, categoryName }))
    );
    
    const matchingProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    
    matchingCategories.forEach(category => {
      suggestions.push({
        type: 'category',
        ...category
      });
    });
    
    matchingSubcategories.forEach(subcategory => {
      suggestions.push({
        type: 'subcategory',
        ...subcategory
      });
    });
    
    matchingProducts.slice(0, 5).forEach(product => {
      suggestions.push({
        type: 'product',
        ...product
      });
    });
    
    return suggestions.slice(0, 10);
  };

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      const suggestions = generateSearchSuggestions(query);
      setSearchSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === 'category') {
      setLocation(`/category/${suggestion.name}`);
    } else if (suggestion.type === 'subcategory') {
      setLocation(`/category/${suggestion.categoryName}?sub=${suggestion.name}`);
    } else if (suggestion.type === 'product') {
      setLocation(`/product/${suggestion.id}`);
    }
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/products?search=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto sm:px-6 lg:px-8">
       <div className="flex items-center justify-between h-16">
        <div
  onClick={handleClick}
  className={`h-[70px] w-[70px] rounded-full overflow-hidden border-2 border-[#4A5A2A] shadow-md mr-4 cursor-pointer transition-transform ${
    animate ? "animate-coinFlip" : ""
  }`}
>
  <img
    src={logo}
    alt="Logo"
    className="h-full w-full object-cover"
  />
</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ">
            <Link href="/" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline hover:font-bold hover:text:4xl ">Home</Link>
            <Link href="/products" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline hover:font-bold hover:text:4xl">Products</Link>
            <Link href="/about" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline hover:font-bold hover:text:4xl">About</Link>
            <Link href="/contact" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline hover:font-bold hover:text:4xl">Contact</Link>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8" ref={searchRef}>
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search products, categories..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                  className="w-full pl-10 pr-4 py-2 border border-[#A6A37E] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4A5A2A] text-sm
    hover:border-[#4A5A2A] hover:bg-[#f5f5f0] transition"/>
    

                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A6A37E] text-sm"></i>
              </form>
              {showSuggestions && (
                <SearchSuggestions
                  suggestions={searchSuggestions}
                  onSuggestionClick={handleSuggestionClick}
                />
              )}
            </div>
          </div>
          {/* Right Icons */}
          <div className="flex items-center space-x-7">
            <Link href="/wishlist">
              <div className="relative cursor-pointer ">
                <i className="fas fa-heart text-[#4A5A2A] text-xl"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>
            <button
              onClick={() => setShowCart(true)}
              className="relative cursor-pointer"
            >
              <i className="fas fa-shopping-cart text-[#4A5A2A] text-xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <Link href="/profile">
              <div className="cursor-pointer ">
                <i className="fas fa-user text-[#4A5A2A] text-xl"></i>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#4A5A2A] cursor-pointer"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]">Home</Link>
            <Link href="/products" className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]">Products</Link>
            <Link href="/about" className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchSuggestions from './SearchSuggestions';
import { getAllProducts, categories, subcategories } from '../data/products';
import logo from '../assets/logo.jpg';

const Header = ({ cartCount, wishlistCount, setShowCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
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
      suggestions.push({ type: 'category', ...category });
    });

    matchingSubcategories.forEach(subcategory => {
      suggestions.push({ type: 'subcategory', ...subcategory });
    });

    matchingProducts.slice(0, 5).forEach(product => {
      suggestions.push({ type: 'product', ...product });
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
      navigate(`/category/${suggestion.name}`);
    } else if (suggestion.type === 'subcategory') {
      navigate(`/category/${suggestion.categoryName}?sub=${suggestion.name}`);
    } else if (suggestion.type === 'product') {
      navigate(`/product/${suggestion.id}`);
    }
    setSearchQuery('');
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Left Section: Logo & Desktop Nav */}
          <div className="flex items-center">
            <Link to="/" onClick={handleClick}>
              <img
                src={logo}
                alt="Logo"
                className={`h-[64px] w-[130px] mr-2 cursor-pointer transition-transform ${
                  animate ? 'animate-coinFlip' : ''
                }`}
              />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-lg mx-10">
            <Link to="/" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline">Home</Link>
            <Link to="/products" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline">Products</Link>
            <Link to="/about" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline">About</Link>
            <Link to="/contact" className="text-[#3D3F24] hover:text-[#4A5A2A] font-medium hover:underline">Contact</Link>
          </div>
          </div>
          

          {/* Search Bar */}
         <div
                className="w-full max-w-[600px] flex flex-col md:flex-row items-center flex-1 mx-2  md:mx-8"
                ref={searchRef}
              >
                <div className="relative w-full">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Search products, categories..."
                      value={searchQuery}
                      onChange={handleSearchInput}
                      onFocus={() => searchQuery.trim() && setShowSuggestions(true)}
                      className="w-full pl-10 pr-4 py-2 border border-[#A6A37E] rounded-full focus:outline-none focus:ring-2 focus:ring-[#4A5A2A] text-sm hover:border-[#4A5A2A] hover:bg-[#f5f5f0] transition placeholder:text-xs sm:placeholder:text-sm"
                    />
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A6A37E] text-xs sm:text-sm"></i>
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
          <div className="flex items-center space-x-7  ">
            <Link to="/wishlist">
              <div className="relative cursor-pointer hidden md:flex max-w-md">
                <i className="fas fa-heart text-[#4A5A2A] text-xl hover:scale-125 transition-transform"></i>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            <button onClick={() => setShowCart(true)} className="relative cursor-pointer hidden md:flex max-w-md">
              <i className="fas fa-shopping-cart text-[#4A5A2A] text-xl hover:scale-125 transition-transform"></i>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <Link to="/profile">
              <div className="cursor-pointer">
                <i className="fas fa-user text-[#4A5A2A] text-xl hover:scale-125 transition-transform"></i>
              </div>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#4A5A2A] cursor-pointer"
            >
              <i className="fas fa-bars text-xl w-10"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products 
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/wishlist"
              className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Wishlist
            </Link>
             <button onClick={() =>{ 
             setShowCart(true)
             setMobileMenuOpen(false)
             }}
             className="block px-3 py-2 text-[#3D3F24] hover:text-[#4A5A2A]">
              MyCart
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

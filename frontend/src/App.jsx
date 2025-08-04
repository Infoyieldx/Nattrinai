import { Routes, Route, Router, useLocation } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Category from "./pages/Category";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth.jsx";
import ForgotPassword from "./pages/Forgotpassword.jsx";
import AdminDashboard from "./admin/AdminDashboard.jsx";
import LogoLoader from "./components/LogoLoader";
import ScrollToTop from "./components/ScrollTop.jsx";
// import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom";

function MainRouter() {
  const location = useLocation();
  const path = location.pathname;
  const isAdminRoute = path.startsWith("/admin");

  const [loading, setLoading] = useState(true);

   useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      // If page already loaded (fast connection)
      setLoading(false);
    } else {
      // Wait for full load (images, fonts, etc.)
      window.addEventListener("load", handleLoad);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  // Shared state and handlers
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount((prev) => prev + 1);
  };

  const handleRemoveFromCart = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    if (item) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
      setCartCount((prev) => prev - item.quantity);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    const oldItem = cartItems.find((item) => item.id === productId);
    if (oldItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
      setCartCount((prev) => prev + (newQuantity - oldItem.quantity));
    }
  };

  const handleWishlistToggle = (product) => {
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (existingItem) {
      setWishlistItems(wishlistItems.filter((item) => item.id !== product.id));
      setWishlistCount((prev) => prev - 1);
    } else {
      setWishlistItems([...wishlistItems, product]);
      setWishlistCount((prev) => prev + 1);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => setCheckoutStep(1);
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setCartItems([]);
    setCartCount(0);
    setCheckoutStep(4);
  };

  const sharedProps = {
    cartItems,
    wishlistItems,
    cartCount,
    wishlistCount,
    showCart,
    selectedProduct,
    checkoutStep,
    orderPlaced,
    userInfo,
    setCartItems,
    setWishlistItems,
    setCartCount,
    setWishlistCount,
    setShowCart,
    setSelectedProduct,
    setCheckoutStep,
    setOrderPlaced,
    setUserInfo,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
    handleWishlistToggle,
    getCartTotal,
    handleCheckout,
    handlePlaceOrder,
  };

  return loading ? (
    <LogoLoader />
  ) : (
    <div className="min-h-screen bg-[#EEECE5]">
      {!isAdminRoute && <Header {...sharedProps} />}
      
        <ScrollToTop />
       <Routes>
        <Route path="/" element={<Home {...sharedProps} />} />
        <Route path="/products" element={<Products {...sharedProps} />} />
        <Route path="/category/:categoryName" element={<Category {...sharedProps} />} />
        <Route path="/product/:productId" element={<ProductDetail {...sharedProps} />} />
        <Route path="/checkout" element={<Checkout {...sharedProps} />} />
        <Route path="/wishlist" element={<Wishlist {...sharedProps} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
     
  
      {!isAdminRoute && <Footer />}
      <ShoppingCart {...sharedProps} />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <MainRouter /> {/* ✅ Just use your router logic here */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
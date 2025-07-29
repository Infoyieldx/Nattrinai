import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

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

function Router() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setCartCount(prev => prev + 1);
  };

  const handleRemoveFromCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      setCartItems(cartItems.filter(item => item.id !== productId));
      setCartCount(prev => prev - item.quantity);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    const oldItem = cartItems.find(item => item.id === productId);
    if (oldItem) {
      setCartItems(cartItems.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      ));
      setCartCount(prev => prev + (newQuantity - oldItem.quantity));
    }
  };

  const handleWishlistToggle = (product) => {
    const existingItem = wishlistItems.find(item => item.id === product.id);
    if (existingItem) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
      setWishlistCount(prev => prev - 1);
    } else {
      setWishlistItems([...wishlistItems, product]);
      setWishlistCount(prev => prev + 1);
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    setCheckoutStep(1);
  };

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
    handlePlaceOrder
  };

  return (
    <div className="min-h-screen bg-[#EEECE5]">
      <Header {...sharedProps} />
      <Switch>
        <Route path="/" component={() => <Home {...sharedProps} />} />
        <Route path="/products" component={() => <Products {...sharedProps} />} />
        <Route path="/category/:categoryName" component={(params) => <Category {...sharedProps} {...params} />} />
        <Route path="/product/:productId" component={(params) => <ProductDetail {...sharedProps} {...params} />} />
        <Route path="/checkout"><Checkout {...sharedProps} /></Route>

        <Route path="/wishlist" component={() => <Wishlist {...sharedProps} />} />
        <Route path="/about" component={() => <About />} />
        <Route path="/contact" component={() => <Contact />} />
        <Route path="/profile" component={() => <Profile />} />
      </Switch>
      <Footer />
      <ShoppingCart {...sharedProps} />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

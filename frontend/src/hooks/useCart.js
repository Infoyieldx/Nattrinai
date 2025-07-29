import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
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

  const removeFromCart = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      setCartItems(cartItems.filter(item => item.id !== productId));
      setCartCount(prev => prev - item.quantity);
    }
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
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

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    clearCart
  };
};

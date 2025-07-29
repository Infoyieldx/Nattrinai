import { useState } from 'react';

export const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistCount, setWishlistCount] = useState(0);

  const toggleWishlist = (product) => {
    const existingItem = wishlistItems.find(item => item.id === product.id);
    if (existingItem) {
      setWishlistItems(wishlistItems.filter(item => item.id !== product.id));
      setWishlistCount(prev => prev - 1);
    } else {
      setWishlistItems([...wishlistItems, product]);
      setWishlistCount(prev => prev + 1);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
    setWishlistCount(prev => prev - 1);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    wishlistCount,
    toggleWishlist,
    removeFromWishlist,
    isInWishlist
  };
};

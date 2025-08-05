import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { getRelatedProducts, getProductById } from '../data/products';

const RelatedProducts = ({ 
  productId, 
  handleAddToCart, 
  handleWishlistToggle, 
  wishlistItems,
  title = "You May Also Like",
  limit = 4,
  className = ""
}) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    
    const product = getProductById(productId);
    setCurrentProduct(product);
    
    if (product) {
      const related = getRelatedProducts(productId).slice(0, limit);
      setRelatedProducts(related);
    }
    
    setIsLoading(false);
  }, [productId, limit]);

  if (isLoading) {
    return (
      <div className={`${className} py-8`}>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: limit }).map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-64 rounded-lg"></div>
              <div className="mt-2 bg-gray-200 h-4 rounded w-3/4"></div>
              <div className="mt-1 bg-gray-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!relatedProducts.length || !currentProduct) return null;

  return (
    <div className={`${className} py-8`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onWishlistToggle={handleWishlistToggle}
            isInWishlist={wishlistItems.some(item => item.id === product.id)}
            showDiscountBadge={true}
          />
        ))}
      </div>
    </div>
  );
};

RelatedProducts.propTypes = {
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  handleWishlistToggle: PropTypes.func.isRequired,
  wishlistItems: PropTypes.array.isRequired,
  title: PropTypes.string,
  limit: PropTypes.number,
  className: PropTypes.string
};

export default RelatedProducts;
import { useNavigate } from "react-router-dom";
import ProductCard from './ProductCard';
import { dryFruitsCombos, getProductCategory } from "../data/products";

const groupProductsByCategory = (products) => {
  const grouped = {};
  
  products.forEach(product => {
    const category = getProductCategory(product.id);
    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(product);
  });

  return grouped;
};

  
const DryFruitsCombos = ({ handleAddToCart, handleWishlistToggle, wishlistItems, setShowCart }) => {
  const groupedProducts = groupProductsByCategory(dryFruitsCombos);
  return (
     <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3D3F24] mb-2">Dry fruits combos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Discover dry fruit combos
          </p>
        </div>

        {Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl font-semibold text-[#3D3F24] mb-4 ml-4">{category}</h3>
            <div className="relative">
              <div className="overflow-x-auto pb-6 -mx-4 px-4">
                <div 
                  className="flex space-x-6"
                  style={{
                    minWidth: `${products.length * 272}px`,
                    scrollSnapType: 'x mandatory'
                  }}
                >
                  {products.map((product) => (
                    <div 
                      key={product.id} 
                      className="flex-shrink-0 w-64"
                      style={{ scrollSnapAlign: 'start' }}
                    >
                      <ProductCard
                        product={product}
                        onAddToCart={handleAddToCart}
                        onWishlistToggle={handleWishlistToggle}
                        isInWishlist={wishlistItems.some(item => item.id === product.id)}
                        showBuyNow={true}
                        setShowCart={setShowCart}
                        showDiscountBadge={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DryFruitsCombos;

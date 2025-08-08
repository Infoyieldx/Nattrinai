import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DryFruitsCombos from '../components/DryFruitsCombos';
import TrendingProducts from '../components/TrendingProducts';
import SpecialOffers from '../components/SpecialOffers';

const Home = ({ handleAddToCart, handleWishlistToggle, wishlistItems,setShowCart }) => {
  return (
    <>
      <Hero />
      <Categories />
      <DryFruitsCombos
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
        setShowCart={setShowCart}
      />
      <TrendingProducts
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
        setShowCart={setShowCart}

      />
      <SpecialOffers
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
        setShowCart={setShowCart}
      />
    </>
  );
};

export default Home;

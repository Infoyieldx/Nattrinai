import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DryFruitsCombos from '../components/DryFruitsCombos';
import TrendingProducts from '../components/TrendingProducts';
import SpecialOffers from '../components/SpecialOffers';

const Home = ({ handleAddToCart, handleWishlistToggle, wishlistItems }) => {
  return (
    <>
      <Hero />
      <Categories />
      <DryFruitsCombos
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
      />
      <TrendingProducts
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
      />
      <SpecialOffers
        handleAddToCart={handleAddToCart}
        handleWishlistToggle={handleWishlistToggle}
        wishlistItems={wishlistItems}
      />
    </>
  );
};

export default Home;

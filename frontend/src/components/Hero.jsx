import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-96 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=organic%20farm%20landscape%20with%20fresh%20vegetables%20in%20basket%20rural%20countryside%20setting%20natural%20lighting%20green%20fields%20healthy%20agriculture%20concept&width=1440&height=400&seq=hero001&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nattrinai organic products</h1>
          <p className="text-xl mb-6">Fresh • Organic • Healthy</p>
          <p className="text-lg mb-8">
            Discover the finest organic products from farm to your table. Pure, natural, and sustainably sourced.
          </p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#4A5A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D3F24]  whitespace-nowrap cursor-pointer hover:scale-105 transition-transform"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

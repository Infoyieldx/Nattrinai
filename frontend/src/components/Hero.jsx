// import { useNavigate } from 'react-router-dom';

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section
//       className="relative h-96 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://readdy.ai/api/search-image?query=organic%20farm%20landscape%20with%20fresh%20vegetables%20in%20basket%20rural%20countryside%20setting%20natural%20lighting%20green%20fields%20healthy%20agriculture%20concept&width=1440&height=400&seq=hero001&orientation=landscape')`
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
//         <div className="text-white max-w-lg">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Nattrinai organic products</h1>
//           <p className="text-xl mb-6">Fresh • Organic • Healthy</p>
//           <p className="text-lg mb-8">
//             Discover the finest organic products from farm to your table. Pure, natural, and sustainably sourced.
//           </p>
//           <button
//             onClick={() => navigate('/products')}
//             className="bg-[#4A5A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D3F24]  whitespace-nowrap cursor-pointer hover:scale-105 transition-transform"
//           >
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from 'react';
import {
  Leaf,
  Star,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Truck,
  Shield,
} from 'lucide-react';
import store from '../assets/store.jpg';
import delivery from '../assets/delivery.jpg';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Welcome to Nattrinai',
      subtitle: 'Organic Products',
      description:
        "Discover the finest organic products from farm to your table. Pure, natural, and sustainably sourced for your family's health.",
      backgroundImage:
        'https://images.pexels.com/photos/1458694/pexels-photo-1458694.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      icon: <Leaf className="w-10 h-10 sm:w-12 sm:h-12" />,
      buttonText: 'Explore Products',
    },
    {
      id: 2,
      title: '100% Organic',
      subtitle: 'Certified & Pure',
      description:
        'All our products are certified organic, free from harmful chemicals and pesticides. Grown with love and care for nature.',
      backgroundImage: store,
      icon: <Shield className="w-10 h-10 sm:w-12 sm:h-12" />,
      buttonText: 'View Certificates',
    },
    {
      id: 3,
      title: 'Pan India Delivery',
      subtitle: 'Fresh & Fast',
      description:
        'We deliver fresh organic products across India with our cold chain logistics. From Kashmir to Kanyakumari, we bring nature to your doorstep.',
      backgroundImage: delivery,
      icon: <Truck className="w-10 h-10 sm:w-12 sm:h-12" />,
      buttonText: 'Check Delivery',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-[650px] sm:h-[650px] lg:h-[550px] overflow-hidden">
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={slide.backgroundImage}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover brightness-[.25]"
            />

            {/* Floating Icons (hidden on small screens) */}
            <div className="absolute inset-0 overflow-hidden hidden sm:block">
              <div className="absolute top-20 left-10 text-white/20 animate-float">
                <Leaf className="w-14 h-14" />
              </div>
              <div className="absolute top-40 right-20 text-white/15 animate-float-delayed">
                <Leaf className="w-10 h-10" />
              </div>
              <div className="absolute bottom-32 left-1/4 text-white/10 animate-float-slow">
                <Leaf className="w-16 h-16" />
              </div>
              <div className="absolute top-60 right-1/3 text-white/20 animate-bounce-slow">
                <Star className="w-12 h-12" />
              </div>
            </div>

            <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Text Content */}
                  <div
                    className={`text-white transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-soft mb-4">
                        {slide.icon}
                      </div>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-2 sm:mb-4">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-green-200 mb-4">
                      {slide.subtitle}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>

                    <button className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2">
                      <span>{slide.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Right Feature Cards */}
                  <div
                    className={`transition-all duration-1000 delay-500 ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="grid gap-4 sm:gap-6">
                      {/* Card 1 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-green-200" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white">Certified Organic</h3>
                            <p className="text-sm text-white/80">100% Natural & Pure</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Truck className="w-6 h-6 text-blue-200" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white">Fast Delivery</h3>
                            <p className="text-sm text-white/80">Fresh to your doorstep</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-yellow-200" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg font-semibold text-white">Premium Quality</h3>
                            <p className="text-sm text-white/80">Handpicked with care</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 top-[85%] sm:top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 top-[85%] sm:top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
              setTimeout(() => setIsAutoPlaying(true), 10000);
            }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'progress 5s linear infinite' : 'none',
          }}
        />
      </div>
    </section>
  );
}

export default Hero;

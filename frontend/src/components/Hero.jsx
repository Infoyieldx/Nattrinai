import React, { useState, useEffect } from 'react';
import {
  Leaf,
  Star,
  ArrowRight,
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

  return (
    <section className="relative h-[500px] sm:h-[500px] lg:h-[550px] overflow-hidden">
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

            {/* Floating Icons */}
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
                <div className="flex flex-row h-[400px] w-full ">
                  {/* Left Text Content */}
                  <div
                    className={`text-white transition-all duration-1000 delay-300 ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : '-translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="mb-6">
                      <div className="w-16 h-16 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-soft mb-2">
                        {slide.icon}
                      </div>
                    </div>

                    <h1 className="text-3xl sm:text-3xl lg:text-6xl lg:mt-4 font-bold leading-tight mb-2 sm:mb-2">
                      {slide.title}
                    </h1>
                    <h2 className="text-xl sm:text-xl lg:text-4xl lg:mt-4 font-semibold text-green-200 mb-2 sm:mc-2">
                      {slide.subtitle}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-2xl lg:mt-4 text-white/90 mb-6 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>

                  {/* Right Feature Cards */}
                  <div
                    className={`transition-all duration-1000 delay-500 flex justify-center lg:block ${
                      index === currentSlide
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-10 opacity-0'
                    }`}
                  >
                    <div className="flex flex-col  ">
                      {/* Card 1 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:my-1 mt-2 sm:p-4  lg:p-6 lg:w-[500px] lg:mt-4 lg:mx-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                            <Shield className="w-6 h-6 text-green-200" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-white">
                              Certified Organic
                            </h3>
                            <p className="text-sm lg:text-xl  text-white/80">100% Natural & Pure</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:my-1 mt-2 sm:p-4  lg:p-6 lg:w-[500px] lg:mt-4 lg:mx-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                            <Truck className="w-6 h-6 text-blue-200" />
                          </div>
                          <div>
                            <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-white">
                              Fast Delivery
                            </h3>
                            <p className="text-sm lg:text-xl  text-white/80">Fresh to your doorstep</p>
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mt-2 sm:my-1 sm:p-4  lg:p-6 lg:w-[500px] lg:mt-4 lg:mx-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                            <Star className="w-6 h-6 text-yellow-200" />
                          </div>
                          <div>
                            <h3 className="text-base lg:text-2xl sm:text-lg font-semibold text-white">
                              Premium Quality
                            </h3>
                            <p className="text-sm lg:text-xl  text-white/80">Handpicked with care</p>
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

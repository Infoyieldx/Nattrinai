import React from 'react';
import { ShoppingBag, Home, Search, ArrowRight } from 'lucide-react';

const Error404 = () => {
  const handleHomeRedirect = () => {
    // Replace with your actual home route
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-slate-200 select-none animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce">
              <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-indigo-600" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            The product you're looking for seems to have wandered off...
          </p>
          <p className="text-slate-500">
            Don't worry, our best items are still waiting for you at home!
          </p>
        </div>

        {/* Animated Shopping Items */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="animate-float-1 bg-white p-3 rounded-full shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"></div>
          </div>
          <div className="animate-float-2 bg-white p-3 rounded-full shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
          </div>
          <div className="animate-float-3 bg-white p-3 rounded-full shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleHomeRedirect}
            className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
        
        </div>

       
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }

        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(7deg); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 3s ease-in-out infinite 0.5s;
        }

        .animate-float-3 {
          animation: float-3 3s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default Error404;
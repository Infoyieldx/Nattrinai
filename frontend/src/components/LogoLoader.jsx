import React from 'react';
import logo from '../assets/logo.png'; // Change to your logo path

const LogoLoader = () => {
  return (
       <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Spinner Ring with Cut Effect */}
        <div className="absolute w-full h-full rounded-full border-4 border-t-green-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" style={{ animationDuration: '1s' }}></div>

        {/* Fixed Logo */}
        <div className="absolute w-16 h-16 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-md">
          <img src={logo} alt="Loading..." className="w-10 h-10" />
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;

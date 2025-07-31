import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4A5A2A] text-white pt-8 pb-4">
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand/About */}
          <div>
            <div className="text-2xl font-bold mb-4 flex items-center">
              <i className="fas fa-leaf mr-2"></i>
              Nattrinai organic products
            </div>
            <p className="text-white-300 mb-4">
              Your trusted source for fresh, organic, and healthy products. From farm to table, we ensure quality and sustainability.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white-300 hover:text-white hover:underline hover:bg-[#4A5A2A] transition rounded px-2 py-1 cursor-pointer">Home</Link></li>
              <li><Link href="/products" className="text-white-300 hover:text-white hover:underline hover:bg-[#4A5A2A] transition rounded px-2 py-1 cursor-pointer">Products</Link></li>
              <li><Link href="/about" className="text-white-300 hover:text-white hover:underline hover:bg-[#4A5A2A] transition rounded px-2 py-1 cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="text-white-300 hover:text-white hover:underline hover:bg-[#4A5A2A] transition rounded px-2 py-1 cursor-pointer">Contact</Link></li>
            </ul>
          </div>
          {/* Pages (add links as needed) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              {/* Add page links here if needed */}
            </ul>
          </div>
          {/* Reach Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
            <div className="max-w-screen-md mx-auto">
              <p className="text-white-700 mb-1">
                Need help fast? Fill out our <a href="/contact" className="text-white-800 underline hover:text-black">form</a> or email
              </p>
              <p className="text-white-800 mb-4 break-all">customercare.iyarkaimart@gmail.com</p>
              <div className="flex space-x-4">
                <i className="fab fa-facebook text-xl cursor-pointer hover:text-[#A6A37E]"></i>
                <i className="fab fa-instagram text-xl cursor-pointer hover:text-[#A6A37E]"></i>
                <i className="fab fa-twitter text-xl cursor-pointer hover:text-[#A6A37E]"></i>
                <i className="fab fa-youtube text-xl cursor-pointer hover:text-[#A6A37E]"></i>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white-400 text-sm text-center md:text-left">
              &copy; 2024 A-Z Organic Store. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm items-center">
              <a href="#" className="text-white-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-white-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-white-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

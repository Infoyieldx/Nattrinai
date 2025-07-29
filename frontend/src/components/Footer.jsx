import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#3D3F24] text-white py-12">
      <div className=" w-full mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              <i className="fas fa-leaf mr-2"></i>
             Nattrinai organic products
             
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted source for fresh, organic, and healthy products. From farm to table, we ensure quality and sustainability.
            </p>
            <div className="flex space-x-4">
              <i className="fab fa-facebook text-xl cursor-pointer hover:text-[#A6A37E]"></i>
              <i className="fab fa-instagram text-xl cursor-pointer hover:text-[#A6A37E]"></i>
              <i className="fab fa-twitter text-xl cursor-pointer hover:text-[#A6A37E]"></i>
              <i className="fab fa-youtube text-xl cursor-pointer hover:text-[#A6A37E]"></i>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white cursor-pointer">Home</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white cursor-pointer">Products</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Contact</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/Beauty" className="text-gray-300 hover:text-white cursor-pointer">Beauty</Link></li>
              <li><Link href="/category/Grocery" className="text-gray-300 hover:text-white cursor-pointer">Grocery</Link></li>
              <li><Link href="/category/Food" className="text-gray-300 hover:text-white cursor-pointer">Food</Link></li>
              <li><Link href="/category/Rice" className="text-gray-300 hover:text-white cursor-pointer">Rice</Link></li>
              <li><Link href="/category/Oil" className="text-gray-300 hover:text-white cursor-pointer">Oil</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-300 hover:text-white cursor-pointer">Help Center</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Shipping Info</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Returns</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">Track Order</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white cursor-pointer">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2024 A-Z Organic Store. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

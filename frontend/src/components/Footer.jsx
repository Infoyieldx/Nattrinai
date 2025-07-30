import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#4A5A2A] text-white ">
      <div className="border-t border-white-600 pb-6"></div>
<div className=" w-full mx-auto sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    
    <div>
      <div className="text-2xl font-bold mb-4">
        <i className="fas fa-leaf mr-2"></i>
       Nattrinai organic products
      </div>
      <p className="text-white-300 mb-4">
        Your trusted source for fresh, organic, and healthy products. From farm to table, we ensure quality and sustainability.
      </p>
      
    </div>
    <div className="mx-[100px]">
      <h3 className="text-lg font-semibold mb-4 ">Quick Links</h3>
      <ul className="space-y-2">
        <li><Link href="/" className="text-white-300 hover:text-white cursor-pointer">Home</Link></li>
        <li><Link href="/products" className="text-white-300 hover:text-white cursor-pointer">Products</Link></li>
        <li><Link href="/about" className="text-white-300 hover:text-white cursor-pointer">About Us</Link></li>
        <li><Link href="/contact" className="text-white-300 hover:text-white cursor-pointer">Contact</Link></li>
      </ul>
    </div>
    <div className="mx-[100px]">
      <h3 className="text-lg font-semibold mb-4">Pages</h3>
      <ul className="space-y-2">
        
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4">Reach Us</h3>
      <div className="max-w-screen-md mx-auto">
        
        <p className="text-white-700 mb-1">
          Need help fast? Fill out our <a href="/contact" className="text-white-800 underline hover:text-black">form</a> or email
        </p>
        <p className="text-white-800 mb-4">customercare.iyarkaimart@gmail.com</p>
      <div className="flex space-x-4">
        <i className="fab fa-facebook text-xl cursor-pointer hover:text-[#A6A37E]"></i>
        <i className="fab fa-instagram text-xl cursor-pointer hover:text-[#A6A37E]"></i>
        <i className="fab fa-twitter text-xl cursor-pointer hover:text-[#A6A37E]"></i>
        <i className="fab fa-youtube text-xl cursor-pointer hover:text-[#A6A37E]"></i>
      </div>
      </div>
      </div>
  </div>
  <div className="mt-8 pt-8">
    <div className="flex flex-col  md:flex-row justify-between items-center">
      <p className="text-white-400 text-sm mb-4 md:mb-0">
        &copy; 2024 A-Z Organic Store. All rights reserved.
      </p>
      <div className="flex space-x-6 text-sm">
        <a href="#" className="text-white-400 hover:text-white">Privacy Policy</a>
        <a href="#" className="text-white-400 hover:text-white">Terms of Service</a>
        <a href="#" className="text-white-400 hover:text-white">Cookies</a>
      </div>
    </div>
  </div>
  </div>

</footer>
  );
}
 
export default Footer;

const Contact = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have questions about our organic products or need assistance? We're here to help!
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold text-[#3D3F24] mb-8">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#4A5A2A] rounded-full p-3">
                <i className="fas fa-map-marker-alt text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Visit Our Store</h3>
                <p className="text-gray-600">
                  123 Organic Street<br />
                  Green Valley, Mumbai 400001<br />
                  Maharashtra, India
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#4A5A2A] rounded-full p-3">
                <i className="fas fa-phone text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Call Us</h3>
                <p className="text-gray-600">
                  +91 98765 43210<br />
                  Mon-Sat: 9:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#4A5A2A] rounded-full p-3">
                <i className="fas fa-envelope text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Email Us</h3>
                <p className="text-gray-600">
                  info@azorganicstore.com<br />
                  support@azorganicstore.com
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#4A5A2A] rounded-full p-3">
                <i className="fas fa-clock text-white text-xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Delivery Hours</h3>
                <p className="text-gray-600">
                  Mon-Sat: 8:00 AM - 10:00 PM<br />
                  Sunday: 9:00 AM - 9:00 PM<br />
                  Same-day delivery available
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                placeholder="How can we help you?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                placeholder="Tell us about your inquiry or feedback..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#4A5A2A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-[#3D3F24] text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-3">Do you offer organic certification?</h3>
            <p className="text-gray-600">Yes, all our products are certified organic by recognized certification bodies. We provide certification details for each product.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-3">What are your delivery charges?</h3>
            <p className="text-gray-600">We offer free delivery for orders above ₹500. For orders below ₹500, a nominal delivery charge of ₹50 applies.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-3">Can I return products if not satisfied?</h3>
            <p className="text-gray-600">We offer a 7-day return policy for non-perishable items. Fresh produce returns are accepted within 24 hours if there's a quality issue.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-[#3D3F24] mb-3">Do you have bulk order discounts?</h3>
            <p className="text-gray-600">Yes, we offer attractive discounts for bulk orders. Contact us directly for custom pricing on large quantities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
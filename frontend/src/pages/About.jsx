const About = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#3D3F24] mb-6">About A-Z Organic Store</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are passionate about bringing you the finest organic products from farm to table.
          Our commitment to quality, sustainability, and your health drives everything we do.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://readdy.ai/api/search-image?query=organic%20farm%20workers%20harvesting%20fresh%20vegetables%20in%20green%20fields%20natural%20lighting%20sustainable%20agriculture%20concept&width=600&height=400&seq=about001&orientation=landscape"
            alt="Our Farm"
            className="w-full h-96 object-cover object-top rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#3D3F24] mb-6">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded in 2020, A-Z Organic Store began as a small family business with a simple mission:
            to provide access to pure, organic, and sustainably grown products for health-conscious consumers.
          </p>
          <p className="text-gray-600 mb-6">
            We work directly with certified organic farmers and producers across the country,
            ensuring that every product meets our strict quality standards and supports sustainable farming practices.
          </p>
          <p className="text-gray-600">
            Today, we serve thousands of happy customers who trust us for their organic needs,
            from fresh produce to pantry staples and natural beauty products.
          </p>
        </div>
      </div>
      
      <div className="bg-[#4A5A2A] text-white rounded-lg p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <i className="fas fa-leaf text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">100% Organic</h3>
            <p>All our products are certified organic, free from harmful chemicals and pesticides.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-heart text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Health First</h3>
            <p>We prioritize your health and well-being with nutritious, natural products.</p>
          </div>
          <div className="text-center">
            <i className="fas fa-globe text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-3">Sustainable</h3>
            <p>We support sustainable farming practices that protect our planet for future generations.</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-users text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-[#3D3F24] mb-2">10,000+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-box text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-[#3D3F24] mb-2">500+</h3>
          <p className="text-gray-600">Organic Products</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-shipping-fast text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-[#3D3F24] mb-2">50+</h3>
          <p className="text-gray-600">Cities Served</p>
        </div>
        <div className="text-center">
          <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-award text-green-600 text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-[#3D3F24] mb-2">5</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
      </div>
      
      <div className="bg-[#EEECE5] rounded-lg p-12">
        <h2 className="text-3xl font-bold text-[#3D3F24] text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20organic%20farm%20owner%20smiling%20friendly%20natural%20lighting%20business%20headshot&width=200&height=200&seq=team001&orientation=squarish"
                alt="Team Member"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3D3F24] mb-2">Sarah Johnson</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20organic%20food%20quality%20manager%20smiling%20friendly%20natural%20lighting%20business%20headshot&width=200&height=200&seq=team002&orientation=squarish"
                alt="Team Member"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3D3F24] mb-2">Michael Chen</h3>
            <p className="text-gray-600">Quality Manager</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20organic%20products%20customer%20service%20manager%20smiling%20friendly%20natural%20lighting%20business%20headshot&width=200&height=200&seq=team003&orientation=squarish"
                alt="Team Member"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#3D3F24] mb-2">Emma Davis</h3>
            <p className="text-gray-600">Customer Success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
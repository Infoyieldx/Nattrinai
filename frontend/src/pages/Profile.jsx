const Profile = () => {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Profile Header */}
        <div className="bg-[#4A5A2A] text-white p-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-4xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to Your Profile</h1>
              <p className="text-green-100">Manage your account and preferences</p>
            </div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Account Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Address Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Street Address</label>
                  <textarea
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    placeholder="Enter your complete address"
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                      placeholder="State"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Actions */}
          <div className="mt-8 flex space-x-4">
            <button className="bg-[#4A5A2A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors">
              Update Profile
            </button>
            <button className="border border-[#4A5A2A] text-[#4A5A2A] px-6 py-3 rounded-lg font-semibold hover:bg-[#4A5A2A] hover:text-white transition-colors">
              Change Password
            </button>
          </div>

          {/* Quick Actions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#EEECE5] rounded-lg p-6 text-center">
                <i className="fas fa-shopping-bag text-[#4A5A2A] text-3xl mb-4"></i>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Order History</h3>
                <p className="text-gray-600 text-sm mb-4">View your past orders and track deliveries</p>
                <button className="text-[#4A5A2A] font-medium hover:underline">View Orders</button>
              </div>
              <div className="bg-[#EEECE5] rounded-lg p-6 text-center">
                <i className="fas fa-heart text-[#4A5A2A] text-3xl mb-4"></i>
                <h3 className="font-semibold text-[#3D3F24] mb-2">My Wishlist</h3>
                <p className="text-gray-600 text-sm mb-4">Manage your saved favorite products</p>
                <button className="text-[#4A5A2A] font-medium hover:underline">View Wishlist</button>
              </div>
              <div className="bg-[#EEECE5] rounded-lg p-6 text-center">
                <i className="fas fa-cog text-[#4A5A2A] text-3xl mb-4"></i>
                <h3 className="font-semibold text-[#3D3F24] mb-2">Preferences</h3>
                <p className="text-gray-600 text-sm mb-4">Update your shopping preferences</p>
                <button className="text-[#4A5A2A] font-medium hover:underline">Manage Settings</button>
              </div>
            </div>
          </div>

          {/* Account Statistics */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Account Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-[#4A5A2A] mb-1">12</div>
                <div className="text-sm text-gray-600">Total Orders</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-[#4A5A2A] mb-1">₹8,450</div>
                <div className="text-sm text-gray-600">Total Spent</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-[#4A5A2A] mb-1">₹350</div>
                <div className="text-sm text-gray-600">Total Saved</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-[#4A5A2A] mb-1">8</div>
                <div className="text-sm text-gray-600">Wishlist Items</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
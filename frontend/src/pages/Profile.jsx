import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);

    navigate("/");
  };

  return (
    <div className="py-6 max-w-4xl mx-auto px-4">
      {user ? (
        <>
          {/* User Info */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden p-6 flex items-center space-x-6">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-3xl text-[#4A5A2A]"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">Welcome, {user.name || "User"}</h1>
              <p className="text-gray-600">{user.email || user.mobile}</p>
              <button
                onClick={handleLogout}
                className="mt-3 px-4 py-2 bg-[#4A5A2A] text-white rounded text-sm"
=======
    navigate("/login");
  };

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {user ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#4A5A2A] text-white p-8 flex items-center space-x-6">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <i className="fas fa-user text-4xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome, {user.name || "User"}</h1>
              <p className="text-green-100">{user.email}</p>
              <button
                onClick={handleLogout}
                className="mt-4 px-4 py-2 bg-white text-[#4A5A2A] font-semibold rounded"

              >
                Logout
              </button>
            </div>
          </div>


          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Link to="/orders" className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg">
              <i className="fas fa-box text-2xl mb-2 text-[#4A5A2A]"></i>
              <span>Your Orders</span>
            </Link>
            <Link to="/wishlist" className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg">
              <i className="fas fa-heart text-2xl mb-2 text-[#4A5A2A]"></i>
              <span>Your Wishlist</span>
            </Link>
            <Link to="/recently-viewed" className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg">
              <i className="fas fa-clock text-2xl mb-2 text-[#4A5A2A]"></i>
              <span>Recently Viewed</span>
            </Link>
            <Link to="/address" className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center hover:shadow-lg">
              <i className="fas fa-map-marker-alt text-2xl mb-2 text-[#4A5A2A]"></i>
              <span>Manage Address</span>
            </Link>
          </div>

          {/* Add Address Prompt */}
          {!user.address && (
            <div className="mt-6 bg-yellow-100 p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">No Address Added</p>
                <p className="text-xs text-gray-600">Please add an address for deliveries.</p>
              </div>
              <Link to="/add-address" className="bg-[#4A5A2A] text-white px-4 py-2 rounded text-sm">
                Add Address
              </Link>
            </div>
          )}
        </>

        </div>

      ) : (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold mb-4">You are not logged in</h2>
          <p className="mb-6">Please log in or sign up to view your profile</p>
          <Link
            to="/auth"
            className="inline-block bg-[#4A5A2A] text-white px-6 py-2 rounded mr-4"
          >
            Login / Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Profile;

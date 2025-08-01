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

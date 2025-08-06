import React, { useState, useEffect } from "react";

const AccountSettings = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: ""
  });

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser({
        name: storedUser.name || "",
        email: storedUser.email || "",
        mobile: storedUser.mobile || ""
      });
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    storedUser.name = user.name;
    storedUser.email = user.email;
    storedUser.mobile = user.mobile;
    localStorage.setItem("user", JSON.stringify(storedUser));
    alert("Profile updated successfully!");
  };

  const handlePasswordReset = () => {
    alert("Password reset link sent to your email (Mock)!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Account Settings</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handlePasswordReset}
          className="w-full bg-yellow-400 text-black py-2 rounded text-sm"
        >
          Reset Password
        </button>

        <button
          onClick={handleSave}
          className="w-full bg-[#4A5A2A] text-white py-2 rounded text-sm"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountSettings;

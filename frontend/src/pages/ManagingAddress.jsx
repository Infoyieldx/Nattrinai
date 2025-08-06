import React, { useState, useEffect } from "react";

const ManagingAddress = () => {
  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: ""
  });

  useEffect(() => {
    // Fetch existing address from localStorage (Mock)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.address) {
      setAddress(storedUser.address);
    }
  }, []);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const storedUser = JSON.parse(localStorage.getItem("user")) || {};
    storedUser.address = address;
    localStorage.setItem("user", JSON.stringify(storedUser));
    alert("Address saved successfully!");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Manage Address</h2>

      <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Mobile Number</label>
          <input
            type="text"
            name="mobile"
            value={address.mobile}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Address Line</label>
          <input
            type="text"
            name="addressLine"
            value={address.addressLine}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Pincode</label>
          <input
            type="text"
            name="pincode"
            value={address.pincode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-[#4A5A2A] text-white py-2 rounded text-sm"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ManagingAddress;

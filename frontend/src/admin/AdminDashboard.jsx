import React, { useState } from "react";

const sections = [
  "Dashboard",
  "Products",
  "Categories",
  "Orders",
  "Users",
  "Inventory",
  "Reviews",
  "Content",
  "Reports",
  "Settings",
];

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const renderSectionContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <div className="space-y-4">
            <p className="text-gray-700">Welcome Admin! Here's an overview of your eCommerce stats.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Products", "Orders", "Users", "Revenue"].map((item) => (
                <div key={item} className="bg-gray-100 rounded p-4 text-center shadow">
                  <h2 className="text-xl font-semibold">{item}</h2>
                  <p className="text-2xl text-[#4A5A2A]">123</p>
                </div>
              ))}
            </div>
          </div>
        );

      case "Products":
        return (
          <div className="space-y-6">
            <form className="space-y-4">
              <input className="border p-2 w-full" placeholder="Product Name" />
              <textarea className="border p-2 w-full" placeholder="Product Description" />
              <input type="number" className="border p-2 w-full" placeholder="Price" />
              <input type="number" className="border p-2 w-full" placeholder="Stock" />
              <input type="file" className="w-full" />
              <button type="submit" className="bg-[#4A5A2A] text-white px-4 py-2 rounded">Add Product</button>
            </form>
          </div>
        );

      case "Categories":
        return (
          <form className="space-y-4">
            <input className="border p-2 w-full" placeholder="Category Name" />
            <input type="file" className="w-full" />
            <button type="submit" className="bg-[#4A5A2A] text-white px-4 py-2 rounded">Add Category</button>
          </form>
        );

      case "Orders":
        return (
          <div className="space-y-4">
            <p className="text-gray-600">Manage customer orders and update their statuses.</p>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Order ID</th>
                  <th className="p-2 border">Customer</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">#12345</td>
                  <td className="p-2 border">John Doe</td>
                  <td className="p-2 border">Processing</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Users":
        return (
          <div className="space-y-4">
            <p>All registered users are listed below:</p>
            <ul className="list-disc pl-5">
              <li>john@example.com</li>
              <li>alice@example.com</li>
            </ul>
          </div>
        );

      case "Inventory":
        return (
          <div className="space-y-4">
            <p>Track and manage your inventory.</p>
            <table className="w-full border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border">Product</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 border">Green Tea</td>
                  <td className="p-2 border">0</td>
                  <td className="p-2 border text-red-600">Out of Stock</td>
                </tr>
                <tr>
                  <td className="p-2 border">Organic Honey</td>
                  <td className="p-2 border">20</td>
                  <td className="p-2 border text-green-600">In Stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "Reviews":
        return (
          <div className="space-y-4">
            <p>Moderate reviews from customers.</p>
            <div className="border p-4 bg-gray-50 rounded">
              <p><strong>User:</strong> alice@example.com</p>
              <p><strong>Review:</strong> Great product!</p>
              <div className="space-x-2 mt-2">
                <button className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                <button className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </div>
            </div>
          </div>
        );

      case "Content":
        return (
          <div className="space-y-4">
            <h2 className="font-semibold">Edit Site Content</h2>
            <textarea className="border p-2 w-full" rows={5} placeholder="Home Banner Text" />
            <textarea className="border p-2 w-full" rows={5} placeholder="About Page Content" />
            <textarea className="border p-2 w-full" rows={5} placeholder="Contact Page Content" />
          </div>
        );

      case "Reports":
        return (
          <div className="space-y-4">
            <p>Sales and analytics reports.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 shadow">📈 Sales This Week: ₹12,000</div>
              <div className="bg-white p-4 shadow">👥 New Users: 32</div>
            </div>
          </div>
        );

      case "Settings":
        return (
          <div className="space-y-4">
            <h2 className="font-semibold">Admin Settings</h2>
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Enable Maintenance Mode</span>
            </label>
            
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#4A5A2A] text-white flex-shrink-0">
        <div className="p-6 text-2xl font-bold border-b border-[#A6A37E]">Admin Panel</div>
        <nav className="mt-6">
          {sections.map((section) => (
            <button
              key={section}
              className={`block w-full text-left px-6 py-3 hover:bg-[#3D3F24] transition ${
                activeSection === section ? "bg-[#3D3F24]" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">{activeSection}</h1>
        <div className="bg-white rounded-lg shadow p-6 min-h-[300px]">
          {renderSectionContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

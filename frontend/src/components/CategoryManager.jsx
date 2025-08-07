import React, { useEffect, useState } from "react";
import axios from "axios";

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // New category form state
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
  const [image, setImage] = useState(null); // 🆕 image state

  // Fetch categories
useEffect(() => {
  axios.get("http://localhost:5000/api/categories")
    .then((res) => setCategories(res.data ?? [])) // fallback to empty array
    .catch((err) => {
      console.error("Failed to fetch categories", err);
      setCategories([]); // fallback on error
    });
}, []);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", newCategory.name);
      formData.append("description", newCategory.description);
      formData.append("status", "active");
      if (image) formData.append("image", image);

      const res = await axios.post("http://localhost:5000/api/categories", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setCategories((prev) => [...prev, res.data]);
      setNewCategory({ name: "", description: "", color: "#10B981" });
      setImage(null);
      setModalOpen(false);
    } catch (err) {
      console.error("Error adding category:", err);
      alert("Failed to add category.");
    }
  };

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalCategories = categories.length;
  const activeCategories = categories.filter((c) => c.status === "active").length;
  const totalProducts = categories.reduce((sum, category) => sum + (category.productCount || 0), 0);

  return (
    <div className="space-y-6 p-4">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h3 className="text-2xl font-bold">Product Categories</h3>
          <p className="text-gray-500">Organize your products into categories for better management.</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Add Category
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Total Categories</div>
          <div className="text-2xl font-bold">{totalCategories}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Active Categories</div>
          <div className="text-2xl font-bold text-green-600">{activeCategories}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Total Products</div>
          <div className="text-2xl font-bold text-blue-600">{totalProducts}</div>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 max-w-md">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Products</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.map((category) => (
              <tr key={category.id} className="border-t">
                <td className="p-3 flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  ></span>
                  <span className="font-medium">{category.name}</span>
                </td>
                <td className="p-3 text-gray-500">{category.description}</td>
                <td className="p-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded">
                    {category.productCount ?? 0} products
                  </span>
                </td>
                <td className="p-3">
                  <span className={`text-sm px-2 py-1 rounded ${
                    category.status === "active"
                      ? "bg-green-100 text-green-800"
                      : "bg-gray-200 text-gray-700"
                  }`}>
                    {category.status}
                  </span>
                </td>
                <td className="p-3 text-right space-x-2">
                  <button className="text-blue-600 hover:underline text-sm">Edit</button>
                  <button className="text-red-600 hover:underline text-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Category</h2>
            <form onSubmit={handleAddCategory} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Category Name</label>
                <input
                  name="name"
                  value={newCategory.name}
                  onChange={handleInputChange}
                  type="text"
                  required
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={newCategory.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
             
              <div>
                <label className="block mb-1 text-sm font-medium">Category Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block"
                />
                {image && (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="Preview"
                    className="mt-2 h-20 object-contain rounded"
                  />
                )}
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded border border-gray-300"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryManager;

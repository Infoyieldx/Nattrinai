import React, { useState, useEffect } from "react";
import { Plus, Upload, Calendar, Percent } from "lucide-react";
import axios from "axios";

export default function PromoCodeManager() {
  const [promoCodesState, setPromoCodesState] = useState([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    code: "",
    discountValue: "",
    expiryDate: "",
  });

  useEffect(() => {
    fetchPromoCodes();
  }, []);

  const fetchPromoCodes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/promocode");
      setPromoCodesState(res.data);
    } catch (err) {
      console.error("Failed to fetch promo codes:", err);
    }
  };

  const getStatusColor = (isActive) => {
    return isActive
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        code: formData.code,
        discountPercentage: parseFloat(formData.discountValue),
        expiresAt: new Date(formData.expiryDate),
      };

      await axios.post("http://localhost:5000/api/promocode", payload);

      await fetchPromoCodes(); // Refresh promo list
      setFormData({ code: "", discountValue: "", expiryDate: "" });
      setOpen(false);
    } catch (error) {
      console.error("Error creating promo code:", error);
      alert("Failed to create promo code. See console for details.");
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">Promo Codes</h3>
          <p className="text-gray-500">Manage discount codes and promotions</p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setOpen(true)}
        >
          <Plus className="h-4 w-4" /> Create Promo Code
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            <h2 className="text-lg font-semibold mb-4">Create New Promo Code</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="code" className="block font-medium">Promo Code</label>
                <input
                  id="code"
                  value={formData.code}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="discountValue" className="block font-medium">
                  Discount Percentage (%)
                </label>
                <input
                  id="discountValue"
                  type="number"
                  value={formData.discountValue}
                  onChange={handleChange}
                  min="1"
                  max="100"
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="expiryDate" className="block font-medium">Expiry Date</label>
                <input
                  id="expiryDate"
                  type="date"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded"
                  required
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Create Promo Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-4 border rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Active Codes</span>
            <Percent className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">
            {promoCodesState.filter((p) => p.isActive).length}
          </div>
          <p className="text-xs text-gray-500">Currently available</p>
        </div>

        <div className="p-4 border rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Total Uses</span>
            <Upload className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">N/A</div>
          <p className="text-xs text-gray-500">Tracking not implemented</p>
        </div>

        <div className="p-4 border rounded shadow">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Savings Given</span>
            <Calendar className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-2xl font-bold">$0</div>
          <p className="text-xs text-gray-500">Placeholder</p>
        </div>
      </div>

      <div className="border rounded shadow overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">Discount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoCodesState.map((promo) => (
              <tr key={promo._id} className="border-t">
                <td className="px-4 py-2 font-medium">{promo.code}</td>
                <td className="px-4 py-2">{promo.discountPercentage}%</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(promo.isActive)}`}>
                    {promo.isActive ? "active" : "disabled"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {new Date(promo.expiresAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-2 py-1 border rounded text-sm hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="px-2 py-1 border rounded text-sm hover:bg-gray-100">
                      {promo.isActive ? "Disable" : "Enable"}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

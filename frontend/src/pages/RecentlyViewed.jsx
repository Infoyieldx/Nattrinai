import React, { useState } from "react";

const RecentlyViewed = () => {
  const [products] = useState([
    {
      id: "P001",
      name: "Organic Honey 500g",
      image: "https://via.placeholder.com/150",
      price: "₹299"
    },
    {
      id: "P002",
      name: "Natural Handmade Soap",
      image: "https://via.placeholder.com/150",
      price: "₹199"
    },
    {
      id: "P003",
      name: "Cold Pressed Groundnut Oil 1L",
      image: "https://via.placeholder.com/150",
      price: "₹349"
    },
    {
      id: "P004",
      name: "Ayurvedic Herbal Tea",
      image: "https://via.placeholder.com/150",
      price: "₹150"
    }
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Recently Viewed Products</h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-gray-700 font-semibold mt-1">{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">You have not viewed any products recently.</p>
      )}
    </div>
  );
};

export default RecentlyViewed;

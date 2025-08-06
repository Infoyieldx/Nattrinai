import React, { useState } from "react";

const Offers = () => {
  const [offers] = useState([
    {
      id: "O001",
      title: "Flat 20% Off on Your First Order",
      description: "Use code WELCOME20 at checkout to avail the discount.",
      image: "https://via.placeholder.com/300x150"
    },
    {
      id: "O002",
      title: "Buy 1 Get 1 Free on Handmade Soaps",
      description: "Limited time offer on selected handmade soaps.",
      image: "https://via.placeholder.com/300x150"
    },
    {
      id: "O003",
      title: "Free Delivery on Orders Above ₹499",
      description: "No delivery charges on orders above ₹499.",
      image: "https://via.placeholder.com/300x150"
    },
    {
      id: "O004",
      title: "10% Cashback on Prepaid Orders",
      description: "Get 10% cashback when you pay online.",
      image: "https://via.placeholder.com/300x150"
    }
  ]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Exclusive Offers</h2>

      {offers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No current offers available.</p>
      )}
    </div>
  );
};

export default Offers;

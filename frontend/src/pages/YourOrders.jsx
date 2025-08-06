import React from "react";
import { Link } from "react-router-dom";

const YourOrders = () => {
  // Dummy Orders Data
  const orders = [
    {
      id: "ORD12345",
      productName: "Organic Honey 500g",
      price: "₹299",
      productImage: "https://via.placeholder.com/150",
      status: "Delivered",
      deliveryDate: "Aug 5, 2025"
    },
    {
      id: "ORD12346",
      productName: "Natural Handmade Soap",
      price: "₹199",
      productImage: "https://via.placeholder.com/150",
      status: "Out for Delivery",
      deliveryDate: "Expected Aug 8, 2025"
    }
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-md mb-6 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={order.productImage} alt={order.productName} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="text-lg font-semibold">{order.productName}</h3>
              <p className="text-gray-500 text-sm">{order.id}</p>
              <p className="text-gray-700 font-medium mt-1">{order.price}</p>
              <p className={`text-sm mt-1 ${order.status === "Delivered" ? "text-green-600" : "text-orange-500"}`}>
                {order.status} {order.status !== "Delivered" && ` - ${order.deliveryDate}`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end space-y-2">
            <Link to="/track-order" className="px-4 py-2 text-sm bg-[#4A5A2A] text-white rounded">
              Track Order
            </Link>
            {order.status === "Delivered" && (
              <button className="px-4 py-2 text-sm bg-red-500 text-white rounded">
                Return
              </button>
            )}
          </div>
        </div>
      ))}

      {orders.length === 0 && (
        <p className="text-center text-gray-500">No orders found.</p>
      )}
    </div>
  );
};

export default YourOrders;

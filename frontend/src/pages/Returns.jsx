import React, { useState } from "react";

const Returns = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD12345",
      productName: "Organic Honey 500g",
      productImage: "https://via.placeholder.com/80",
      returnStatus: "Eligible for Return",
      price: "₹299"
    },
    {
      id: "ORD12346",
      productName: "Handmade Natural Soap",
      productImage: "https://via.placeholder.com/80",
      returnStatus: "Return Requested",
      price: "₹199"
    }
  ]);

  const handleReturn = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, returnStatus: "Return Requested" }
          : order
      )
    );
    alert(`Return request for ${orderId} has been submitted!`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Returns & Refunds</h2>

      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-lg shadow-md mb-6 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={order.productImage} alt={order.productName} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="text-lg font-semibold">{order.productName}</h3>
              <p className="text-gray-500 text-sm">Order ID: {order.id}</p>
              <p className="text-gray-700 font-medium mt-1">{order.price}</p>
              <p className={`text-sm mt-1 ${order.returnStatus === "Return Requested" ? "text-orange-500" : "text-green-600"}`}>
                {order.returnStatus}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end">
            {order.returnStatus === "Eligible for Return" && (
              <button
                onClick={() => handleReturn(order.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded"
              >
                Return
              </button>
            )}
            {order.returnStatus === "Return Requested" && (
              <span className="text-xs text-orange-500">Return In Process</span>
            )}
          </div>
        </div>
      ))}

      {orders.length === 0 && (
        <p className="text-center text-gray-500">No returnable orders found.</p>
      )}
    </div>
  );
};

export default Returns;

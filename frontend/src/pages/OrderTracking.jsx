import React from "react";

const OrderTracking = () => {
  const order = {
    id: "ORD12345",
    productName: "Organic Honey 500g",
    productImage: "https://via.placeholder.com/100",
    currentStatus: "Out for Delivery", // Change to test different stages
    deliveryDate: "Aug 8, 2025"
  };

  const statusFlow = ["Ordered", "Shipped", "Out for Delivery", "Delivered"];

  const getStatusClass = (status) => {
    if (statusFlow.indexOf(status) < statusFlow.indexOf(order.currentStatus)) {
      return "bg-green-500 text-white";
    } else if (status === order.currentStatus) {
      return "bg-yellow-400 text-white animate-pulse";
    } else {
      return "bg-gray-300 text-gray-600";
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Track Order</h2>

      {/* Order Info */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md mb-6">
        <img src={order.productImage} alt={order.productName} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold">{order.productName}</h3>
          <p className="text-gray-500 text-sm">Order ID: {order.id}</p>
          <p className="text-gray-700 text-sm">Expected Delivery: {order.deliveryDate}</p>
        </div>
      </div>

      {/* Tracking Progress */}
      <div className="flex items-center justify-between relative mb-8">
        {statusFlow.map((status, index) => (
          <div key={index} className="flex flex-col items-center w-1/4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${getStatusClass(status)}`}>
              {index + 1}
            </div>
            <p className="mt-2 text-xs text-center">{status}</p>
          </div>
        ))}
        {/* Progress Line */}
        <div className="absolute top-5 left-5 right-5 h-1 bg-gray-300 z-0">
          <div
            className="h-1 bg-green-500 z-10"
            style={{
              width: `${(statusFlow.indexOf(order.currentStatus) / (statusFlow.length - 1)) * 100}%`
            }}
          ></div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600">Status: <span className="font-medium">{order.currentStatus}</span></p>
      </div>
    </div>
  );
};

export default OrderTracking;

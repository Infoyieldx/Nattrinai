import { useState } from 'react';
import { useLocation } from 'wouter';

const Checkout = ({
  cartItems,
  getCartTotal,
  userInfo,
  setUserInfo,
  checkoutStep,
  setCheckoutStep,
  orderPlaced,
  handlePlaceOrder
}) => {
  const [, setLocation] = useLocation();

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products to proceed with checkout</p>
          <button
            onClick={() => setLocation('/products')}
            className="bg-[#4A5A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (checkoutStep < 3) {
      setCheckoutStep(checkoutStep + 1);
    } else {
      handlePlaceOrder();
    }
  };

  const handlePrevStep = () => {
    if (checkoutStep > 1) {
      setCheckoutStep(checkoutStep - 1);
    }
  };

  if (orderPlaced) {
    return (
      <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
            <h1 className="text-4xl font-bold text-[#3D3F24] mb-4">Order Placed Successfully!</h1>
            <p className="text-gray-600 mb-8">Thank you for choosing A-Z Organic Store. Your order will be delivered soon.</p>
          </div>
          <div className="space-x-4">
            <button
              onClick={() => setLocation('/')}
              className="bg-[#4A5A2A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-[#3D3F24] mb-8">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step <= checkoutStep ? 'bg-[#4A5A2A] text-white' : 'bg-gray-300 text-gray-600'
            }`}>
              {step}
            </div>
            <span className={`ml-2 ${step <= checkoutStep ? 'text-[#4A5A2A]' : 'text-gray-600'}`}>
              {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
            </span>
            {step < 3 && <div className="w-16 h-0.5 bg-gray-300 ml-4"></div>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {checkoutStep === 1 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={userInfo.pincode}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                  <textarea
                    name="address"
                    value={userInfo.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={userInfo.city}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
                  <input
                    type="text"
                    name="state"
                    value={userInfo.state}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4A5A2A]"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {checkoutStep === 2 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Payment Method</h2>
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-4">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" value="cod" defaultChecked className="text-[#4A5A2A]" />
                    <span className="font-medium">Cash on Delivery</span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2">Pay when your order is delivered</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 opacity-50">
                  <label className="flex items-center space-x-3">
                    <input type="radio" name="payment" value="online" disabled />
                    <span className="font-medium">Online Payment</span>
                  </label>
                  <p className="text-sm text-gray-600 mt-2">Coming soon</p>
                </div>
              </div>
            </div>
          )}

          {checkoutStep === 3 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#3D3F24] mb-6">Order Review</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
                  <p className="text-gray-600">
                    {userInfo.name}<br />
                    {userInfo.address}<br />
                    {userInfo.city}, {userInfo.state} - {userInfo.pincode}<br />
                    Phone: {userInfo.phone}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Payment Method</h3>
                  <p className="text-gray-600">Cash on Delivery</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevStep}
              disabled={checkoutStep === 1}
              className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="bg-[#4A5A2A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
            >
              {checkoutStep === 3 ? 'Place Order' : 'Next'}
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
            <h2 className="text-xl font-bold text-[#3D3F24] mb-4">Order Summary</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between text-xl font-bold text-[#4A5A2A]">
                <span>Total:</span>
                <span>₹{getCartTotal()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

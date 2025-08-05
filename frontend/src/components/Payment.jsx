import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Payment = ({ clearCart }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const orderData = location.state || JSON.parse(localStorage.getItem('paymentData'));

  useEffect(() => {
    if (!orderData) {
      navigate('/');
      return;
    }

    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!orderData) return null;

  const {
    orderId,
    formData,
    cartItems,
    subtotal,
    platformFee,
    codCharges,
    totalAmount
  } = orderData;

  const handleRazorpayPayment = () => {
    const options = {
      key: 'rzp_test_sfZFeVIZQorlMN', // Replace with live key in production
      amount: totalAmount * 100, // Razorpay uses paise
      currency: 'INR',
      name: 'Nattrinai Organic Store',
      description: 'Order Payment',
      image: '/logo.png',
      handler: function (response) {
        console.log('Razorpay Payment ID:', response.razorpay_payment_id);
        clearCart?.(); // Clear cart if function is passed
        localStorage.removeItem('paymentData');
        navigate('/success');
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        orderId,
        subtotal: subtotal,
        platformFee: platformFee,
        codCharges: codCharges
      },
      theme: {
        color: '#0f5d26'
      },
      modal: {
        ondismiss: () => {
          navigate('/failure');
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Payment</h2>

      {/* Order Info */}
      <div className="bg-gray-100 p-4 rounded mb-6 space-y-1">
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.phone}</p>
        <p><strong>Address:</strong> {formData.address}</p>
      </div>

      {/* Items */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Items</h3>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name} x {item.quantity}</span>
              <span>₹{item.price * item.quantity}</span>
            </li>
          ))}
        </ul>

        {/* Price Breakdown */}
        <div className="text-sm text-gray-700 mt-4 space-y-1">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Platform Fee:</span>
            <span>₹{platformFee}</span>
          </div>
          {codCharges > 0 && (
            <div className="flex justify-between">
              <span>COD Charges:</span>
              <span>₹{codCharges}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
            <span>Total:</span>
            <span>₹{totalAmount}</span>
          </div>
        </div>
      </div>

      {/* Razorpay Button */}
      <button
        onClick={handleRazorpayPayment}
        className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800 transition"
      >
        Pay Now with Razorpay ₹{totalAmount}
      </button>
    </div>
  );
};

export default Payment;

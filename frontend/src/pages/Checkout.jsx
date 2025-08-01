import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Checkout = ({ cartItems, onClearCart }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit order logic can be added here (API, etc.)
    onClearCart();
    alert('Order placed successfully!');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-[#4A5A2A] text-white px-6 py-2 rounded hover:bg-[#3D3F24]"
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="border p-3 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
          className="border p-3 rounded"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Shipping Address"
          className="border p-3 rounded md:col-span-2"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="border p-3 rounded md:col-span-2"
          required
        />
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold mb-2">Order Summary</h3>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-bold border-t pt-2">
            <span>Total:</span>
            <span>₹{totalAmount.toFixed(2)}</span>
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#4A5A2A] text-white py-3 px-6 rounded hover:bg-[#3D3F24] md:col-span-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;

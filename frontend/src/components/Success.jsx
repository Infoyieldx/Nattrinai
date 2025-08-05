import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Success = ({ clearCart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear cart on success
    clearCart();
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Your order has been placed. Thank you for shopping with us!
      </p>
      <button
        onClick={() => navigate('/products')}
        className="px-5 py-3 rounded bg-green-700 text-white font-medium hover:bg-green-800"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;

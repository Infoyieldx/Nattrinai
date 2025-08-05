import { useNavigate } from 'react-router-dom';

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Payment Failed</h1>
      <p className="text-lg text-gray-600 mb-6">
        Something went wrong. Please try again or use a different payment method.
      </p>
      <button
        onClick={() => navigate('/checkout')}
        className="px-5 py-3 rounded bg-red-600 text-white font-medium hover:bg-red-700"
      >
        Retry Checkout
      </button>
    </div>
  );
};

export default Failure;

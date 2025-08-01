import { useNavigate } from 'react-router-dom';

const ShoppingCart = ({
  showCart,
  setShowCart,
  cartItems,
  handleUpdateQuantity,
  handleRemoveFromCart,
  getCartTotal,
  handleCheckout,
}) => {
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    setShowCart(false);
    navigate('/checkout');
  };

  if (!showCart) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={() => setShowCart(false)}
      ></div>

      {/* Cart Sidebar */}
      <aside className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl transform transition-transform z-50 rounded-l-3xl flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 tracking-wide">
            Shopping Cart
          </h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close Cart"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full pb-20">
              
              <p className="text-gray-700 text-lg font-semibold mb-1">
                Your cart is empty
              </p>
              <p className="text-gray-400 mb-5">
                Add some organic products to get started
              </p>
              <button
                type="button"
                className="bg-gradient-to-r from-[#4A5A2A] to-[#3D3F24] text-white rounded-lg px-5 py-2 font-semibold shadow hover:from-[#3D3F24] hover:to-[#4A5A2A] transition-colors"
                onClick={() => {
                  setShowCart(false);
                  navigate('/products'); // Or wherever your shop page is
                }}
              >
                Discover Products
              </button>
            </div>
          ) : (
            <div className="space-y-4 overflow-y-hidden">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                 
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      ₹{item.price}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleUpdateQuantity(item.id, Math.max(item.quantity - 1, 1))}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-[#f3f6ee] text-[#4A5A2A] font-bold transition"
                      aria-label="Decrease quantity"
                    >
                      <i className="fas fa-minus text-xs"></i>
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-[#f3f6ee] text-[#4A5A2A] font-bold transition"
                      aria-label="Increase quantity"
                    >
                      <i className="fas fa-plus text-xs"></i>
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 ml-2"
                    aria-label="Remove from cart"
                  >
                    <i className="fas fa-trash my-2"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-200 bg-white sticky bottom-0">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl font-bold text-[#4A5A2A]">₹{getCartTotal()}</span>
            </div>
            <button
              onClick={proceedToCheckout}
              className="w-full bg-[#4A5A2A] text-white py-3 rounded-lg font-semibold hover:bg-[#3D3F24] transition-colors"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default ShoppingCart;

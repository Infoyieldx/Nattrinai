import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Header from './components/Header'; // if you have
import Footer from './components/Footer'; // if you have
import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sample', price: 100, quantity: 1 }
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Checkout cartItems={cartItems} onClearCart={() => setCartItems([])} />}
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

exports.createOrder = (req, res) => {
  const { formData, cartItems, totalAmount } = req.body;

  // Simulate order storage (replace with DB logic as needed)
  const orderId = 'ORD' + Date.now();

  console.log('Order created:', { orderId, formData, cartItems, totalAmount });

  res.status(201).json({
    message: 'Order created',
    orderId,
  });
};

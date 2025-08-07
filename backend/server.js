const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

// Load environment variables
dotenv.config();

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON
app.use('/api/products/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/categories/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || process.env.Data_Base, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => {
  console.error("❌ MongoDB connection error:", err);
  process.exit(1);
});

// Import Routes
const CategoryRoutes  = require("./Router/categoryRouter");
const ProductRoutes = require("./Router/ProductRouter");
const PromoCodeRoutes = require("./Router/PromoCodeRouter");
const AuthRoutes = require("./routes/auth");

// Use Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/categories", CategoryRoutes);
app.use("/api/products", ProductRoutes);
app.use("/api/promocode", PromoCodeRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

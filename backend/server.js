const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path")
dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

//ImportRouters
const CategoryRoutes  = require("./Router/CategoryRouter")
const ProductRoutes = require("./Router/ProductRouter")
const PromoCode = require("./Router/PromoCodeRouter")

// Middleware
app.use(express.json()); // for parsing JSON bodies
app.use('/api/products/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect(process.env.Data_Base)
.then(() => console.log("✅ Database connected"))
.catch((err) => console.error("❌ Database connection error:", err));


// routes
app.use("/api/categories",CategoryRoutes) //rotingtocategoires
app.use('/api/products', ProductRoutes); //rooutingtoproducts
app.use("/api/promocode",PromoCode) // routingtopromocode

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});


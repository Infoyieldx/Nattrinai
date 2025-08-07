const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductModel")
const Category = require("../models/Category")
const PromoCode = require("../Models/PromoCodeModel");
const imageUpload = require("../Helpers/Multer");
// Create Product
router.post("/", imageUpload(), async (req, res) => {
  try {
    const { productId, productName, category, price, description ,stock} = req.body;

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ error: "Invalid category ID" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const imageUrl = `http://localhost:5000/api/products/uploads/${req.file.filename}`;

    const product = new Product({
      productId,
      productName,
      category,
      price,
      description,
      imageUrl,
      stock
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Products with Category Populated
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Single Product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Product by ID
router.put("/:id", imageUpload(), async (req, res) => {
  try {
    const { productId, productName, category, price, description ,stock} = req.body;

    if (category) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists)
        return res.status(400).json({ error: "Invalid category ID" });
    }

    const updateData = { productId, productName, category, price, description,stock };

    if (req.file) {
      updateData.imageUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/products/uploads/${req.file.filename}`;
    } else if (req.body.imageUrl) {
      updateData.imageUrl = req.body.imageUrl;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedProduct)
      return res.status(404).json({ error: "Product not found" });
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete Product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/products/:id/apply-promo
router.post("/:id/apply-promo", async (req, res) => {
  try {
    const { code } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    const promo = await PromoCode.findOne({ code, isActive: true });
    if (!promo)
      return res.status(400).json({ error: "Invalid or expired promo code" });

    if (promo.expiresAt < new Date()) {
      return res.status(400).json({ error: "Promo code has expired" });
    }

    const discountedPrice =
      product.price * (1 - promo.discountPercentage / 100);
    res.json({
      originalPrice: product.price,
      discountPercentage: promo.discountPercentage,
      discountedPrice: Math.round(discountedPrice),
      promoCode: code,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

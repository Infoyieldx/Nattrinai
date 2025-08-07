const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Category = require('../models/Category');

// Configure Multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/categories/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ============================
// POST /api/categories
// ============================
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, description, status } = req.body;

    const category = new Category({
      name,
      description,
      status: status || 'active',
      image: req.file ? `http://localhost:5000/api/categories/uploads/${req.file.filename}` : '',
    });

    const saved = await category.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ============================
// GET /api/categories
// ============================
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// GET /api/categories/:id
// ============================
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ============================
// PUT /api/categories/:id
// ============================
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { name, description, status } = req.body;

    const updateData = {
      name,
      description,
      status,
    };

    if (req.file) {
      updateData.image = `/uploads/categories/${req.file.filename}`;
    }

    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: 'Category not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ============================
// DELETE /api/categories/:id
// ============================
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

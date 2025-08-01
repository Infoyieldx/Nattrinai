const express = require('express');
const router = express.Router();
const PromoCode = require('../Models/PromoCodeModel')

// Create Promo
router.post('/', async (req, res) => {
  try {
    const { code, discountPercentage, expiresAt } = req.body;
    const promo = new PromoCode({ code, discountPercentage, expiresAt });
    const saved = await promo.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Promos
router.get('/', async (req, res) => {
  try {
    const promos = await PromoCode.find();
    res.json(promos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

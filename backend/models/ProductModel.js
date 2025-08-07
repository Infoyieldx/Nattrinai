
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
 stock: {
  type: Number,
  required: true,
  min: 50,
  max: 300
}

  },
  {
    timestamps: true,
  }
);

// ✅ Prevent OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  secondaryImages: [String],
  requires: String, // Equipment or other items required for preparation
  ingredients: String, // Could be an array if you want to separate individual ingredients
  nutrition: [
    {
      name: String,
      value: Number,
      unit: String, // Added to specify the unit of measurement (e.g., grams, mg)
    },
  ],
  how_to_prepare: String,
  side: {
    id: mongoose.Schema.Types.ObjectId, // Reference to another product, if applicable
    title: String,
    unitsPerSide: Number,
  },
  servingsPerContainer: String,
  servingSize: String,
  filters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FilterItem",
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

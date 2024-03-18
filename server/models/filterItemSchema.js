const mongoose = require("mongoose");

const filterItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Spice level", "Dietary needs", "Meal type"],
    default: "Spice level",
  },
});

const FilterItem = mongoose.model("FilterItem", filterItemSchema);

module.exports = FilterItem;

const express = require("express");
const Filter = require("../models/Filter"); // Assuming your Filter model file path
const router = express.Router();

// Route to add a new filter
router.post("/filters", async (req, res) => {
  try {
    const { name } = req.body;
    const filter = new Filter({
      name,
    });
    const newFilter = await filter.save();
    res.status(201).json(newFilter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to remove a filter
router.delete("/filters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const filter = await Filter.findByIdAndDelete(id);
    if (!filter) {
      return res.status(404).json({ message: "Filter not found" });
    }
    res.status(200).json({ message: "Filter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

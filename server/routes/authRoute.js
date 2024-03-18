const express = require("express");
const User = require("../models/userSchema"); // Assuming your User model file path
const bcrypt = require("bcryptjs");
const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { email, password, fullName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      passwordHash: hashedPassword,
      fullName,
    });
    const newUser = await user.save();
    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(
      {
        email,
      },
      {},
      {
        lean: true,
      }
    );
    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      // Generate and return token (JWT or similar) here for real implementation
      res.json({
        message: "Login successful",
        status: "success",
        user: { email, id: user.id, fullName: user.fullName },
      });
      // route to redirect to after login
    } else {
      res.status(400).json({ message: "Invalid credentials", status: "fail" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

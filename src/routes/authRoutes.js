const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Get JWT secret from environment variable
const JWT_SECRET = process.env.JWT_SECRET;

// In-memory storage for users (demo purposes)
let users = [{ email: "test@test.com", password: "password" }];

// Ensure router has proper error handling
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    users.push({ email, password });
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, email });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, email });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

const jwt = require("jsonwebtoken");

// users array with a dummy id for quick login
let users = [{ email: "test@test.com", password: "password" }];

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    users.push({ email, password });
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, email });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, email });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

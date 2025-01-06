const jwt = require("jsonwebtoken");

// users array with a dummy user for quick login
let users = [{ email: "test@test.com", password: "password" }];
//handle user registration
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body; // take out email password from input
    const existingUser = users.find((user) => user.email === email); // check if user exists

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
//function  for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body; // take out email and password from input
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      // error message for wrong email or password
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      // 1 hour jwt token for logged in users
      expiresIn: "1h",
    });
    res.json({ token, email });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

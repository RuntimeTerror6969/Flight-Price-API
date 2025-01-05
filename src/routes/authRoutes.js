const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET; // Fetch the secret from environment variables

let users = [{ email: "test@test.com", password: "password" }];

router.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  // Add user to in-memory storage
  users.push({ email, password });

  // Generate token
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, email });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Validate user credentials
  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Generate token
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, email });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const jwt = require("jsonwebtoken");
// let users = []; // In-memory storage for users (demo purposes)

// router.post("/register", (req, res) => {
//   const { email, password } = req.body;

//   // Check if user already exists
//   const existingUser = users.find((user) => user.email === email);
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   // Add user to in-memory storage
//   users.push({ email, password });

//   // Generate token
//   const token = jwt.sign({ email }, "your-secret-key", { expiresIn: "1h" });
//   res.json({ token, email });
// });
// router.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   // Simple authentication for demo
//   if (email === "test@example.com" && password === "password") {
//     const token = jwt.sign(
//       { email },
//       "8fb36f63862fe5b98e8d9f1cbe155c7692366c3c42e8272c19284d292a2bd008a38a222f84113fcf66bcca579f550c70b9f3cb94cce8bf779c1a0f6381eb24ef",
//       { expiresIn: "1h" }
//     );
//     res.json({ token, email });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

let users = [{ email: "test@test.com", password: "password" }]; // In-memory storage for users (demo purposes)

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
  const token = jwt.sign(
    { email },
    "8fb36f63862fe5b98e8d9f1cbe155c7692366c3c42e8272c19284d292a2bd008a38a222f84113fcf66bcca579f550c70b9f3cb94cce8bf779c1a0f6381eb24ef",
    { expiresIn: "1h" }
  );
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
  const token = jwt.sign(
    { email },
    "8fb36f63862fe5b98e8d9f1cbe155c7692366c3c42e8272c19284d292a2bd008a38a222f84113fcf66bcca579f550c70b9f3cb94cce8bf779c1a0f6381eb24ef",
    { expiresIn: "1h" }
  );
  res.json({ token, email });
});

module.exports = router;

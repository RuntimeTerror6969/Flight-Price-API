const express = require("express");
const cors = require("cors");
const flightRoutes = require("./routes/flightRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
// Middleware to handle cors issues
app.use(
  cors({
    origin: "https://flight-price-api-frontend.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
// endpoints for the api
app.use("/api", flightRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

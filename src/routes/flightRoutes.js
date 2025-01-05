const express = require("express");
const router = express.Router();
const flightController = require("../controllers/flightController");

router.post("/flights", flightController.searchFlights);
// router.get("/prices", flightController.getFlightPrices);

module.exports = router;

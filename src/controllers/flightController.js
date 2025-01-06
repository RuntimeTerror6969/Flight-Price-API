// flightController.js
const flightService = require("../services/flightService");

exports.searchFlights = async (req, res) => {
  try {
    const { source, destination, date, passengers = 1, route } = req.body;

    if (!source || !destination || !date) {
      return res.status(400).json({
        error: "Missing required parameters",
      });
    }

    const flights = await flightService.searchFlights(
      source,
      destination,
      date,
      passengers,
      route
    );

    res.json(flights);
  } catch (error) {
    console.error("Search error:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getFlightPrices = async (req, res) => {
  try {
    const { source, destination, date } = req.query;

    if (!source || !destination || !date) {
      return res.status(400).json({
        error: "Missing required parameters",
      });
    }

    const prices = await flightService.getFlightPrices(
      source,
      destination,
      date
    );

    res.json(prices);
  } catch (error) {
    console.error("Price fetch error:", error);
    res.status(500).json({ error: error.message });
  }
};

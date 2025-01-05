const flightService = require("../services/flightService");
exports.searchFlights = async (req, res) => {
  try {
    const { source, destination, date, passengers = 1, route } = req.body;
    console.log("Controller received:", {
      source,
      destination,
      date,
      passengers,
      route,
    });

    const flights = await flightService.searchFlights(
      source,
      destination,
      date,
      passengers,
      route
    );
    res.json(flights);
  } catch (error) {
    console.error("Controller error:", error);
    res.status(500).json({ error: error.message });
  }
};

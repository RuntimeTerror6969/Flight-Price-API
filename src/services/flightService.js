// flightService.js
const mockFlights = require("../data/mockFlights");

exports.searchFlights = async (
  source,
  destination,
  date,
  passengers = 1,
  route = "direct"
) => {
  const searchDate = new Date(date).toISOString().split("T")[0];

  let filtered = mockFlights.filter(
    (flight) =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.type === route &&
      flight.dates.includes(searchDate)
  );

  return filtered.map((flight) => ({
    ...flight,
    displayPrice: `₹${flight.price.toLocaleString("en-IN")}`,
    totalPrice: `₹${(flight.price * passengers).toLocaleString("en-IN")}`,
    passengers,
  }));
};

exports.getFlightPrices = async (source, destination, date) => {
  const flights = await this.searchFlights(source, destination, date);

  // Group prices by airline
  return flights.reduce((prices, flight) => {
    prices[flight.airline.toLowerCase()] = flight.displayPrice;
    return prices;
  }, {});
};

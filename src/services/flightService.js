const mockFlights = require("../data/mockFlights");

exports.searchFlights = async (
  source, //From
  destination, //To
  date,
  passengers = 1,
  route = "direct" // as default route is direct
) => {
  const searchDate = new Date(date).toISOString().split("T")[0];
  //filter flights based on search criteria
  let filtered = mockFlights.filter(
    (flight) =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.type === route &&
      flight.dates.includes(searchDate)
  );
  // map flights to display total price
  return filtered.map((flight) => ({
    ...flight,
    displayPrice: `₹${flight.price.toLocaleString("en-IN")}`,
    totalPrice: `₹${(flight.price * passengers).toLocaleString("en-IN")}`,
    passengers,
  }));
};
//get flight prices grouped by airline
exports.getFlightPrices = async (source, destination, date) => {
  const flights = await this.searchFlights(source, destination, date);

  // Group prices by airline
  return flights.reduce((prices, flight) => {
    prices[flight.airline.toLowerCase()] = flight.displayPrice;
    return prices;
  }, {});
};

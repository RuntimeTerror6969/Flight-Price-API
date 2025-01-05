const mockFlights = require("../data/mockFlights");

exports.searchFlights = async (
  source,
  destination,
  date,
  passengers = 1,
  route = "direct"
) => {
  const searchDate = new Date(date).toISOString().split("T")[0];
  console.log("Search params:", {
    source,
    destination,
    searchDate,
    passengers,
    route,
  });

  let filtered = mockFlights.filter(
    (flight) =>
      flight.source.toLowerCase() === source.toLowerCase() &&
      flight.destination.toLowerCase() === destination.toLowerCase() &&
      flight.type === route &&
      flight.dates.includes(searchDate)
  );

  const results = filtered.map((flight) => {
    const totalPrice = flight.price * passengers;

    return {
      ...flight,
      displayPrice: `₹${flight.price.toLocaleString("en-IN")}`,
      totalPrice: `₹${totalPrice.toLocaleString("en-IN")}`,
      passengers,
    };
  });

  console.log("Final results:", results);
  return results;
};

// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------
const driver_name = "Brogan";
let distance_miles = 300;
const mpg = 25;
let gas_price = 3.5;
let fuel_capacity = 15;
let is_round_trip = true;
let total_distance = 0;
let stopnumber = 0;

// ------------------------------------------------------------
// Functions
// ------------------------------------------------------------
function calculateGallonsNeeded(total_distance, mpg) {
  return total_distance / mpg;
}
function calculateFuelCost(gallons, gas_price) {
  return gallons * gas_price;
}
// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------

while (is_round_trip == true) {
  if (stopnumber !== 5) {
    console.log(
      "Stop Number: " +
        stopnumber +
        ", Miles Traveled: " +
        total_distance +
        " Miles" +
        ", Total Estimate Fuel Cost: $" +
        calculateFuelCost(
          calculateGallonsNeeded(total_distance, mpg),
          gas_price,
        ),
    );
    stopnumber = stopnumber + 1;
    total_distance = distance_miles + total_distance;
  } else {
    console.log(
      "Stop Number: " +
        stopnumber +
        ", Driver Name: " +
        driver_name +
        ", Total Miles Traveled: " +
        total_distance +
        " Miles" +
        ", Total Gallons Needed: " +
        calculateGallonsNeeded(total_distance, mpg) +
        ", Total Estimate Fuel Cost: $" +
        calculateFuelCost(
          calculateGallonsNeeded(total_distance, mpg),
          gas_price,
        ),
    );
    is_round_trip = false;
  }
}

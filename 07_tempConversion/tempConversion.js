const convertToCelsius = function(tempF) {
  let temperature = (tempF - 32) * 5/9;
  return parseFloat(temperature.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let temperature = (tempC * 9/5) + 32;
  return parseFloat(temperature.toFixed(1))
};

convertToCelsius(32);
convertToFahrenheit(73.2)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

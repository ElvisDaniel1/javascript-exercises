const convertToCelsius = function(fahren) {
  return Number(((fahren - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(celc) {
  return Number((celc * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

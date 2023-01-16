const convertToCelsius = function() {
  let fahrenheitTemperature = arguments[0];
  let celsiusTemperature = Math.round(((fahrenheitTemperature-32) / 9 * 5 )*10)/10;
  return celsiusTemperature;
};

const convertToFahrenheit = function() {
  let celsiusTemperature = arguments[0];
  let fahrenheitTemperature = Math.round((celsiusTemperature * 1.8 + 32)*10)/10;
  return fahrenheitTemperature; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

/*Write two functions that convert temperatures from Fahrenheit to Celsius, 
and vice versa:

convertToCelsius(32) // fahrenheit to celsius, should return 0

convertToFahrenheit(0) // celsius to fahrenheit, should return 32
Because we are human, we want the result temperature to be rounded
 to one decimal place: i.e., convertToCelsius(100) should return 37.8
  and not 37.77777777777778.

Hints
You can find the relevant formulae on Wikipedia.

Try to find by yourself on the Internet how to round a number to 
1 decimal place in JavaScript. If you struggle, have a look here.*/


const convertToCelsius = function(fahrenheit) {

  let convertedF = (fahrenheit - 32) * (5/9);
  let rounded = Math.round((convertedF * 10)) / 10;
  return rounded;
};


const convertToFahrenheit = function(celsius) {
  
  let convertedC = (celsius * (9/5)) + 32;
  let rounded = Math.round((convertedC * 10)) / 10;
  return rounded;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

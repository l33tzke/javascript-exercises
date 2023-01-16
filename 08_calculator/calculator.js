const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
	let numbers = arguments[0];
  let sum = 0;
  numbers.forEach(function(number) {
    sum += number;
  });
  return sum;
};

const multiply = function() {
  let numbers = arguments[0];
  let total = 1;
  numbers.forEach(function(number) {
    total *= number;
  });
  return total;
};

const power = function() {
	let base = arguments[0];
  let power = arguments[1];
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function() {
	let number = arguments[0];
  let result = 1;
  for (let i = 0; i < number; i++) {
    result = result * (i+1);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

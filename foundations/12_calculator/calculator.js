const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0
  }
  else if (arr !== undefined || arr.length !== 0) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue)
  }
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator * currentValue)
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

// const factorialArray = function(number) {
//   let numbersArray = [];

//   for (let i = 1; i < number + 1; i++) {
//     numbersArray.push(i);
//   };

//   let numberFactorial = numbersArray.reduce((accumulator, currentValue) => accumulator * currentValue);

//   return numberFactorial;
// };

const factorial = function(number) {
  let accumulator = 1;
  for (let i = number; i > 0; i--) {
    accumulator *= i;
  };
  return accumulator;
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

const add = function(number1, number2) {
	return number1 + number2;
};

const subtract = function(number1, number2) {
	return number1 - number2;
};

const sum = function(array) {
	return array.reduce((accumulator, current) => {
    return accumulator + current;
  },0)
};

const multiply = function(array) {
  return array.reduce((accumulator, current) => {
    return accumulator * current;
  },1)
};

const power = function(number1, number2) {
	return number1 ** number2;
};

const factorial = function(number) {
  let factorial = 1;
  if (number > 1) {
    for(let c = number; c > 1; c--) {
      factorial = number
      number *= (c-1);
    }
    return number
  }
  return factorial
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

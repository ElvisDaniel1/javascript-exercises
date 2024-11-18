const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a-b;
};

const sum = function(numbers) {
	num_length = numbers.length;
  let sum = 0;

  for (let i = 0; i < num_length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const multiply = function(numbers) {
  num_length = numbers.length;
  let sum = 1;

  for(let i = 0; i < num_length; i++) {
    sum *= numbers[i]; 
  }

  return sum;

};

const power = function(number, pow) {
  return Math.pow(number, pow);
};

const factorial = function(number) {
	
  function factorial(num) {
    if (num == 1 || num == 0)
      return 1;
    else
      return num * factorial(num-1);
  }
  
  return factorial(number);
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

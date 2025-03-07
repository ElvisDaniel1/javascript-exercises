const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, acc) => {return total + acc}, 0);
};

const multiply = function(array) {
  return array.reduce((total, acc) => {return total * acc}, 1);
};

const power = function(a, b) {
  return a ** b;  
};

const factorial = function(a) {
  function fact(a){
    if (a == 1 || a == 0)
      return 1;
    
    return a * fact(a-1); 
  }

  return fact(a);
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

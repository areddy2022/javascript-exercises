const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach(element => {sum += element});
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(element => {product *= element});
  return product;
};

const power = function(num1, num2) {
  let product = 1;
	for(; num2 > 0; num2--){
    product *= num1;
  }
  return product;
};

const factorial = function(num1) {
  let countUp = 1;
  let product = 1;
  for(; countUp <= num1; countUp++){
    product *= countUp;
  }
  return product;
};

console.log(4,3);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

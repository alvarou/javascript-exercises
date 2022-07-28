//function to add two numbers
const add = (num1, num2) => num1 + num2;

//function to subtract two numbers
const subtract = (num1, num2) => num1 - num2;

//arrow function to sum an array of numbers
const sum = (numbers) => {
  
  //initialize sum to 0
  let total = 0;

  //loop through the array
  for (let i = 0; i < numbers.length; i++) {
    //add each number to the total
    total += numbers[i];
  }

  //return the total
  return total;
};

//arrow function to multiply an array of numbers
const multiply = (numbers) => {

  //initialize total to 1
  let total = 1;

  //loop through the array
  for (let i = 0; i < numbers.length; i++) {
    //multiply each number to the total
    total *= numbers[i];
  }

  //return the total
  return total;
};

const power = function() {
	
};

const factorial = function() {
	
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

const sumAll = function(a, b) {

    // Check for non-number parameters
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }

    // Check for negative numbers
    if (a < 0 || b < 0) {
        return 'ERROR';
    }
        
    // Create a variable to store the sum of the two numbers
    let sum = 0;
    
    // Create a variable to store the highest number
    let highest = 0;
    //
    // Create a variable to store the lowest number
    let lowest = 0;

    // If the first number is higher than the second number, 
    // set the highest number to the first number
    if (a > b) {
        highest = a;
        lowest = b;
    }
    // If the second number is higher than the first number,
    // set the highest number to the second number
    else if (b > a) {
        highest = b;
        lowest = a;
    }
    // If the two numbers are the same, set the highest number to the first number
    else {
        highest = a;
        lowest = b;
    }
    
    // Loop through the numbers from the lowest number to the highest number
    for (let i = lowest; i <= highest; i++) {
        // Add the current number to the sum
        sum += i;
    }

    // Return the sum
    return sum;        
};

// Do not edit below this line
module.exports = sumAll;

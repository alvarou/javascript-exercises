//arrow function that returns the nth fibonacci number
const fibonacci = (n) => {
   
    //convert n to a number
    n = Number(n);
    
    //if n is negative, return "OOPS"
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;

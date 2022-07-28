//converts fahrenheit to celsius
//rounded to one decimal 
const ftoc = (fahrenheit) => {
  
  //get the celsius value by subtracting 32 from the fahrenheit value
  //multiply by 5/9  
  let result = ((fahrenheit - 32) * 5 / 9);
  
  //round result to one decimal
  result = Math.round(result * 10) / 10;
  return result;
  
};

//converts celsius to fahrenheit
//rounded to one decimal
const ctof = (celsius) => {

  //get the fahrenheit value by multiplying the celsius value by 9/5
  //add 32 to the result
  let result = (celsius * 9 / 5) + 32;

  //round result to one decimal
  result = Math.round(result * 10) / 10;
  return result;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

function repeatString (string, number) {
  if (number < 0) {
    return 'ERROR';
  }
  if (number === 0) {
    return '';
  }

  //using recursion
  //return string + repeatString(string, number - 1);

  //using for loop
  let result = '';
  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
  

};

// Do not edit below this line
module.exports = repeatString;

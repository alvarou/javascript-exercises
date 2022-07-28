const reverseString = function(string) {
  
    if (string === '') {
    return '';
  }
  
  //using recursion
  return reverseString(string.substr(1)) + string[0];

};

// Do not edit below this line
module.exports = reverseString;

const reverseString = function(string) {
  
    if (string === '') {
    return '';
  }
  
  //using recursion
  //return reverseString(string.substr(1)) + string[0];

    //using loop
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
      reversedString += string[i];
    }
    return reversedString;    
};

// Do not edit below this line
module.exports = reverseString;

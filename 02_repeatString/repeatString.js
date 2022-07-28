function repeatString (string, number) {
  if (number < 0) {
    return 'ERROR';
  }
  if (number === 0) {
    return '';
  }
  return string + repeatString(string, number - 1);

};

// Do not edit below this line
module.exports = repeatString;

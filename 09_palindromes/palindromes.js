//arrow function to check if a string is a palindrome
const palindromes = (str) => {

    //remove punctuation characters 
    str = str.replace(/[^\w\s]/gi, '').toLowerCase();
    
    //remove spaces
    str = str.replace(/\s/g, '');

    //remove commas
    str = str.replace(/,/g, '');

    return str.split('').reverse().join('') === str;

}
;

// Do not edit below this line
module.exports = palindromes;

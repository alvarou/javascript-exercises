//use multiple optional arguments to remove multiple values
//use the spread operator to remove multiple values
//use the splice method to remove multiple values
const removeFromArray = function(arr, ...args) {
    //iterate through the arguments
    for (let i = 0; i < args.length; i++) {
        //find the index of the argument
        let index = arr.indexOf(args[i]);

        //if the index is not -1, remove the value
        if (index > -1) {
        arr.splice(index, 1);
        }
  }
  return arr;
}

// Do not edit below this line
module.exports = removeFromArray;

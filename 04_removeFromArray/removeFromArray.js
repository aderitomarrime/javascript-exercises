const removeFromArray = function(myArray, ...args) {
    return myArray.filter(x => !args.includes(x))
};

removeFromArray([1,2,3,4], 2,3)
// Do not edit below this line
module.exports = removeFromArray;

const reverseString = function(wordPhrase) {

    let splitedString = wordPhrase.split("");
    let reversedString = splitedString.reverse();
    let result = reversedString.join("");
    return result;
    
};

reverseString("Ola mundo");

// Do not edit below this line
module.exports = reverseString;

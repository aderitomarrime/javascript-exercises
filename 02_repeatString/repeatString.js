const repeatString = function(userString, number) {
    let result = '';

    for(let i=0; i<number; i++) {
        result += userString; 
    }

    return result;
};

repeatString('aderito', 3);

// Do not edit below this line
module.exports = repeatString;

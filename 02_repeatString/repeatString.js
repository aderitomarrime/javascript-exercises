const repeatString = function(userString, number) {
    let result = '';

    if(number >= 0) {
        for(let i=0; i<number; i++) {
            result += userString; 
        }
    } else {
        result = 'ERROR'
    }

    return result;
};

repeatString('aderito', 3);

// Do not edit below this line
module.exports = repeatString;

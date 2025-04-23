const sumAll = function(firstNumber, lastNumber) {
    let result = 0;
    if (firstNumber < 0 || lastNumber < 0) {
        return "ERROR"
    } else if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) {
        return "ERROR"
    } else if (firstNumber === NaN || lastNumber === NaN) {
        return "Error"
    }else {
        if (lastNumber < firstNumber) {
            for (lastNumber; lastNumber <= firstNumber; lastNumber++) {
                result += lastNumber
            }
        } else {
            for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
                result += firstNumber
            }
        }
    }
    return result
};

sumAll(2,400)

// Do not edit below this line
module.exports = sumAll;

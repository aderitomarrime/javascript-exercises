const leapYears = function(year) {
    let result = null;
    let result1 = Number.isInteger(year / 4)
    let result2 = Number.isInteger(year / 100)
    let result3 = Number.isInteger(year / 400)

    if(result1 && !result2 && !result3) {
        result = true;
    } else if (!result1 && !result2 && !result3) {
        result = false
    } else if (result1 && !result2 && !result3) {
        result = true
    } else if (result1 && result2 && !result3) {
        result = false;
    } else if (result1 && result2 && result3) {
        result = true;
    } else if (result1 && result2 && !result3) {
        result = false;
    }

    return result
};

leapYears(1997)

// Do not edit below this line
module.exports = leapYears;

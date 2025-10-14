const fibonacci = function(number) {

    let a = 1;
    let b = 1;
    let result = undefined;

    let fibonacciArray = [0,1,1]

    if(number < 0) {
        return "OOPS"
    } else {
        for (let c = number; c > 0; c-- ) {
            result = a + b;
            a = b
            b = result
    
            fibonacciArray.push(result)
        }
    
        return fibonacciArray[number];
    }
   
};

// Do not edit below this line
module.exports = fibonacci;

const fibonacci = function() {
    let order = Number(arguments[0])
    if (order < 0) return "OOPS";
    
    return fib(order);

    function fib(order) {
        if (order > 1) {
            return fib(order-1) + fib(order-2);
        } else if(order == 1) {
            return 1
        } 
        else {
            return 0;
        }
        
    }
    
};

// Do not edit below this line
module.exports = fibonacci;

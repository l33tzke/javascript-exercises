function areArgumentsValid(args){
    if (args[0] < 0 || args[1] < 0) {return false;}
    if (typeof(args[0]) != "number" || typeof(args[1]) != "number") {return false;}
    return true;
}

const sumAll = function() {
    let begin, end;
    if (!areArgumentsValid(arguments)) return "ERROR"; 
    if (arguments[1] > arguments [0]){
        begin = arguments[0];
        end = arguments[1];
    } else {
        begin = arguments[1];
        end = arguments[0];
    }
    let sum = 0;

    for (let i = begin; i <= end; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

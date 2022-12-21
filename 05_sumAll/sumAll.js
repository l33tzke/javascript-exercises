const sumAll = function() {
    let begin = arguments[0];
    let end = arguments[1];
    let sum = 0;

    for (let i = begin; i <= end; i++){
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

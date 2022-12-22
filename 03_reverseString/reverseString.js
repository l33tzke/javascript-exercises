const reverseString = function() {
    let inputString = arguments[0];
    let outputString = inputString.split("").reverse().join("");
    return outputString;

};

// Do not edit below this line
module.exports = reverseString;

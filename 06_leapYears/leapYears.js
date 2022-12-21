const leapYears = function() {
    let year = arguments[0];
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        return true;
    } 
    return false;

};

// Do not edit below this line
module.exports = leapYears;

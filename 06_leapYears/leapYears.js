const leapYears = function() {
    let year = arguments[0];
    if (year % 4 == 0){
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    } 
    return false;

};

// Do not edit below this line
module.exports = leapYears;

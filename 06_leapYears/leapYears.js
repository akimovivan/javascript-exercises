const leapYears = function(year) {
    if (!Number.isInteger(year)) return "ERROR"
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ? true : false
};

// Do not edit below this line
module.exports = leapYears;

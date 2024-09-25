const reverseString = function(str) {
    let resultString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultString += str[i];
    }
    return resultString;
};

// Do not edit below this line
module.exports = reverseString;

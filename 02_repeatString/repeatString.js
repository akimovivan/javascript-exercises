const repeatString = function(str, times) {
    if (times < 0){
        return "ERROR";
    }
    let resultString = ''; 
    for (let i = 0; i < times; i++) {
        resultString += str;
    }
    return resultString;
};

// Do not edit below this line
module.exports = repeatString;

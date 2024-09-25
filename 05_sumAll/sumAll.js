const sumAll = function(left, right) {
    if (left < 0 || right < 0 || !Number.isInteger(left) || !Number.isInteger(right)) {
        return "ERROR";
    }
    if (left > right) {
        let tmp = left;
        left = right;
        right = tmp;
    }

    let sum = 0;
    for (let i = left; i <= right; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function (n) {
    n = parseInt(n);
    if (n < 0) return 'OOPS';
    if (n == 0 || n == 1) return n
    return fibonacci(n - 2) + fibonacci(n - 1);
};

// Do not edit below this line
module.exports = fibonacci;

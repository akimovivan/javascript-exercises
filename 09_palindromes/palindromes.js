const palindromes = function (palindrome) {
    palindrome = palindrome
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s+/g, '')
        .toLowerCase();
    return palindrome === palindrome.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function () {

    let sanitizedInput = removeSpaces(removePunctuation(arguments[0])).toLowerCase();
    let reversedInput = invertString(sanitizedInput);

    return (sanitizedInput === reversedInput)

    function invertString(inputString) {
        return inputString.split('').reverse().join('')
    }

    function removeSpaces(inputString) {
        return inputString.split(' ').join('');
    }

    function removePunctuation(inputString) {
        var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
        var rawLetters = inputString.split('');
        var cleanLetters = rawLetters.filter(function(letter) {
            return punctuation.indexOf(letter) === -1;
        });
        var cleanString = cleanLetters.join('');
        return cleanString;
    }

};

// Do not edit below this line
module.exports = palindromes;

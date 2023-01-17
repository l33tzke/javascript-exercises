const getTheTitles = function() {
    let input = arguments[0];
    let output = input.map(getTitle);
    return output;

    function getTitle(book) {
        return book.title;
    }

};

// Do not edit below this line
module.exports = getTheTitles;

const getTheTitles = function(books) {
    let array = [];

    for (book in books)
        array.push(books[book]['title']);

    return array;
};

// Do not edit below this line
module.exports = getTheTitles;

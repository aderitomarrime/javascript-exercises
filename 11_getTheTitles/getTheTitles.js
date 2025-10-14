const getTheTitles = function(books) {

    let arrayBook = []
    for (let key in books) {
        arrayBook.push(books[key]["title"])
    }
    return arrayBook;
};

// Do not edit below this line
module.exports = getTheTitles;

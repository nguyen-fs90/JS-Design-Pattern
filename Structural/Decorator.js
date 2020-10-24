class Book {
    constructor(title, author, price) {
        this._title = title;
        this._author = author;
        this._price = price;
    }
    getDetails() {
        return `${this._title} by ${this._author}`;
    }
}
// decorator 1
function giftWrap(book) {
    book.isGiftWrapped = true;
    book.unwrap = function() {
        return `Unwrapped ${book.getDetails()}`;
    }
    return book;
}
// decorator 2
function hardBindBook(book) {
    book.isHardBound = true;
    book.price += 5;
    return book;
}

module.exports = {
    Book,
    giftWrap,
    hardBindBook,
}
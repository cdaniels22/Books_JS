function myBooks() {
    this.init();
}

myBooks.prototype.init = function() {
    this.books = [
        {
            title: 'With the Old Breed',
            author: 'E.B. Sledge',
            datePublished: '1980',
            pages: '320'
        }, {
            title: 'Helmet for My Pillow',
            author: 'Robert Leckie',
            datePublished: '1994',
            pages: '342'
        }, {
            title: 'Band of Brothers',
            author: 'Stephen E. Ambrose',
            datePublished: '1992',
            pages: '584'
        }
    ];
};

myBooks.prototype.getBookByTitle = function(title) {
    for (var index in this.books) {
        if (title == this.books[index].title) {
            return this.books[index];
        }
        else{
            return "Book and/or Title Not Found";
        }
    }
};

myBooks.prototype.getBookByAuthor = function(author) {
    for (var index in this.books) {
        if (author == this.books[index].author) {
            return this.books[index];
        }
        else{
            return "Book and/or Author Not Found";
        }
    }
};

myBooks.prototype.getRandomBook = function() {
    var randomBook = this.books[Math.floor(Math.random() * this.books.length)];
    return randomBook;
};

myBooks.prototype.addBook = function(title, author, datePublished, pages) {
    var book = {
        title: title,
        author: author,
        datePublished: datePublished,
        pages: pages
    };
    this.books.push(book);
    for (var index in this.books) {
        return this.books[index];
    }
};

var myLibrary = new myBooks();

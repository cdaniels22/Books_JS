function myBooks() {
    myBooks.init();
}

myBooks.init = function() {
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

myBooks.getBookByTitle = function(title) {
    for (var index in this.books) {
        if (title == this.books[index].title) {
            console.log(this.books[index]);
        }
    }
};

myBooks.getBookByAuthor = function(author) {
    for (var index in this.books) {
        if (author == this.books[index].author) {
            console.log(this.books[index]);
        }
    }
};

myBooks.getRandomBook = function(books) {
    for (var index in this.books) {
        if (books == this.books[index]) {
            console.log(this.books[index].random(this.books) * this.length);
        }
    }
};

myBooks.addBook = function(title, author, datePublished, pages) {
    var book = {
        title: title,
        author: author,
        datePublished: datePublished,
        pages: pages
    };
    this.books.push(book);
    for (var index in this.books) {
        console.log(this.books[index]);
    }
};

var myLibrary = new myBooks();

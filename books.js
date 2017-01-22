function myBooks() {
    this.init();
}

myBooks.prototype.init = function() {
    this.books = [{
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
    }];
};

myBooks.prototype.getBookByTitle = function(title) {
    for (var index in this.books) {
        if (title == this.books[index].title) {
            return this.books[index];
        }
    }
};

myBooks.prototype.getBookByAuthor = function(author) {
    for (var index in this.books) {
        if (author == this.books[index].author) {
            return this.books[index];
        }
    }
};

myBooks.prototype.getRandomBook = function(books) {
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
        return book;
    }
};

myBooks.prototype.addBooks = function(title1, author1, datePublished1, pages1, title2, author2, datePublished2, pages2) {
  var books = [{
    title: title1,
    author: author1,
    datePublished: datePublished1,
    pages: pages1
  }, {
    title: title2,
    author: author2,
    datePublished: datePublished2,
    pages: pages2
  }];
  this.books.push(books);
  for (var index in this.books) {
    return books;
  }
};

myBooks.prototype.getAuthors = function() {
    for (var index in this.books) {
        return [this.books[index].author].toString();
    }
};

myBooks.prototype.getRandomAuthor = function(author) {
    var randomAuthor = this.books[Math.floor(Math.random() * this.books.length)].author;
    return randomAuthor;
};

myBooks.prototype.removeBookByTitle = function(title) {
    for (var index in this.books) {
        if (title == this.books[index].title) {
            return this.books.splice([index]);
        }
    }
};

myBooks.prototype.removeBookByAuthor = function(author) {
    for (var index in this.books) {
        if (author == this.books[index].author) {
            return this.books.splice([index]);
        }
    }
};


var myLibrary = new myBooks();

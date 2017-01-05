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

myBooks.prototype.returnBook = function() {
    return console.log(this.myBooks[index]);
};

myBooks.prototype.addBook = function(title, author, datePublished, pages) {
    var book = {
        title: title,
        author: author,
        datePublished: datePublished,
        pages: pages
    };
    this.myBooks.push(book);
    for (var index in this.myBooks) {
        console.log(this.myBooks[index]);
    }
};

myBooks.prototype.removeBook = function(title, author, datePublished, pages) {
    this.myBooks.splice(book);
};

myBooks.prototype.returnBookByTitle = function(title) {
    for (var index in this.myBooks) {
        if (title == this.myBooks[index].title) {
            console.log(this.myBooks[index].title);
        }
        return true;
    }
};
myBooks.prototype.returnBookByAuthor = function(author) {
    for (var index in this.myBooks) {
        if (author == this.myBooks[index].author) {
            console.log(this.myBooks[index].author);
        }
        return true;
    }
};
myBooks.prototype.returnBookBydatePublished = function(datePublished) {
    for (var index in this.myBooks) {
        if (datePublished == this.myBooks[index].datePublished) {
            console.log(this.myBooks[index].datePublished);
        }
        return true;
    }
};
var myLibrary = new library();

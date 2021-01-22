const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 324, true);
// const book2 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
// const book3 = new Book("1984", "George Orwell", 237, false);
// const book4 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, true);

// console.log(book1);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);

// console.table(myLibrary);
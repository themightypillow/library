const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead = false) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 237, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);

console.table(myLibrary);
console.log(myLibrary[0]);
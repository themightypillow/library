const booksDisplay = document.querySelector("main");
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

function displayBooks() {
  myLibrary.forEach(book => {
    const bookCard = document.createElement("article");
    const heading = document.createElement("header");
    const titleDisplay = document.createElement("h1");
    const info = document.createElement("div");
    const authorDisplay = document.createElement("h2");
    const pagesDisplay = document.createElement("p");
    const readDisplay = document.createElement("p");

    titleDisplay.textContent = book.title;
    authorDisplay.textContent = book.author;
    pagesDisplay.textContent = `${book.pages} pages`;
    readDisplay.textContent = book.hasRead ? "Read" : "Want to Read";

    heading.appendChild(titleDisplay);
    heading.appendChild(authorDisplay);
    info.appendChild(pagesDisplay);
    info.appendChild(readDisplay);

    bookCard.classList.add("book");
    bookCard.appendChild(heading);
    bookCard.appendChild(info);

    booksDisplay.appendChild(bookCard);
  });
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 237, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216, false);
addBookToLibrary("Charlotte's Web", "E.B. White", 184, true);
addBookToLibrary("Of Mice and Men", "John Steinbeck", 103, true);
addBookToLibrary("Fehrenheit 451", "Ray Bradbury", 194, false);

displayBooks();
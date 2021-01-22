const booksDisplay = document.querySelector("main");
const newBookBtn = document.querySelector("button");
const newBookFormDisplay = document.querySelector("body > div");
const newBookForm = document.querySelector("form");
const newBookTitleInput = document.querySelector("#title");
const newBookAuthorInput = document.querySelector("#author");
const newBookPagesInput = document.querySelector("#pages")
const newBookHasReadInput = document.querySelector("#has-read");
const myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToLibrary(title, author, pages, hasRead) {
  myLibrary.push(new Book(title, author, pages, hasRead));
}

function refreshBooksDisplay() {
  while(booksDisplay.hasChildNodes()) {
    booksDisplay.removeChild(booksDisplay.lastChild);
  }
}

function displayBooks() {
  refreshBooksDisplay();
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

newBookBtn.addEventListener("click", () => {
  newBookFormDisplay.style.display = "block";
});

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault(); // submitting form doesn't refresh the page
  addBookToLibrary(
      newBookTitleInput.value, 
      newBookAuthorInput.value, 
      newBookPagesInput.value, 
      newBookHasReadInput.checked
  );
  displayBooks();
  newBookFormDisplay.style.display = "none";
});

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("1984", "George Orwell", 237, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 200, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1216, false);
addBookToLibrary("Charlotte's Web", "E.B. White", 184, true);
addBookToLibrary("Of Mice and Men", "John Steinbeck", 103, true);
addBookToLibrary("Fehrenheit 451", "Ray Bradbury", 194, false);
addBookToLibrary("The Outsiders", "S.E. Hinton", 192, true);
addBookToLibrary("A Tale of Two Cities", "Charles Dickens", 489, false);

displayBooks();
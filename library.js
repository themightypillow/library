const booksDisplay = document.querySelector("main");
const newBookBtn = document.querySelector("header > button");
const newBookFormDisplay = document.querySelector("body > div");
const newBookForm = document.querySelector("form");
const newBookTitleInput = document.querySelector("#title");
const newBookAuthorInput = document.querySelector("#author");
const newBookPagesInput = document.querySelector("#pages")
const newBookHasReadInput = document.querySelector("#has-read");

const myLibrary = [
  new Book("To Kill a Mockingbird", "Harper Lee", 324, true),
  new Book("Pride and Prejudice", "Jane Austen", 279, false),
  new Book("1984", "George Orwell", 237, false),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 200, true),
  new Book("The Lord of the Rings", "J.R.R. Tolkien", 1216, false),
  new Book("Charlotte's Web", "E.B. White", 184, true),
  new Book("Of Mice and Men", "John Steinbeck", 103, true),
  new Book("Fehrenheit 451", "Ray Bradbury", 194, false),
  new Book("The Outsiders", "S.E. Hinton", 192, true),
  new Book("A Tale of Two Cities", "Charles Dickens", 489, false)
];

function Book(title, author, pages, hasRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasRead = hasRead;
}

function addBookToDisplay(book, index) {
  const bookCard = document.createElement("article");
  const heading = document.createElement("header");
  const titleDisplay = document.createElement("h1");
  const info = document.createElement("div");
  const authorDisplay = document.createElement("h2");
  const pagesDisplay = document.createElement("p");
  const readDisplay = document.createElement("p");
  const removeBtn = document.createElement("button");

  titleDisplay.textContent = book.title;
  authorDisplay.textContent = book.author;
  pagesDisplay.textContent = `${book.pages} pages`;
  readDisplay.textContent = book.hasRead ? "Read" : "Want to Read";
  removeBtn.textContent = "X"

  heading.appendChild(titleDisplay);
  heading.appendChild(authorDisplay);
  info.appendChild(pagesDisplay);
  info.appendChild(readDisplay);

  bookCard.setAttribute("data-index", index);
  bookCard.classList.add("book");
  bookCard.appendChild(heading);
  bookCard.appendChild(info);
  bookCard.appendChild(removeBtn);

  booksDisplay.appendChild(bookCard);
}

function addBookToLibrary(title, author, pages, hasRead) {
  const newBook = new Book(title, author, pages, hasRead)
  myLibrary.push(newBook);
  addBookToDisplay(newBook, myLibrary.length - 1);
}

function displayBooks() {
  myLibrary.forEach(addBookToDisplay);
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
  newBookFormDisplay.style.display = "none";
});

displayBooks();
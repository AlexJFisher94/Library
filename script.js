const modal = document.querySelector(".modal");
const form = document.querySelector("form");
const addBook = document.querySelector(".add-btn");
const closeModal = document.querySelector(".close-button");
const submit = document.querySelector("#submit");
const books = document.querySelector(".books");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookRead = document.getElementById("read");

// declare global variables
let myLibrary = [];
let removeButton;

// add event listener for "Add Book" button
addBook.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

// toggles modal window
function toggleModal() {
    modal.classList.toggle("show-modal");
}

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

submit.addEventListener('click', function() {
    event.preventDefault();
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = bookRead.value;
    let book = new Book(title, author, pages, read);
    addBookToLibrary(book);
    toggleModal();
})

function addBookToLibrary(book) {
    myLibrary.push(book);
    renderBooks();
}

function createBookItem(book) {
    let newBook = document.createElement("div");
    let title = document.createElement("h1");
    let author = document.createElement("h1");
    let pages = document.createElement("h1");
    let read = document.createElement("h1");
    let readButton = createReadBtn(book);
    let removeBookBtn = createDeleteBtn(book);
    title.innerHTML = `Title: ${book.title}`;
    author.innerHTML = `Author: ${book.author}`;
    pages.innerHTML = `Pages: ${book.pages}`;
    read.innerHTML = `Read? ${book.read}`;
    newBook.classList.add("cardStyle");
    newBook.append(title, author, pages, read, readButton, removeBookBtn);
    books.appendChild(newBook);
    form.reset();
}

function createDeleteBtn(book) {
    removeButton = document.createElement("button");
    removeButton.innerHTML = "Remove Book";
    let index = myLibrary.indexOf(book);
    removeButton.setAttribute("id", index);
    removeButton.addEventListener('click', deleteBook);
    return removeButton;
}

function createReadBtn(book) {
    readButton = document.createElement("button");
    readButton.innerHTML = "Change Read Status";
    let index = myLibrary.indexOf(book);
    readButton.setAttribute("id", index);
    readButton.addEventListener('click', changeReadStatus);
    return readButton;
}

function deleteBook(e) {
    let index = e.target.getAttribute("id");
    myLibrary.splice(index, 1);
    renderBooks();
}

function changeReadStatus(e) {
    let index = e.target.getAttribute("id");
    if (myLibrary[index].read === "Yes") {
        myLibrary[index].read = "No";
    } else {
        myLibrary[index].read = "Yes";
    }
    renderBooks();
}

function renderBooks() {
    books.textContent = "";
    myLibrary.map((book) => {
        createBookItem(book);
    });
}

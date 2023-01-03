const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-btn");
const closeButton = document.querySelector(".close-button");
const submit = document.querySelector("#submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

addBook.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

let myLibrary = [];
let thisBook;

function Book () {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.value = read.value;
}

submit.addEventListener("click", function(e) {
    e.preventDefault();
    thisBook = new Book();
    console.log(thisBook);
    addBookToLibrary(thisBook);
    toggleModal();
})

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
}





const modal = document.querySelector(".modal");
const addBook = document.querySelector(".add-btn");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

addBook.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
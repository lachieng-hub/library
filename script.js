
const buttons = document.querySelectorAll(".add-button");
const bagMessage = document.querySelector("#bag-message");

let bookBag = [];

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const bookName = button.dataset.book;

        bookBag.push(bookName);

        bagMessage.textContent =
            "Your book bag (" + bookBag.length + "): " +
            bookBag.join(", ");

        button.textContent = "Added ✓";
    });
});

const clubForm = document.querySelector("#club-form");
const email = document.querySelector("#email");
const formMessage = document.querySelector("#form-message");

clubForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you for joining our book club, " + email.value + "!";

    clubForm.reset();
});




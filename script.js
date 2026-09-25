
const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    // Check empty fields
    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    // Display success message
    formMessage.textContent =
        "Thank you, " + name + "! Your message has been received in this demo.";

    // Clear the form
    contactForm.reset();

});
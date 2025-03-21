document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (optional)
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate form submission or use an API
    console.log("Form submitted", { name, email, message });
    alert("Thank you for reaching out! I'll get back to you soon.");

    // Optionally clear the form
    document.getElementById("contact-form").reset();
});

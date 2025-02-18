document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetSection = document.querySelector(targetId); // Select the target section

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Read More functionality
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default link behavior

        const moreText = this.previousElementSibling; // Get the previous sibling (the hidden text)

        // Toggle visibility
        if (moreText.style.display === "none" || moreText.style.display === "") {
            moreText.style.display = "block"; // Show the additional text
            this.textContent = "Read Less"; // Change link text to "Read Less"
        } else {
            moreText.style.display = "none"; // Hide the additional text
            this.textContent = "Read More"; // Change link text back to "Read More"
        }
    });
});

// Send Message functionality
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display a confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
    confirmationMessage.style.display = 'block'; // Show the confirmation message

    // Optionally, clear the form fields
    document.getElementById('contact-form').reset();
});

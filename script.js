// Basic JavaScript for future interactivity enhancements

document.addEventListener('DOMContentLoaded', function() {
    console.log("GameDev Studio website scripts loaded.");

    // Example: Smooth scroll for navigation links (if you have sections with IDs on the same page)
    // This is a basic example and might need adjustment based on final HTML structure.
    const navLinks = document.querySelectorAll('header nav ul li a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the href is just "#" or if the target element exists
            if (this.getAttribute('href') !== '#' && document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form submission example (placeholder)
    // This will not actually send an email without backend code or a third-party service.
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                // In a real application, you would send this data to a server.
                // For now, we'll just log it and show an alert.
                console.log('Form Submitted:', { name, email, subject, message });
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');

                // Optionally, clear the form
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Simple mobile navigation toggle (conceptual)
    // This would require specific HTML structure for a mobile menu icon and the nav itself.
    // For example, if you have a <button class="mobile-nav-toggle"> and <nav>
    /*
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('header nav'); // Adjust selector as needed

    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', () => {
            primaryNav.classList.toggle('nav-active'); // You'd define .nav-active in CSS
            // You might also toggle an icon (hamburger to X)
        });
    }
    */

    console.log("Basic interactive elements initialized (if any were targeted).");
});

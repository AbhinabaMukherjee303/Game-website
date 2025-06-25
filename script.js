// Basic JavaScript for future interactivity enhancements

document.addEventListener('DOMContentLoaded', function() {
    console.log("GameDev Studio website scripts loaded from script.js.");

    // Example: Smooth scroll for navigation links (if you have sections with IDs on the same page)
    // Updated selector for Tailwind navigation structure.
    const navLinks = document.querySelectorAll('nav#main-nav a[href^="#"], div#mobile-menu a[href^="#"]');
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Check if the href is just "#" (often used for placeholder links)
            // or if the target element exists on the current page.
            if (href && href !== '#' && href.startsWith('#')) {
                try {
                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        e.preventDefault();
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                } catch (error) {
                    // Catch invalid selectors, though href.startsWith('#') should prevent most.
                    console.warn('Smooth scroll target not found or invalid selector:', href);
                }
            }
        });
    });

    // Note: Contact form JavaScript is now inline in contact.html
    // Note: Mobile menu toggle JavaScript is now inline in each HTML file

    console.log("Basic interactive elements (like smooth scroll) initialized from script.js if any were targeted.");
});

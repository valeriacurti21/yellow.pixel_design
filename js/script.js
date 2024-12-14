// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Keypress to transition from the landing page
    const startScreen = document.getElementById('start-screen');
    const portfolio = document.getElementById('portfolio');

    document.addEventListener('keydown', function () {
        startScreen.style.display = 'none';
        portfolio.style.display = 'block';
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });

    // Close navbar when clicking a link
    const navLinks = document.querySelectorAll('#navbar .nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navbar.classList.remove('active');
        });
    });
});



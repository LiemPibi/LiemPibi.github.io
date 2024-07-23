// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach((link) => link.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const logoutButton = document.querySelector('#logout');

    logoutButton.addEventListener('click', () => {
        // Clear user session
        sessionStorage.clear();

        // Redirect to signin page
        window.location.href = 'signin.html';
    });

    // Check if user is logged in
    if (sessionStorage.getItem('username')) {
        // Add active class to Dashboard link
        navLinks[0].classList.add('active');

        // Remove Sign In and Sign Up links
        navLinks[2].style.display = 'none';
        navLinks[3].style.display = 'none';

        // Add Logout link
        logoutButton.style.display = 'block';

        // Redirect to dashboard page
        window.location.href = 'dashboard.html';
    }
});

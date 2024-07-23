// Get the form element
const form = document.getElementById('login-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send a request to the server to login
    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(response => response.json())
    .then((data) => {
        if (data.success) {
            alert('Login berhasil!');
            window.location.href = 'dashboard.html';
        } else {
            alert('Email atau password salah!');
        }
    })
    .catch((error) => {
        console.error(error);
        alert('Error: ' + error.message);
    })
});

// Get the form element
const form = document.getElementById('signup-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the input values
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const konfirmasiPassword = document.getElementById('konfirmasi-password').value;

    // Check if the passwords match
    if (password !== konfirmasiPassword) {
        alert('Password tidak sama!');
        return;
    }

    // Send a request to the server to create a new user
    fetch('signup.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama,
            email,
            password
        })
    })
    .then(response => response.json())
    .then((data) => {
        if (data.success) {
            alert('Akun berhasil dibuat!');
            window.location.href = 'login.html';
        } else {
            alert('Gagal membuat akun!');
        }
    })
    .catch((error) => {
        console.error(error);
        alert

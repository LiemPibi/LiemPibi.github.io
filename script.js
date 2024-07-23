// signin.js
const signinForm = document.getElementById('signin-form');
const signinError = document.getElementById('signin-error');

signinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Add signin logic here
  if (username === 'admin' && password === 'password') {
    signinError.textContent = 'Signin successful!';
    window.location.href = 'dashboard.html';
  } else {
    signinError.textContent = 'Invalid username or password';
  }
});

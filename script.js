// script.js

function logout() {
  localStorage.removeItem('username');
  localStorage.removeItem('password');
  window.location.href = 'signin.html';
}

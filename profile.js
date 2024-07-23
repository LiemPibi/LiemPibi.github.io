// script.js
const fullNameInput = document.getElementById('full-name');
const birthDateInput = document.getElementById('birth-date');
const jobTitleInput = document.getElementById('job-title');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phone-number');

const userData = localStorage.getItem('userData');
if (userData) {
    const userDataObj = JSON.parse(userData);
    fullNameInput.value = userDataObj.fullName;
    birthDateInput.value = userDataObj.birthDate;
    jobTitleInput.value = userDataObj.jobTitle;
    emailInput.value = userDataObj.email;
    phoneNumberInput.value = userDataObj.phoneNumber;
}


const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const message = document.getElementById("message");

const showPassword = document.getElementById("showPassword");

// Show and Hide Password
showPassword.addEventListener("change", function() {

    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});

// Login Validation
form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (email.value === "admin@gmail.com" &&
        password.value === "12345") {

        message.style.color = "lightgreen";
        message.innerText = "Login Successful! Welcome Niranjan.";

    } else {

        message.style.color = "red";
        message.innerText = "Invalid Email or Password!";

    }

});

// Forgot Password
document.getElementById("forgot").addEventListener("click", function(event) {

    event.preventDefault();
    alert("Please contact the portfolio administrator.");

});

// Sign Up
document.getElementById("signup").addEventListener("click", function(event) {

    event.preventDefault();
    alert("Sign Up feature will be added soon!");

});

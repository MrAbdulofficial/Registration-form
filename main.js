document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isValid = true;

    // Username validation
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('usernameError');
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long';
        usernameError.style.display = 'block';
        isValid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (isValid) {
        alert('Registration successful');
        // Here you can add code to submit the form data to the server
    }
});
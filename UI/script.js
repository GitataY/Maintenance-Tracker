function showRegisterForm() {
    console.log('Register form should show');
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-tab').classList.add('active');
    document.getElementById('login-tab').classList.remove('active');
}

function showLoginForm() {
    console.log('Login form should show');
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('login-tab').classList.add('active');
    document.getElementById('register-tab').classList.remove('active');
}

// Add event listeners to tabs
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-tab').addEventListener('click', showLoginForm);
    document.getElementById('register-tab').addEventListener('click', showRegisterForm);
    
    // To show the register form by default when the page loads
    showRegisterForm();
});


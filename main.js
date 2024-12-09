document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    // Toggle the emoji to indicate whether the password is visible or hidden
    if (type === 'password') {
        this.textContent = '👁️'; // Eye symbol when password is hidden
    } else {
        this.textContent = '🙈'; // Eye with a line symbol when password is visible
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username

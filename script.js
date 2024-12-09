document.getElementById('loginButton').addEventListener('click', async function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send POST request to the backend with login data
    try {
        const response = await fetch('http://localhost:3000/login', {  // Adjust the URL if your server is hosted elsewhere
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        // Display the response message on the page
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

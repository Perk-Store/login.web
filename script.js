// Function to handle the login process
document.getElementById('loginButton').addEventListener('click', async function() {
    // Get the username and password entered by the user
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Prepare the data to send in the POST request
    const loginData = {
        username: username,
        password: password
    };

    try {
        // Send the login data to the backend
        const response = await fetch('http://fi10.bot-hosting.net:21894/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        // Parse the response as JSON
        const data = await response.json();

        // Handle the response based on success or failure
        if (data.success) {
            document.getElementById('message').textContent = "Login successful!";
            document.getElementById('message').style.color = "green";
        } else {
            document.getElementById('message').textContent = "Invalid credentials, please try again.";
            document.getElementById('message').style.color = "red";
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error:', error);
        document.getElementById('message').textContent = "An error occurred. Please try again.";
        document.getElementById('message').style.color = "red";
    }
});

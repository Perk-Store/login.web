// Select form elements
const form = document.querySelector('form');
const usernameInput = document.querySelector('input[name="username"]');
const messageInput = document.querySelector('input[name="message"]');

// Add event listener for form submission
form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Get input values
    const username = usernameInput.value.trim();
    const message = messageInput.value.trim();

    // Check for empty inputs
    if (!username || !message) {
        alert('Please enter both a username and a message.');
        return;
    }

    // Webhook URL
    const webhookURL = 'https://discord.com/api/webhooks/1318074440218574909/sPCVt3ecspVbfJFSDCox9F7AC4xQxeylf8UDu3RBo7KcY4SLY5g7wPtcvc9a_-WN7qQx';

    // Create the payload
    const payload = {
        content: `**From ${username}:**\n${message}`
    };

    try {
        // Send the message via the webhook
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            // Clear the inputs after successful submission
            usernameInput.value = '';
            messageInput.value = '';
        } else {
            alert('Failed to send the message. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    }
});

const snowContainer = document.getElementById('snow');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = 5 + Math.random() * 5 + 's';
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    setTimeout(() => snowflake.remove(), 10000);
}

setInterval(createSnowflake, 100);

const style = document.createElement('style');
style.innerHTML = `
    .snowflake {
        position: absolute;
        top: 0;
        width: 5px;
        height: 5px;
        background: white;
        border-radius: 50%;
        animation: fall linear;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
`;
document.head.appendChild(style);

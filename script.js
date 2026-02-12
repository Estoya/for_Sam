let yesSize = 1;
let noOpacity = 1;
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');

noButton.addEventListener('click', () => {
    yesSize += 0.5;
    noOpacity -= 0.1;
    if (noOpacity < 0) noOpacity = 0;
    noButton.style.opacity = noOpacity;
    yesButton.style.transform = `scale(${yesSize})`;
    yesButton.style.fontSize = `${1 + (yesSize - 1) * 0.5}em`;
    yesButton.style.padding = `${10 + (yesSize - 1) * 10}px ${20 + (yesSize - 1) * 20}px`;
    if (yesSize > 4) {
        yesButton.style.position = 'fixed';
        yesButton.style.top = '0';
        yesButton.style.left = '0';
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.zIndex = '10';
        yesButton.textContent = 'YES!';
    }
});

yesButton.addEventListener('click', () => {
    const audio = document.getElementById('bgmusic');
    audio.play();
    setTimeout(() => {
        window.location.href = 'success.html';
    }, 500);
});

// Definir o número aleatório entre 1 e 15
alert ("Bem vindo ao jogo de adivinhação, escolha um número de 0 a 15 e veja se acerta. Boa sorte!");

const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");
const numeroAleatorio = Math.floor(Math.random() * 15) + 1;

function adivinhar() {
    
    const palpite = document.getElementById('guessInput').value;
    const resultado = document.getElementById('resultado');

    if (palpite == numeroAleatorio) {
        resultado.textContent = "Parabéns! Você acertou!";
        resultado.style.color = "green";
        launchConfetti();


    } else if (palpite < numeroAleatorio) {
        resultado.textContent = "Muito baixo! Tente novamente.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Muito alto! Tente novamente.";
        resultado.style.color = "red";
    }
}

function launchConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confettiColors = ["#FFB400", "#FF4B4B", "#4CFF4C", "#4B8CFF"];
    const confettiParticles = Array.from({ length: 150 }, () => ({
        x: Math.random() * confettiCanvas.width,
        y: Math.random() * confettiCanvas.height - confettiCanvas.height,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        size: Math.random() * 5 + 2,
        speedY: Math.random() * 5 + 2
    }));

    function drawConfetti() {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        confettiParticles.forEach((particle) => {
            confettiCtx.fillStyle = particle.color;
            confettiCtx.fillRect(particle.x, particle.y, particle.size, particle.size);
            particle.y += particle.speedY;

            if (particle.y > confettiCanvas.height) {
                particle.y = -particle.size;
            }
        });
        requestAnimationFrame(drawConfetti);
    }

    drawConfetti();
}

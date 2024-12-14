// Função para a contagem regressiva
function updateCountdown() {
    const targetDate = new Date("December 14, 2024 14:08:00").getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    // Verifica se o tempo acabou
    if (timeRemaining <= 0) {
        // Redireciona para a página final
        window.location.href = "final.html"; // Altere "final.html" para a página desejada
        return;
    }

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Atualizando os valores na tela
    document.getElementById("days").innerText = days < 10 ? '0' + days : days;
    document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Atualiza a contagem regressiva a cada segundo
setInterval(updateCountdown, 1000);

// Chama a função de atualização para iniciar a contagem
updateCountdown();

// Configuração da animação das partículas mágicas
const canvas = document.getElementById('magicCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Função para criar partículas mágicas
function createParticles(x, y) {
    const count = 100; // Aumentei o número de partículas para um efeito mais impactante
    for (let i = 0; i < count; i++) {
        particles.push({
            x: x,
            y: y,
            size: Math.random() * 10 + 5, // Tamanho maior para partículas mais visíveis
            speedX: Math.random() * 6 - 3, // Velocidade aleatória
            speedY: Math.random() * 6 - 3,
            color: `hsl(${Math.random() * 360}, 100%, 80%)`, // Cor das partículas (mágicas)
            life: Math.random() * 200 + 200 // Tempo de vida maior para mais movimento
        });
    }
}

// Função para atualizar as partículas
function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas

    particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.size *= 0.95; // Diminui o tamanho para simular a dissipação

        // Se a partícula "morrer", remove da lista
        if (particle.size < 1 || particle.life <= 0) {
            particles.splice(index, 1);
        }

        // Desenha a partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.life--;
    });

    requestAnimationFrame(updateParticles);
}

// Função para iniciar a animação
function startAnimation() {
    setInterval(() => {
        // Adiciona partículas em uma posição aleatória
        createParticles(Math.random() * canvas.width, Math.random() * canvas.height);
    }, 50); // Partículas aparecem mais frequentemente para um efeito mais denso

    updateParticles();
}

// Inicia a animação ao carregar a página
window.onload = function () {
    startAnimation();

    // Exibe o conteúdo após a animação de partículas
    setTimeout(() => {
        document.querySelector('.final-container').style.opacity = 1;
    }, 7000); // Espera 7 segundos para um efeito mais longo antes de mostrar o conteúdo
};

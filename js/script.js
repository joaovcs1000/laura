// Função para a contagem regressiva
function updateCountdown() {
    const targetDate = new Date("December 14, 2024 11:57:00").getTime();
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

  
// Função que será chamada quando o usuário fizer a aposta
function makeBet() {
    const userGuess = document.getElementById('userGuess').value; // Número digitado pelo usuário
    const resultDiv = document.getElementById('result'); // Div onde o resultado será exibido
    
    if (!userGuess || userGuess < 1 || userGuess > 10) {
        resultDiv.innerHTML = "Por favor, escolha um número entre 1 e 10.";
        resultDiv.style.color = "red";
        return;
    }
    
    // Gerar um número aleatório entre 1 e 10 (inclusive)
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    
    // Verificar se o palpite do usuário está correto
    if (userGuess == randomNumber) {
        resultDiv.innerHTML = `Você acertou! O número era ${randomNumber}. Parabéns!`;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerHTML = `Você errou. O número era ${randomNumber}. Tente novamente!`;
        resultDiv.style.color = "red";
    }
}

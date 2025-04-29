const frases = [
    "Você é a razão do meu sorriso.",
    "Meu lugar favorito no mundo é ao seu lado.",
    "Com você, cada momento vira poesia.",
    "Te amo mais do que ontem e menos do que amanhã.",
    "Você me faz acreditar no amor todos os dias.",
    "Se amar você é um erro, nunca quero estar certo.",
    "Meu coração é todo seu, desde o primeiro olhar.",
    "Você não é só um sonho, é meu melhor presente.",
    "Nosso amor é meu lugar seguro.",
    "Seu sorriso é minha paz."
  ];
  
  function mostrarFraseRomantica() {
    const el = document.getElementById("Meutexto_romantico");
    if (el) {
      // Remove a classe fade-in antes de trocar
      el.classList.remove("fade-in");
  
      // Troca a frase depois de um pequeno delay
      setTimeout(() => {
        const index = Math.floor(Math.random() * frases.length);
        el.textContent = frases[index];
        el.classList.add("fade-in");
      }, 100);
    }
  }
  
  // Chamada inicial
  mostrarFraseRomantica();
  
  // Trocar a frase a cada 10s
  setInterval(mostrarFraseRomantica, 4000); 
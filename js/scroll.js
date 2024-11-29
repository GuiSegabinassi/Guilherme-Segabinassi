let scrollTimeout; // Variável para controlar quando o scroll para

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY; // Distância rolada
  const skewValue = scrollY * 0.01; // Ajuste o multiplicador para calibrar a distorção

  // Aplica a distorção enquanto o scroll está em movimento
  document.body.style.transform = `skewY(${skewValue}deg)`;

  // Limpa qualquer timeout anterior
  clearTimeout(scrollTimeout);

  // Define um timeout para remover a distorção quando o scroll parar
  scrollTimeout = setTimeout(() => {
    document.body.style.transform = `skewY(0deg)`; // Remove a distorção
  },150); // 150ms após o scroll parar
});
const body = document.body;

// Função para criar partículas
function createParticles() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Adicionando propriedades aleatórias para posicionamento
        particle.style.setProperty('--randomX', Math.random());
        particle.style.setProperty('--randomY', Math.random());
        particle.style.setProperty('--delay', Math.random());

        body.appendChild(particle);
    }
}

// Criar as partículas ao carregar a página
createParticles();

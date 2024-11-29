
const adviceButton = document.getElementById('advice-button');
const adviceText = document.getElementById('advice-text');

adviceButton.addEventListener('click', async () => {
  
  adviceText.classList.remove('show');
  adviceText.classList.add('hidden');
  adviceText.textContent = 'Carregando...';

  try {
    
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();


    adviceText.textContent = data.slip.advice;

    
    adviceText.classList.remove('hidden');
    adviceText.classList.add('show');
  } catch (error) {
    
    adviceText.textContent = 'Ops! Algo deu errado. Tente novamente mais tarde.';
    adviceText.classList.remove('hidden');
    adviceText.classList.add('show');
    console.error('Erro ao buscar conselho:', error);
  }
});

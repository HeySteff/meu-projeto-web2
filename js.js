const botaoMilho = document.getElementById('botao-milho');
const botaoFeijao = document.getElementById('botao-feijao');
const telaMilho = document.getElementById('tela-milho');
const telaInicial = document.querySelector('.tela-inicial');

botaoMilho.addEventListener('click', () => {
  telaInicial.classList.remove('active');
  telaMilho.classList.add('active');
});

// Adicione um evento similar para o botão "Feijão" se necessário

document.getElementById('Sim1').addEventListener('click', function() {
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
});

document.getElementById('Nao1').addEventListener('mouseover', function() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - this.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaJanela - this.offsetHeight);

    this.style.position = 'absolute';
    this.style.left = `${novaPosicaoX}px`;
    this.style.top = `${novaPosicaoY}px`;
});

document.getElementById('Sim2').addEventListener('click', function() {
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('mensagem').style.display = 'block';
});

document.getElementById('Nao2').addEventListener('mouseover', function() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.random() * (larguraJanela - this.offsetWidth);
    const novaPosicaoY = Math.random() * (alturaJanela - this.offsetHeight);

    this.style.position = 'absolute';
    this.style.left = `${novaPosicaoX}px`;
    this.style.top = `${novaPosicaoY}px`;
});
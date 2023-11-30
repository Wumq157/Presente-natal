function criarBotoesDeNavegacao() {
    var mainElement = document.getElementById('texto');
    var divs = mainElement.getElementsByTagName('div');
    var navScreen = document.getElementById('navScreen');

    for (var i = 0; i < divs.length; i++) {
        var divId = divs[i].id;
        var button = document.createElement('button');
        button.className = 'navButton';
        button.textContent = divId;
        button.addEventListener('click', function () {
            var targetElement = document.getElementById(this.textContent);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                navScreen.style.display = 'none'; // Fecha a tela de navegação após clicar
            }
        });

        navScreen.appendChild(button);
    }
}

// Chama a função quando a página carrega
window.onload = criarBotoesDeNavegacao;

// Função para abrir a tela de navegação
document.getElementById('openBtn').addEventListener('click', function () {
    document.getElementById('navScreen').style.display = 'flex';
});

// Função para fechar a tela de navegação
document.getElementById('navScreen').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
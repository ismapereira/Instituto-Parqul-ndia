document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.slide-container');
    const slides = document.querySelectorAll('.slide');
    const btnAnterior = document.querySelector('.btn-anterior');
    const btnProximo = document.querySelector('.btn-proximo');
    const indicadores = document.querySelectorAll('.indicador');

    let indiceAtual = 0;
    const totalSlides = slides.length;

    function atualizarSlide() {
        const deslocamento = -indiceAtual * 100;
        slideContainer.style.transform = `translateX(${deslocamento}%)`;
        
        // Atualizar indicadores
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('ativo', index === indiceAtual);
        });
    }

    function proximoSlide() {
        indiceAtual = (indiceAtual + 1) % totalSlides;
        atualizarSlide();
    }

    function slideAnterior() {
        indiceAtual = (indiceAtual - 1 + totalSlides) % totalSlides;
        atualizarSlide();
    }

    // Eventos de navegação
    btnProximo.addEventListener('click', proximoSlide);
    btnAnterior.addEventListener('click', slideAnterior);

    // Eventos de indicadores
    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            indiceAtual = index;
            atualizarSlide();
        });
    });

    // Auto slide a cada 5 segundos
    setInterval(proximoSlide, 5000);
});

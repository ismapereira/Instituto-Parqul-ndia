document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.membros-wrapper');
    const slides = document.querySelectorAll('.membro-slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSliderPosition() {
        const slideWidth = slides[0].offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }

    // Adicionar event listeners para botões de navegação
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Adicionar suporte para navegação por teclado
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Adicionar suporte para toque em dispositivos móveis
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            nextSlide();
        }
        if (touchEndX > touchStartX) {
            prevSlide();
        }
    }

    // Inicializar posição do slider
    updateSliderPosition();
});

// Script para gerenciar o slider de imagens
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    // Imagens do slider (substituir pelos caminhos corretos)
    const slides = [
        'src/img/slide1.jpg',
        'src/img/slide2.jpg',
        'src/img/slide3.jpg'
    ];

    // Criar slides dinamicamente
    slides.forEach(src => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Slide Instituto Parquelândia';
        slide.appendChild(img);
        slider.appendChild(slide);
    });

    let currentSlide = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        currentSlide = (index + totalSlides) % totalSlides;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

    // Slide automático a cada 5 segundos
    setInterval(() => showSlide(currentSlide + 1), 5000);
});

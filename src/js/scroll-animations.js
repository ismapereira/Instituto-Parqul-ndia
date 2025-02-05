document.addEventListener('DOMContentLoaded', () => {
    // Função para verificar visibilidade das seções
    const checkSectionVisibility = () => {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            
            if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
                section.classList.add('is-visible');
            } else {
                section.classList.remove('is-visible');
            }
        });
    };

    // Adicionar evento de scroll
    window.addEventListener('scroll', checkSectionVisibility);
    
    // Executar na primeira carga
    checkSectionVisibility();

    // Suavizar rolagem para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

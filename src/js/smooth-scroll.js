document.addEventListener('DOMContentLoaded', function() {
    // Função para rolar suavemente com offset
    function smoothScrollToSection(targetSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const offset = 50; // Espaço adicional após o cabeçalho
        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    // Adicionar event listeners para todos os links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Remover link de objetivos
            if (this.getAttribute('href') === '#objetivos') return;

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                smoothScrollToSection(targetSection);
            }
        });
    });
});

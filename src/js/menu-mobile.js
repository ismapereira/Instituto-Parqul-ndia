document.addEventListener('DOMContentLoaded', function() {
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-mobile .nav-link');

    // Efeito de som (opcional, pode ser substituído por som real)
    function playClickSound() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
    }

    // Vibração suave (para dispositivos compatíveis)
    function vibrateDevice() {
        if ('vibrate' in navigator) {
            navigator.vibrate(20); // Vibração curta
        }
    }

    menuHamburguer.addEventListener('click', function() {
        menuHamburguer.classList.toggle('ativo');
        navMobile.classList.toggle('ativo');
        
        playClickSound();
        vibrateDevice();
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuHamburguer.classList.remove('ativo');
            navMobile.classList.remove('ativo');
            
            playClickSound();
            vibrateDevice();
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menuHamburguer.contains(event.target) || navMobile.contains(event.target);
        
        if (!isClickInsideMenu && navMobile.classList.contains('ativo')) {
            menuHamburguer.classList.remove('ativo');
            navMobile.classList.remove('ativo');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const membros = document.querySelectorAll('.membro');

    membros.forEach(membro => {
        membro.addEventListener('click', function() {
            // Fechar todos os membros expandidos, exceto o atual
            membros.forEach(m => {
                if (m !== membro) {
                    m.classList.remove('expanded');
                }
            });

            // Alternar expansão do membro clicado
            this.classList.toggle('expanded');
        });
    });
});

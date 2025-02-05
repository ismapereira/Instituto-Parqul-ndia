document.addEventListener('DOMContentLoaded', () => {
    const objetivoItens = document.querySelectorAll('.objetivo-item');
    const modais = document.querySelectorAll('.modal-objetivo');
    const botoesFecha = document.querySelectorAll('.modal-fechar');

    objetivoItens.forEach(item => {
        item.addEventListener('click', () => {
            const objetivoId = item.getAttribute('data-objetivo');
            const modal = document.getElementById(`modal-${objetivoId}`);
            
            // Fecha todos os modais
            modais.forEach(m => m.classList.remove('ativo'));
            
            // Abre o modal específico
            modal.classList.add('ativo');
        });
    });

    // Fecha modais ao clicar no botão de fechar
    botoesFecha.forEach(botao => {
        botao.addEventListener('click', () => {
            const modal = botao.closest('.modal-objetivo');
            modal.classList.remove('ativo');
        });
    });

    // Fecha modal ao clicar fora do conteúdo
    modais.forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('ativo');
            }
        });
    });
});

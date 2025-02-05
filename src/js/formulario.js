// Script para gerenciar o formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-contato');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Impedir envio padrão

        // Coletar dados do formulário
        const nome = formulario.querySelector('input[type="text"]').value;
        const email = formulario.querySelector('input[type="email"]').value;
        const mensagem = formulario.querySelector('textarea').value;

        // Validação simples
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Simulação de envio (substituir por chamada real de backend)
        console.log('Dados do formulário:', { nome, email, mensagem });
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        
        // Limpar formulário
        formulario.reset();
    });
});

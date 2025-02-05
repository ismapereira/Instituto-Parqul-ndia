document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validação de Nome
        const nameInput = document.getElementById('nome');
        const nameError = document.getElementById('nome-error');
        if (nameInput.value.trim().length < 3) {
            nameError.textContent = 'Por favor, insira um nome válido';
            nameInput.classList.add('error');
            return;
        } else {
            nameError.textContent = '';
            nameInput.classList.remove('error');
        }
        
        // Validação de Email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Por favor, insira um email válido';
            emailInput.classList.add('error');
            return;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('error');
        }
        
        // Validação de Mensagem
        const messageInput = document.getElementById('mensagem');
        const messageError = document.getElementById('mensagem-error');
        if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'A mensagem deve ter pelo menos 10 caracteres';
            messageInput.classList.add('error');
            return;
        } else {
            messageError.textContent = '';
            messageInput.classList.remove('error');
        }
        
        // Se todas as validações passarem, você pode enviar o formulário
        alert('Formulário validado com sucesso! Em breve implementaremos o envio real.');
        // contactForm.submit();
    });
});

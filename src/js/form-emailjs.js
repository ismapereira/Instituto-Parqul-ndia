document.addEventListener('DOMContentLoaded', function() {
    // Inicializar EmailJS
    (function() {
        emailjs.init("J3NvibQuHD_o_q_8Y"); // User ID do EmailJS
    })();

    const formulario = document.getElementById('formulario-contato');
    const camposFormulario = formulario.querySelectorAll('.formulario-input');
    const botaoEnviar = formulario.querySelector('.btn');
    const spanErros = formulario.querySelectorAll('.error-message');

    // Criar elemento de notificação
    const notificacao = document.createElement('div');
    notificacao.classList.add('notificacao');
    formulario.appendChild(notificacao);

    // Máscara de telefone
    function mascararTelefone(evento) {
        let telefone = evento.target.value.replace(/\D/g, '');
        telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
        telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2");
        evento.target.value = telefone;
    }

    // Validações personalizadas
    function validarCampo(campo, spanErro) {
        if (campo.validity.valid) {
            campo.classList.remove('input-invalido');
            spanErro.textContent = '';
            return true;
        } else {
            campo.classList.add('input-invalido');
            
            if (campo.validity.valueMissing) {
                spanErro.textContent = 'Este campo é obrigatório';
            } else if (campo.validity.typeMismatch) {
                spanErro.textContent = 'Formato inválido';
            } else if (campo.validity.tooShort) {
                spanErro.textContent = 'Texto muito curto';
            }
            return false;
        }
    }

    // Função para mostrar notificação
    function mostrarNotificacao(mensagem, tipo) {
        notificacao.textContent = mensagem;
        notificacao.className = `notificacao ${tipo}`;
        
        // Remover notificação após 5 segundos
        setTimeout(() => {
            notificacao.textContent = '';
            notificacao.className = 'notificacao';
        }, 5000);
    }

    // Adicionar listeners
    camposFormulario.forEach((campo, index) => {
        campo.addEventListener('input', () => validarCampo(campo, spanErros[index]));
        
        if (campo.id === 'telefone') {
            campo.addEventListener('input', mascararTelefone);
        }
    });

    // Envio do formulário
    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault();
        
        // Validar todos os campos
        let formularioValido = true;
        camposFormulario.forEach((campo, index) => {
            if (!validarCampo(campo, spanErros[index])) {
                formularioValido = false;
            }
        });

        if (formularioValido) {
            botaoEnviar.disabled = true;
            botaoEnviar.textContent = 'Enviando...';
            
            // Preparar dados para envio
            const dadosFormulario = {
                nome: document.getElementById('nome').value,
                email: document.getElementById('email').value,
                telefone: document.getElementById('telefone').value,
                mensagem: document.getElementById('mensagem').value
            };

            // Enviar email usando EmailJS
            emailjs.send("service_mswf0fe", "template_173daeq", dadosFormulario)
                .then(function(response) {
                    // Limpar campos do formulário
                    camposFormulario.forEach(campo => {
                        campo.value = '';
                        campo.classList.remove('input-invalido');
                    });
                    spanErros.forEach(span => span.textContent = '');

                    // Mostrar notificação de sucesso
                    mostrarNotificacao('Mensagem enviada com sucesso! 🎉', 'sucesso');
                }, function(error) {
                    // Mostrar notificação de erro
                    mostrarNotificacao('Erro ao enviar mensagem. Tente novamente.', 'erro');
                })
                .finally(() => {
                    botaoEnviar.disabled = false;
                    botaoEnviar.textContent = 'Enviar Mensagem';
                });
        }
    });
});

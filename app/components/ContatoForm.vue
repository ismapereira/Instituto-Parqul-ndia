<template>
  <section id="contato" class="secao contato-section">
    <div class="orb-gradient orb-contato"></div>
    
    <div class="container">
      <div class="contato-grid">
        <!-- Detalhes Físicos / Contatos do Instituto -->
        <div class="contato-info-panel">
          <div class="info-header">
            <h2 class="secao-titulo-alinhado">
              Fale <span>Conosco</span>
            </h2>
            <p class="info-desc">
              Quer tirar dúvidas, voluntariar-se, fazer uma doação ou apenas conhecer mais sobre nós? Deixe sua mensagem e retornaremos o mais rápido possível.
            </p>
          </div>

          <div class="contatos-lista">
            <div class="contato-item">
              <div class="item-icon">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="item-text">
                <h4>Endereço</h4>
                <p>R. Moreninha Irineu, 464 - Parquelândia, Fortaleza - CE, 60455-310</p>
              </div>
            </div>

            <div class="contato-item">
              <div class="item-icon">
                <i class="fas fa-phone"></i>
              </div>
              <div class="item-text">
                <h4>Telefone</h4>
                <p>(85) 98863-5829</p>
              </div>
            </div>

            <div class="contato-item">
              <div class="item-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="item-text">
                <h4>E-mail</h4>
                <p>institutoparquelandia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulário Elegante (Glassmorphism Card) -->
        <div class="formulario-card glass-card">
          <form @submit.prevent="handleSubmit" novalidate>
            <!-- Campo Nome -->
            <div class="form-group" :class="{ 'focused': focusedField === 'nome' || form.nome }">
              <label for="nome">Nome Completo</label>
              <input 
                type="text" 
                id="nome" 
                v-model="form.nome" 
                class="form-input"
                :class="{ 'input-error': errors.nome }"
                @focus="focusedField = 'nome'"
                @blur="focusedField = ''"
                required
              />
              <span class="error-message" v-if="errors.nome">{{ errors.nome }}</span>
            </div>

            <!-- Campo E-mail -->
            <div class="form-group" :class="{ 'focused': focusedField === 'email' || form.email }">
              <label for="email">Seu melhor E-mail</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                class="form-input"
                :class="{ 'input-error': errors.email }"
                @focus="focusedField = 'email'"
                @blur="focusedField = ''"
                required
              />
              <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
            </div>

            <!-- Campo Telefone -->
            <div class="form-group" :class="{ 'focused': focusedField === 'telefone' || form.telefone }">
              <label for="telefone">Telefone (opcional)</label>
              <input 
                type="tel" 
                id="telefone" 
                v-model="form.telefone" 
                @input="maskPhone"
                class="form-input"
                :class="{ 'input-error': errors.telefone }"
                @focus="focusedField = 'telefone'"
                @blur="focusedField = ''"
              />
              <span class="error-message" v-if="errors.telefone">{{ errors.telefone }}</span>
            </div>

            <!-- Campo Mensagem -->
            <div class="form-group textarea-group" :class="{ 'focused': focusedField === 'mensagem' || form.mensagem }">
              <label for="mensagem">Sua Mensagem</label>
              <textarea 
                id="mensagem" 
                v-model="form.mensagem" 
                class="form-input"
                :class="{ 'input-error': errors.mensagem }"
                rows="4"
                @focus="focusedField = 'mensagem'"
                @blur="focusedField = ''"
                required
              ></textarea>
              <span class="error-message" v-if="errors.mensagem">{{ errors.mensagem }}</span>
            </div>

            <!-- Botão Enviar -->
            <button 
              type="submit" 
              class="btn btn-primary btn-submit"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Enviando... <i class="fas fa-spinner fa-spin"></i></span>
              <span v-else>Enviar Mensagem <i class="fas fa-paper-plane"></i></span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Componente Toast de Notificação -->
    <Toast 
      v-if="toast.show" 
      :message="toast.message" 
      :type="toast.type" 
      @close="toast.show = false"
    />
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'

// Estados do Formulário e Foco
const focusedField = ref('')
const isSubmitting = ref(false)

const form = reactive({
  nome: '',
  email: '',
  telefone: '',
  mensagem: ''
})

const errors = reactive({
  nome: '',
  email: '',
  telefone: '',
  mensagem: ''
})

// Estado de Notificação (Toast)
const toast = reactive({
  show: false,
  message: '',
  type: 'success'
})

// Máscara Automática de Telefone: (XX) XXXXX-XXXX
const maskPhone = (e) => {
  let val = e.target.value.replace(/\D/g, '')
  if (val.length > 0) {
    val = val.substring(0, 11) // Limita a 11 dígitos
    if (val.length <= 10) {
      // Máscara (XX) XXXX-XXXX
      val = val.replace(/^(\d{2})(\d)/g, '($1) $2')
      val = val.replace(/(\d)(\d{4})$/, '$1-$2')
    } else {
      // Máscara (XX) XXXXX-XXXX
      val = val.replace(/^(\d{2})(\d)/g, '($1) $2')
      val = val.replace(/(\d{5})(\d{4})$/, '$1-$2')
    }
  }
  form.telefone = val
}

// Validações
const validate = () => {
  let isValid = true
  
  // Limpar erros
  errors.nome = ''
  errors.email = ''
  errors.telefone = ''
  errors.mensagem = ''

  // Validação Nome
  if (!form.nome.trim()) {
    errors.nome = 'Por favor, preencha seu nome completo.'
    isValid = false
  } else if (form.nome.trim().length < 3) {
    errors.nome = 'O nome precisa ter pelo menos 3 caracteres.'
    isValid = false
  }

  // Validação E-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'O e-mail é obrigatório.'
    isValid = false
  } else if (!emailRegex.test(form.email)) {
    errors.email = 'Insira um e-mail válido.'
    isValid = false
  }

  // Validação Telefone (opcional, mas valida formato se preenchido)
  if (form.telefone && form.telefone.replace(/\D/g, '').length < 10) {
    errors.telefone = 'Insira um número de telefone completo com DDD.'
    isValid = false
  }

  // Validação Mensagem
  if (!form.mensagem.trim()) {
    errors.mensagem = 'Escreva sua mensagem.'
    isValid = false
  } else if (form.mensagem.trim().length < 10) {
    errors.mensagem = 'A mensagem precisa ter pelo menos 10 caracteres.'
    isValid = false
  }

  return isValid
}

// Envio do formulário via EmailJS
const handleSubmit = () => {
  if (!validate()) return

  isSubmitting.value = true

  // Configurações e credenciais salvas do EmailJS
  const serviceID = 'service_mswf0fe'
  const templateID = 'template_173daeq'
  const publicKey = 'J3NvibQuHD_o_q_8Y'

  const templateParams = {
    nome: form.nome,
    email: form.email,
    telefone: form.telefone || 'Não informado',
    mensagem: form.mensagem
  }

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      // Limpar formulário
      form.nome = ''
      form.email = ''
      form.telefone = ''
      form.mensagem = ''
      
      // Feedback Positivo via Toast
      triggerToast('Sua mensagem foi enviada com sucesso! 🎉 Entraremos em contato em breve.', 'success')
    })
    .catch((error) => {
      console.error('Erro no EmailJS:', error)
      triggerToast('Houve um erro ao enviar. Por favor, tente novamente ou fale conosco por WhatsApp.', 'error')
    })
    .finally(() => {
      isSubmitting.value = false
    })
}

// Ativador do Toast
const triggerToast = (msg, type) => {
  toast.message = msg
  toast.type = type
  toast.show = true
}
</script>

<style scoped>
.contato-section {
  background-color: var(--bg-primary);
  position: relative;
  z-index: 10;
  overflow: hidden;
}

.contato-grid {
  display: grid;
  grid-template-columns: 4.5fr 7.5fr;
  gap: 50px;
  align-items: center;
}

/* Painel de Informações de Contato */
.contato-info-panel {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.secao-titulo-alinhado {
  font-family: var(--font-title);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 20px;
  letter-spacing: -0.5px;
}

.secao-titulo-alinhado span {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark .secao-titulo-alinhado span {
  background: linear-gradient(135deg, hsl(161, 80%, 45%) 0%, var(--brand-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.contatos-lista {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contato-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.item-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-md);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-smooth);
}

.dark .item-icon {
  color: var(--brand-secondary);
}

.contato-item:hover .item-icon {
  background-color: var(--brand-primary);
  color: var(--text-light);
  transform: translateY(-3px) scale(1.05);
}

.item-text h4 {
  font-family: var(--font-title);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.item-text p {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Card do Formulário com Glassmorphism */
.formulario-card {
  padding: 50px;
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
}

/* Inputs de Grupo com Floating Labels */
.form-group {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
}

.form-group label {
  position: absolute;
  top: 14px;
  left: 16px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: var(--transition-smooth);
  pointer-events: none;
  background-color: transparent;
  padding: 0 4px;
  line-height: 1;
}

.form-input {
  width: 100%;
  padding: 14px 16px;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: var(--transition-smooth);
  outline: none;
}

.form-input:focus {
  border-color: var(--brand-primary);
  background: var(--bg-secondary);
  box-shadow: 0 0 10px var(--glow-color);
}

.dark .form-input:focus {
  border-color: var(--brand-secondary);
}

/* Estado Ativo/Focado da Label */
.form-group.focused label {
  top: -8px;
  left: 12px;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--brand-primary);
  background-color: var(--bg-secondary);
}

.dark .form-group.focused label {
  color: var(--brand-secondary);
}

.textarea-group label {
  top: 16px;
}

.form-input.input-error {
  border-color: hsl(350, 80%, 60%) !important;
  box-shadow: 0 0 5px rgba(239, 68, 68, 0.15) !important;
}

.error-message {
  font-size: 0.8rem;
  color: hsl(350, 80%, 60%);
  display: block;
  margin-top: 5px;
  margin-left: 4px;
}

.btn-submit {
  width: 100%;
  padding: 16px;
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Orbes e Fundos */
.orb-contato {
  width: 450px;
  height: 450px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(circle, var(--brand-primary) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.08;
}

/* Responsividade */
@media (max-width: 992px) {
  .contato-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .formulario-card {
    padding: 30px;
  }
}
</style>

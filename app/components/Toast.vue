<template>
  <div 
    class="toast-notification" 
    :class="[type, { 'show': isVisible }]"
    role="alert"
    aria-live="assertive"
  >
    <div class="toast-body">
      <!-- Ícone correspondente ao status -->
      <span class="toast-icon">
        <i v-if="type === 'success'" class="fas fa-check-circle"></i>
        <i v-else class="fas fa-exclamation-circle"></i>
      </span>
      
      <!-- Mensagem -->
      <p class="toast-message">{{ message }}</p>
      
      <!-- Botão Fechar -->
      <button class="toast-close" @click="close" aria-label="Fechar notificação">
        &times;
      </button>
    </div>

    <!-- Barra de Progresso de Encerramento -->
    <div class="toast-progress">
      <div class="progress-bar" :style="{ animationDuration: `${duration}ms` }"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'success', // 'success' ou 'error'
    validator: (value) => ['success', 'error'].includes(value)
  },
  duration: {
    type: Number,
    default: 5000 // 5 segundos
  }
})

const emit = defineEmits(['close'])

const isVisible = ref(false)
let autoCloseTimer = null

const close = () => {
  isVisible.value = false
  setTimeout(() => {
    emit('close')
  }, 400) // Tempo da animação de saída (fade-out/slide-out)
}

onMounted(() => {
  // Ativar visibilidade com pequeno delay para disparar transição CSS
  setTimeout(() => {
    isVisible.value = true
  }, 50)

  // Configurar temporizador para auto-fechamento
  autoCloseTimer = setTimeout(() => {
    close()
  }, props.duration)
})

onUnmounted(() => {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
  }
})
</script>

<style scoped>
.toast-notification {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 2000;
  max-width: 420px;
  width: calc(100% - 80px);
  background: var(--bg-secondary);
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  transform: translateY(30px) scale(0.95);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  pointer-events: auto;
}

.toast-notification.show {
  transform: translateY(0) scale(1);
  opacity: 1;
}

.toast-body {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 20px;
}

.toast-icon {
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Cores Semânticas baseadas no Tipo */
.success .toast-icon {
  color: hsl(142, 70%, 45%);
}
.success {
  border-left: 4px solid hsl(142, 70%, 45%);
}

.error .toast-icon {
  color: hsl(350, 80%, 60%);
}
.error {
  border-left: 4px solid hsl(350, 80%, 60%);
}

.toast-message {
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.4;
  flex-grow: 1;
  font-weight: 500;
}

.toast-close {
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
  transition: var(--transition-fast);
}

.toast-close:hover {
  color: var(--text-primary);
  transform: scale(1.1);
}

/* Barra de Progresso */
.toast-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--border-color);
  opacity: 0.8;
}

.progress-bar {
  height: 100%;
  width: 100%;
  animation-name: shrink;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

.success .progress-bar {
  background-color: hsl(142, 70%, 45%);
}

.error .progress-bar {
  background-color: hsl(350, 80%, 60%);
}

@keyframes shrink {
  from { width: 100%; }
  to { width: 0%; }
}

/* Responsividade */
@media (max-width: 576px) {
  .toast-notification {
    bottom: 20px;
    right: 20px;
    width: calc(100% - 40px);
    max-width: 100%;
  }
}
</style>

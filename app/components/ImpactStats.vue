<template>
  <section ref="statsSection" class="stats-section">
    <div class="container">
      <div class="stats-grid">
        <!-- Card Estatística 1 -->
        <div 
          v-for="(stat, index) in stats" 
          :key="stat.label" 
          class="stat-card glass-card"
          :class="{ 'animate-visible': isVisible }"
          :style="{ 'transition-delay': `${index * 150}ms` }"
        >
          <div class="stat-icon" :style="{ color: stat.color }">
            <i :class="stat.icon"></i>
          </div>
          <div class="stat-number-wrapper">
            <span class="stat-number">{{ displayedNumbers[index] }}</span>
            <span class="stat-suffix">{{ stat.suffix }}</span>
          </div>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const statsSection = ref(null)
const isVisible = ref(false)

const stats = [
  { target: 500, suffix: '+', label: 'Famílias Apoiadas', icon: 'fas fa-hands-helping', color: 'var(--brand-primary)' },
  { target: 15, suffix: '+', label: 'Projetos Realizados', icon: 'fas fa-graduation-cap', color: 'var(--brand-secondary)' },
  { target: 50, suffix: '+', label: 'Voluntários Ativos', icon: 'fas fa-heart', color: 'hsl(350, 80%, 60%)' },
  { target: 3, suffix: '+', label: 'Anos de Atuação', icon: 'fas fa-calendar-alt', color: 'var(--brand-accent)' }
]

const displayedNumbers = ref(stats.map(() => 0))
let observer = null

// Função de animação de contagem
const animateNumbers = () => {
  const duration = 2000 // 2 segundos de animação
  const frameRate = 1000 / 60 // 60 FPS
  const totalFrames = Math.round(duration / frameRate)
  
  let frame = 0
  
  const timer = setInterval(() => {
    frame++
    const progress = frame / totalFrames
    
    // Curva de desaceleração suave (easeOutQuad)
    const easeProgress = progress * (2 - progress)
    
    stats.forEach((stat, index) => {
      displayedNumbers.value[index] = Math.round(stat.target * easeProgress)
    })
    
    if (frame >= totalFrames) {
      clearInterval(timer)
      // Garantir valores exatos no final
      displayedNumbers.value = stats.map(s => s.target)
    }
  }, frameRate)
}

onMounted(() => {
  // Configurar o Intersection Observer para disparar a animação apenas ao entrar em tela
  observer = new IntersectionObserver((entries) => {
    const [entry] = entries
    if (entry.isIntersecting && !isVisible.value) {
      isVisible.value = true
      animateNumbers()
      observer.unobserve(entry.target)
    }
  }, {
    threshold: 0.2 // Disparar quando 20% da seção estiver visível
  })
  
  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})

onUnmounted(() => {
  if (observer && statsSection.value) {
    observer.disconnect()
  }
})
</script>

<style scoped>
.stats-section {
  padding: 60px 0;
  background-color: var(--bg-primary);
  position: relative;
  z-index: 10;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.stat-card.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

.stat-icon {
  font-size: 2.2rem;
  margin-bottom: 20px;
  transition: var(--transition-smooth);
}

.stat-card:hover .stat-icon {
  transform: scale(1.15) translateY(-5px);
}

.stat-number-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  font-family: var(--font-title);
  font-weight: 800;
  font-size: 3rem;
  line-height: 1;
  color: var(--text-primary);
  margin-bottom: 8px;
  letter-spacing: -1px;
}

.stat-suffix {
  color: var(--brand-secondary);
  margin-left: 2px;
}

.stat-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-secondary);
}

/* Responsividade */
@media (max-width: 992px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .stats-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .stat-card {
    padding: 30px 15px;
  }
  
  .stat-number-wrapper {
    font-size: 2.5rem;
  }
}
</style>

<template>
  <section id="inicio" class="hero-section">
    <!-- Orbes de luz abstratas (Efeito Glassmorphism de Fundo) -->
    <div class="orb-gradient orb-1"></div>
    <div class="orb-gradient orb-2"></div>
    <div class="orb-gradient orb-3"></div>

    <div class="container hero-container">
      <div class="hero-content">
        <!-- Badge de Destaque
        <div class="hero-badge animate-fade-in">
          <i class="fas fa-heart"></i>
          <span>Impacto Social em Parquelândia</span>
        </div> -->

        <!-- Título Principal -->
        <h1 class="hero-title animate-title">
          Instituto <br />
          <span class="gradient-text">Parquelândia</span>
        </h1>

        <!-- Subtítulo -->
        <p class="hero-subtitle animate-subtitle">
          Unindo vidas, fortalecendo a comunidade e gerando transformação social integral em Fortaleza, Ceará.
        </p>

        <!-- Botões de Ação -->
        <div class="hero-actions animate-buttons">
          <a href="#contato" class="btn btn-primary">
            <span>Fazer Parte</span>
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#pilares" class="btn btn-secondary">
            <span>Nossa Missão</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Indicador de Rolar para Baixo -->
    <div class="scroll-indicator">
      <span class="scroll-text">Descubra Mais</span>
      <a href="#pilares" aria-label="Rolar para baixo" class="scroll-arrow">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </section>
</template>

<script setup>
// Configuração do Hero Component
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  overflow: hidden;
  padding-top: 90px;
}

.hero-container {
  z-index: 10;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Badge de Destaque */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: var(--border-radius-full);
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--brand-primary);
  margin-bottom: 25px;
  box-shadow: var(--shadow-sm);
}

.dark .hero-badge {
  color: var(--brand-secondary);
}

.hero-badge i {
  color: hsl(350, 80%, 60%);
  animation: pulse 2s infinite;
}

/* Títulos */
.hero-title {
  font-family: var(--font-title);
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 20px;
  letter-spacing: -1.5px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dark .gradient-text {
  background: linear-gradient(135deg, hsl(161, 80%, 45%) 0%, var(--brand-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 650px;
  margin-bottom: 40px;
  line-height: 1.6;
}

/* Ações */
.hero-actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

/* Orbes Gradientes de Fundo */
.orb-1 {
  width: 500px;
  height: 500px;
  top: -100px;
  left: -100px;
  background: radial-gradient(circle, var(--brand-primary) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.12;
}

.orb-2 {
  width: 600px;
  height: 600px;
  bottom: -200px;
  right: -100px;
  background: radial-gradient(circle, var(--brand-secondary) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.15;
}

.orb-3 {
  width: 400px;
  height: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--brand-accent) 0%, rgba(255,255,255,0) 70%);
  opacity: 0.08;
}

/* Indicador de Rolar */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 10;
}

.scroll-text {
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--text-secondary);
}

.scroll-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-full);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  background-color: var(--bg-secondary);
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-sm);
  animation: bounce-y 2s infinite;
}

.scroll-arrow:hover {
  border-color: var(--brand-secondary);
  color: var(--brand-secondary);
  transform: scale(1.1);
}

/* Animações e Efeitos */
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

@keyframes bounce-y {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
}

/* Responsividade */
@media (max-width: 768px) {
  .hero-section {
    padding-top: 100px;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 30px;
  }
  
  .hero-actions {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 15px;
  }
  
  .btn {
    width: 100%;
  }

  .scroll-indicator {
    bottom: 20px;
  }
}
</style>

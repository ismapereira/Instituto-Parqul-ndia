<template>
  <section id="acoes" class="secao acoes-section">
    <div class="container">
      <!-- Cabeçalho da Seção -->
      <h2 class="secao-titulo">
        Nossas <span>Ações Sociais</span>
      </h2>
      <p class="secao-subtitulo">
        Registros reais de amor, cooperação e impacto comunitário. Veja como atuamos diretamente na vida das famílias em Fortaleza.
      </p>

      <!-- Container Principal do Slider -->
      <div 
        class="slider-wrapper glass-card"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <!-- Slides -->
        <div class="slider-viewport">
          <div 
            class="slider-container" 
            :style="{ transform: `translateX(-${activeSlide * 100}%)` }"
          >
            <div 
              v-for="(slide, index) in slides" 
              :key="slide.img" 
              class="slide-item"
              :class="{ 'slide-active': activeSlide === index }"
            >
              <div class="slide-img-wrapper">
                <img :src="slide.img" :alt="slide.title" class="slide-image" />
                <div class="slide-overlay">
                  <div class="slide-content">
                    <span class="slide-tag">{{ slide.tag }}</span>
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.desc }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controles Laterais (Desktop) -->
        <button 
          class="nav-btn prev-btn" 
          @click="prevSlide" 
          aria-label="Slide anterior"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button 
          class="nav-btn next-btn" 
          @click="nextSlide" 
          aria-label="Próximo slide"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <!-- Indicadores / Paginação -->
      <div class="slide-indicadores">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          class="indicador"
          :class="{ 'ativo': activeSlide === index }"
          @click="setSlide(index)"
          :aria-label="`Ir para slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSlide = ref(0)

const slides = [
  {
    img: '/img/acao1.png',
    tag: 'Alimentação & Apoio',
    title: 'Campanhas de Solidariedade Nutricional',
    desc: 'Distribuição mensal de cestas de alimentos e vegetais frescos para famílias em situação de vulnerabilidade em Parquelândia.'
  },
  {
    img: '/img/acao2.png',
    tag: 'Educação Infantil',
    title: 'Workshops e Leitura para Crianças',
    desc: 'Espaço lúdico de reforço escolar, oficinas de leitura coletiva e desenvolvimento de habilidades criativas para jovens.'
  },
  {
    img: '/img/acao3.png',
    tag: 'Capacitação Profissional',
    title: 'Cursos de Artesanato e Costura Criativa',
    desc: 'Aulas de artesanato e corte e costura para incentivar o empreendedorismo feminino e a independência financeira dos moradores.'
  }
]

const nextSlide = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length
}

const prevSlide = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}

const setSlide = (index) => {
  activeSlide.value = index
}

// Controle de Autoplay
let autoplayTimer = null

const startAutoplay = () => {
  autoplayTimer = setInterval(nextSlide, 6000) // Troca a cada 6 segundos
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
  }
}

// Controle de Gestos Mobile (Swipe)
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event) => {
  touchStartX = event.touches[0].clientX
  stopAutoplay()
}

const handleTouchEnd = (event) => {
  touchEndX = event.changedTouches[0].clientX
  handleSwipe()
  startAutoplay()
}

const handleSwipe = () => {
  const swipeThreshold = 50 // Pixels mínimos para considerar deslizamento
  if (touchStartX - touchEndX > swipeThreshold) {
    nextSlide() // Deslizou para esquerda -> próximo
  } else if (touchEndX - touchStartX > swipeThreshold) {
    prevSlide() // Deslizou para direita -> anterior
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.acoes-section {
  background-color: var(--bg-primary);
  position: relative;
  z-index: 10;
}

.secao-subtitulo {
  text-align: center;
  max-width: 650px;
  margin: -35px auto 60px;
  color: var(--text-secondary);
  font-size: 1.05rem;
}

/* Slider Wrapper */
.slider-wrapper {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.slider-viewport {
  width: 100%;
  overflow: hidden;
}

.slider-container {
  display: flex;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.slide-item {
  flex: 0 0 100%;
  width: 100%;
  position: relative;
}

.slide-img-wrapper {
  width: 100%;
  height: 550px;
  position: relative;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Zoom Parallax no slide ativo */
.slide-active .slide-image {
  transform: scale(1.05);
}

/* Overlay Escuro com Textos */
.slide-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);
  display: flex;
  align-items: flex-end;
  padding: 50px;
}

.slide-content {
  color: var(--text-light);
  max-width: 700px;
  text-align: left;
}

.slide-tag {
  display: inline-block;
  padding: 6px 12px;
  background-color: var(--brand-secondary);
  color: var(--text-light);
  font-family: var(--font-title);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border-radius: var(--border-radius-sm);
  margin-bottom: 15px;
}

.slide-content h3 {
  font-family: var(--font-title);
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: -0.5px;
}

.slide-content p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
}

/* Botões de Navegação */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-full);
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: var(--transition-smooth);
  z-index: 20;
}

.nav-btn:hover {
  background-color: var(--text-light);
  color: var(--brand-primary);
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.prev-btn {
  left: 25px;
}

.next-btn {
  right: 25px;
}

/* Indicadores de Paginação */
.slide-indicadores {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 30px;
}

.indicador {
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-full);
  border: none;
  background-color: var(--border-color);
  cursor: pointer;
  transition: var(--transition-smooth);
}

.indicador.ativo {
  background-color: var(--brand-primary);
  width: 32px; /* Bullet expandido para design moderno */
}

.dark .indicador.ativo {
  background-color: var(--brand-secondary);
}

/* Responsividade */
@media (max-width: 768px) {
  .slide-img-wrapper {
    height: 400px;
  }

  .slide-overlay {
    padding: 30px 20px;
  }

  .slide-content h3 {
    font-size: 1.4rem;
  }

  .slide-content p {
    font-size: 0.9rem;
  }

  .nav-btn {
    display: none; /* Oculta setas no mobile, priorizando touch swipe */
  }
}
</style>

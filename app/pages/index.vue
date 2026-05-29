<template>
  <div class="landing-page">
    <!-- Seção de Abertura Imersiva -->
    <Hero />

    <!-- Painel de Métricas e Estatísticas de Impacto -->
    <ImpactStats class="reveal-el" />

    <!-- Pilares de Atuação Institucional -->
    <Pilares class="reveal-el" />

    <!-- Galeria de Ações Sociais -->
    <GaleriaAcoes class="reveal-el" />

    <!-- Equipe Institucional -->
    <Equipe class="reveal-el" />

    <!-- Seção de Contato e Localização -->
    <ContatoForm class="reveal-el" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

// Lógica de Micro-animações baseadas no Scroll (Intersection Observer)
let observer = null

onMounted(() => {
  // Encontrar todas as seções e cartões marcados para reveal
  const revealElements = document.querySelectorAll('.reveal-el')
  
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active')
        // Uma vez ativada a animação, removemos a observação para otimizar performance
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.1, // Disparar quando 10% do elemento estiver na tela
    rootMargin: '0px 0px -50px 0px' // Margem inferior sutil para melhor timing visual
  })

  revealElements.forEach(el => {
    // Adiciona classe de estilo inicial
    el.classList.add('reveal-init')
    observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<style>
/* ==========================================================================
   Estilos de Entrada e Micro-animações Globais (Scroll Reveal)
   ========================================================================== */

/* Estado Inicial da Animação */
.reveal-init {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

/* Estado Ativo (Visível) */
.reveal-active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Delay sutil entre as seções para leitura fluida */
.reveal-el:nth-of-type(1) { transition-delay: 100ms; }
.reveal-el:nth-of-type(2) { transition-delay: 200ms; }
.reveal-el:nth-of-type(3) { transition-delay: 250ms; }
</style>

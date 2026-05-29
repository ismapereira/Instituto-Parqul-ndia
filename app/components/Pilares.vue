<template>
  <section id="pilares" class="secao pilares-section">
    <div class="container">
      <!-- Título da Seção -->
      <h2 class="secao-titulo">
        Nossos <span>Pilares</span>
      </h2>
      <p class="secao-subtitulo">
        Os pilares que sustentam a nossa atuação diária e nos guiam na promoção da cidadania e do bem-estar social em Parquelândia.
      </p>

      <!-- Grade de Pilares Interativos -->
      <div class="pilares-grid">
        <div 
          v-for="(pilar, index) in pilares" 
          :key="pilar.title"
          class="pilar-card glass-card"
          :class="{ 'expanded': activePilar === index }"
          @click="togglePilar(index)"
        >
          <!-- Cabeçalho do Card (Ícone e Título) -->
          <div class="pilar-header">
            <span class="pilar-icone" :style="{ background: pilar.glow }">
              {{ pilar.icon }}
            </span>
            <h3>{{ pilar.title }}</h3>
          </div>

          <!-- Descrição Curta (Sempre Visível) -->
          <p class="pilar-summary">{{ pilar.summary }}</p>

          <!-- Descrição Detalhada (Expandida reativamente) -->
          <div class="pilar-details" :style="{ maxHeight: activePilar === index ? '150px' : '0px' }">
            <div class="details-divider"></div>
            <p class="pilar-full-text">{{ pilar.details }}</p>
          </div>

          <!-- Botão Indicador de Expansão -->
          <div class="expand-btn">
            <span>{{ activePilar === index ? 'Fechar' : 'Saiba Mais' }}</span>
            <i class="fas" :class="activePilar === index ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activePilar = ref(null)

const togglePilar = (index) => {
  if (activePilar.value === index) {
    activePilar.value = null
  } else {
    activePilar.value = index
  }
}

const pilares = [
  {
    icon: '🌈',
    title: 'Inclusão Social',
    summary: 'Garantir oportunidades e direitos para todos, valorizando a diversidade e eliminando barreiras sociais.',
    details: 'Trabalhamos ativamente para que todos os membros da nossa comunidade tenham voz ativa e oportunidades justas de desenvolvimento, eliminando barreiras físicas, sociais e econômicas que impeçam a plena integração cidadã.',
    glow: 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)'
  },
  {
    icon: '📈',
    title: 'Desenvolvimento Comunitário',
    summary: 'Fortalecer capacidades individuais e coletivas através de iniciativas educacionais e de empoderamento.',
    details: 'Promovemos cursos livres, workshops práticos e mentorias para capacitar os moradores em habilidades que facilitem a geração de renda, estimulando o empreendedorismo local e o autodesenvolvimento sustentável.',
    glow: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(245, 158, 11, 0.15) 100%)'
  },
  {
    icon: '🤝',
    title: 'Colaboração',
    summary: 'Promover a união, o diálogo e o trabalho conjunto para alcançar objetivos comuns.',
    details: 'Acreditamos no poder do pensamento coletivo e no diálogo aberto. Criamos espaços e fóruns comunitários de escuta ativa para construir soluções reais com a ajuda mútua de moradores, parceiros e voluntários.',
    glow: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%)'
  },
  {
    icon: '🚀',
    title: 'Ação Transformadora',
    summary: 'Implementar mudanças concretas que ressignificam realidades e empoderam a comunidade.',
    details: 'Agimos diretamente em causas de vulnerabilidade social com projetos de impacto imediato (mutirões, doação de alimentos, assistência primária) que ressignificam as realidades locais com dignidade e afeto.',
    glow: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)'
  }
]
</script>

<style scoped>
.pilares-section {
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

.pilares-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.pilar-card {
  cursor: pointer;
  padding: 35px;
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: var(--transition-smooth);
  overflow: hidden;
}

.pilar-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-glow);
}

.pilar-card.expanded {
  border-color: var(--brand-secondary);
  box-shadow: 0 15px 35px var(--glow-color);
}

.pilar-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.pilar-icone {
  font-size: 2.2rem;
  width: 64px;
  height: 64px;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
}

.pilar-header h3 {
  font-family: var(--font-title);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.pilar-summary {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Detalhes Expandidos */
.pilar-details {
  overflow: hidden;
  transition: var(--transition-smooth);
}

.details-divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 20px 0;
}

.pilar-full-text {
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.6;
}

/* Botão de Expansão */
.expand-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--brand-primary);
  margin-top: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: var(--transition-fast);
}

.dark .expand-btn {
  color: var(--brand-secondary);
}

.pilar-card:hover .expand-btn {
  transform: translateX(5px);
}

/* Responsividade */
@media (max-width: 992px) {
  .pilares-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .pilar-card {
    padding: 25px;
  }
  
  .pilar-header h3 {
    font-size: 1.3rem;
  }
  
  .pilar-icone {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }
}
</style>

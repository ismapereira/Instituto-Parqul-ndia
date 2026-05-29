<template>
  <section id="equipe" class="secao equipe-section">
    <div class="container">
      <!-- Cabeçalho da Seção -->
      <h2 class="secao-titulo">
        Nossa <span>Equipe</span>
      </h2>
      <p class="secao-subtitulo">
        Conheça as mentes apaixonadas e os corações dedicados que planejam, coordenam e executam as nossas transformações em Parquelândia.
      </p>

      <!-- Grade de Membros -->
      <div class="equipe-grid">
        <div 
          v-for="membro in equipe" 
          :key="membro.nome" 
          class="membro-card glass-card"
        >
          <!-- Imagem com Efeito de Zoom no Container -->
          <div class="membro-img-container">
            <img :src="membro.img" :alt="membro.nome" class="membro-img" />
            <!-- Redes Sociais Hover Overlay -->
            <div class="membro-socials-overlay">
              <a :href="membro.linkedin" target="_blank" aria-label="LinkedIn" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a :href="membro.instagram" target="_blank" aria-label="Instagram" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Informações do Membro -->
          <div class="membro-info">
            <h3>{{ membro.nome }}</h3>
            <span class="membro-cargo">{{ membro.cargo }}</span>
            <div class="info-divider"></div>
            <p class="membro-desc">{{ membro.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const equipe = [
  {
    nome: 'João Silva',
    cargo: 'Presidente',
    img: '/img/membros/presidente.png',
    desc: 'Fundador e líder visionário do Instituto Parquelândia, dedicado a liderar projetos de impacto direto na nossa comunidade.',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com/institutoparquelandia'
  },
  {
    nome: 'Maria Oliveira',
    cargo: 'Coordenadora de Projetos',
    img: '/img/membros/coordenadora.png',
    desc: 'Especialista em gestão de projetos sociais, responsável por planejar e implementar cursos livres e workshops inovadores.',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com/institutoparquelandia'
  },
  {
    nome: 'Ana Santos',
    cargo: 'Assistente Social',
    img: '/img/membros/assistente.png',
    desc: 'Profissional dedicada à assistência direta, acolhimento às famílias vulneráveis e articulação de direitos.',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com/institutoparquelandia'
  },
  {
    nome: 'Pedro Rodrigues',
    cargo: 'Educador Social',
    img: '/img/membros/educador.png',
    desc: 'Educador apaixonado, trabalhando para guiar crianças e adolescentes em atividades pedagógicas e artísticas.',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com/institutoparquelandia'
  }
]
</script>

<style scoped>
.equipe-section {
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

/* Grade de Membros */
.equipe-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.membro-card {
  background: var(--bg-secondary);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: var(--transition-smooth);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.membro-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-glow);
  box-shadow: var(--shadow-lg);
}

/* Container de Imagem */
.membro-img-container {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  background-color: var(--bg-primary);
}

.membro-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-smooth);
}

.membro-card:hover .membro-img {
  transform: scale(1.05);
}

/* Overlay de Redes Sociais */
.membro-socials-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 61, 44, 0.4);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  transition: var(--transition-smooth);
  z-index: 5;
}

.dark .membro-socials-overlay {
  background: rgba(2, 20, 14, 0.5);
}

.membro-img-container:hover .membro-socials-overlay {
  opacity: 1;
}

.social-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--border-radius-full);
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  transition: var(--transition-smooth);
  box-shadow: var(--shadow-sm);
}

.social-icon:hover {
  background-color: var(--brand-secondary);
  color: var(--text-light);
  transform: scale(1.15) rotate(10deg);
}

/* Informações do Membro */
.membro-info {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
}

.membro-info h3 {
  font-family: var(--font-title);
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 5px;
}

.membro-cargo {
  font-family: var(--font-title);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--brand-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-divider {
  height: 1px;
  background-color: var(--border-color);
  margin: 15px auto;
  width: 50px;
}

.membro-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

/* Responsividade */
@media (max-width: 1200px) {
  .equipe-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .equipe-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .membro-img-container {
    height: 320px;
  }
}
</style>

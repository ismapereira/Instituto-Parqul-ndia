<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Coluna 1: Mapa do Google Embutido -->
        <div class="footer-col footer-mapa-col">
          <div class="mapa-container glass-card">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3362194392!2d-38.54305192381967!3d-3.736133997289665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74f30c4ad5b23%3A0x881c8ca9b4d9f6a7!2sR.%20Moreninha%20Irineu%2C%20464%20-%20Parquel%C3%A2ndia%2C%20Fortaleza%20-%20CE%2C%2060455-310!5e0!3m2!1spt-BR!2sbr!4v1706832000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="200" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              title="Localização do Instituto Parquelândia no Google Maps"
            ></iframe>
          </div>
        </div>

        <!-- Coluna 2: Redes Sociais e Ações Rápidas -->
        <div class="footer-col footer-redes-col">
          <h4 class="footer-title">Conecte-se Conosco</h4>
          <p class="redes-desc">Acompanhe nosso trabalho diário e ações de perto nas redes sociais.</p>
          <div class="redes-links">
            <a 
              href="https://www.instagram.com/institutoparquelandia/" 
              target="_blank" 
              class="rede-social-link" 
              aria-label="Instagram do Instituto Parquelândia"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a 
              href="https://wa.me/5585988635829" 
              target="_blank" 
              class="rede-social-link" 
              aria-label="Fale conosco no WhatsApp"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        <!-- Coluna 3: Contatos e Endereço -->
        <div class="footer-col footer-contatos-col">
          <h4 class="footer-title">Contato Presencial</h4>
          <div class="info-contatos">
            <p>
              <i class="fas fa-map-marker-alt"></i>
              <span>R. Moreninha Irineu, 464 - Parquelândia, Fortaleza - CE, 60455-310</span>
            </p>
            <p>
              <i class="fas fa-phone"></i>
              <span>(85) 98863-5829</span>
            </p>
            <p>
              <i class="fas fa-envelope"></i>
              <span>institutoparquelandia@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Copyright e Divisor -->
      <div class="footer-bottom">
        <p>&copy; 2026 Instituto Parquelândia. Todos os direitos reservados. Feito com ❤️ por Ismael Pereira.</p>
      </div>
    </div>

    <!-- Botão Flutuante Voltar ao Topo -->
    <button 
      class="back-to-top" 
      :class="{ 'visible': isBackToTopVisible }" 
      @click="scrollToTop"
      aria-label="Voltar para o topo"
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isBackToTopVisible = ref(false)

const handleScroll = () => {
  isBackToTopVisible.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.footer {
  background-color: var(--bg-footer);
  color: rgba(255, 255, 255, 0.8);
  padding: 80px 0 30px;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-grid {
  display: grid;
  grid-template-columns: 4.5fr 3.5fr 4fr;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 50px;
}

/* Colunas do Footer */
.footer-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.footer-title {
  font-family: var(--font-title);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-light);
  letter-spacing: -0.5px;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--brand-secondary);
}

/* Mapa */
.mapa-container {
  overflow: hidden;
  border-radius: var(--border-radius-md);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  line-height: 0;
}

/* Redes Sociais */
.redes-desc {
  font-size: 0.95rem;
  line-height: 1.5;
}

.redes-links {
  display: flex;
  gap: 15px;
}

.rede-social-link {
  width: 46px;
  height: 46px;
  border-radius: var(--border-radius-full);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  text-decoration: none;
  transition: var(--transition-smooth);
}

.rede-social-link:hover {
  background-color: var(--brand-secondary);
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}

/* Informações de Contatos */
.info-contatos {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.info-contatos p {
  display: flex;
  gap: 15px;
  align-items: flex-start;
  font-size: 0.95rem;
  line-height: 1.5;
}

.info-contatos i {
  color: var(--brand-secondary);
  font-size: 1.1rem;
  margin-top: 3px;
}

/* Bottom Copyright */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 30px;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
}

/* Botão Flutuante Voltar ao Topo */
.back-to-top {
  position: fixed;
  bottom: 40px;
  left: 40px; /* Alinhado ao lado oposto do Toast para evitar colisão */
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-full);
  background-color: var(--brand-primary);
  border: 1px solid var(--border-color);
  color: var(--text-light);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: var(--transition-smooth);
  z-index: 999;
}

.dark .back-to-top {
  background-color: var(--bg-secondary);
  border-color: var(--brand-secondary);
  color: var(--brand-secondary);
}

.back-to-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.back-to-top:hover {
  transform: translateY(-5px);
  background-color: var(--brand-secondary);
  color: var(--text-light);
  box-shadow: var(--shadow-lg);
}

/* Responsividade */
@media (max-width: 992px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .footer-col {
    align-items: center;
    text-align: center;
  }

  .footer-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .info-contatos p {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .back-to-top {
    bottom: 20px;
    left: 20px;
  }
}
</style>

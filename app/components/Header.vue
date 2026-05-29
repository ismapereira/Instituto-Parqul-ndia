<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container header-content">
      <!-- Logo do Instituto -->
      <a href="#inicio" class="logo-link" aria-label="Voltar ao início">
        <img src="/logo.png" alt="Logo Instituto Parquelândia" class="logo" />
      </a>

      <!-- Menu Hamburguer para Mobile -->
      <button 
        class="menu-hamburguer" 
        :class="{ 'ativo': isMenuOpen }" 
        @click="toggleMenu"
        aria-label="Alternar menu de navegação"
        :aria-expanded="isMenuOpen"
      >
        <span class="hamburguer-linha"></span>
        <span class="hamburguer-linha"></span>
        <span class="hamburguer-linha"></span>
      </button>

      <!-- Links de Navegação e Seletor de Tema -->
      <nav class="nav-container" :class="{ 'nav-mobile-ativo': isMenuOpen }">
        <div class="nav-links">
          <a 
            v-for="link in navLinks" 
            :key="link.href" 
            :href="link.href" 
            class="nav-link"
            @click="closeMenu"
          >
            {{ link.text }}
          </a>
        </div>

        <!-- Seletor de Tema (Claro / Escuro) -->
        <button 
          class="theme-toggle" 
          @click="toggleTheme" 
          :aria-label="isDarkMode ? 'Ativar tema claro' : 'Ativar tema escuro'"
        >
          <i v-if="isDarkMode" class="fas fa-sun"></i>
          <i v-else class="fas fa-moon"></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Estado do Scroll para mudar estilo do cabeçalho
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

// Estado do Menu Mobile
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const closeMenu = () => {
  isMenuOpen.value = false
}

// Links de Navegação
const navLinks = [
  { href: '#inicio', text: 'Início' },
  { href: '#pilares', text: 'Pilares' },
  { href: '#acoes', text: 'Ações' },
  { href: '#equipe', text: 'Equipe' },
  { href: '#contato', text: 'Contato' }
]

// Lógica de Controle do Tema (Light / Dark Mode)
const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  // Registrar evento de scroll
  window.addEventListener('scroll', handleScroll)
  
  // Detectar tema salvo ou preferência do sistema
  const savedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    isDarkMode.value = true
    document.documentElement.classList.add('dark')
  } else {
    isDarkMode.value = false
    document.documentElement.classList.remove('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Cabeçalho */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  z-index: 1000;
  background-color: transparent;
  border-bottom: 1px solid transparent;
  transition: var(--transition-smooth);
}

/* Estado com Scroll (Glassmorphism Ativado) */
.header-scrolled {
  height: 80px;
  background-color: var(--bg-glass);
  backdrop-filter: blur(12px) saturate(120%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);
  border-bottom: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  height: 55px;
  width: auto;
  transition: var(--transition-smooth);
}

.header-scrolled .logo {
  height: 48px;
}

.logo:hover {
  transform: scale(1.05);
}

/* Navegação e Links */
.nav-container {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-primary);
  font-family: var(--font-title);
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  transition: var(--transition-fast);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--brand-primary), var(--brand-secondary));
  transition: var(--transition-smooth);
}

.nav-link:hover {
  color: var(--brand-secondary);
}

.nav-link:hover::after {
  width: 100%;
}

/* Seletor de Tema */
.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  font-size: 1.2rem;
  transition: var(--transition-smooth);
  background-color: var(--border-color);
}

.theme-toggle:hover {
  color: var(--brand-secondary);
  background-color: var(--text-primary);
  transform: rotate(15deg) scale(1.08);
}

.dark .theme-toggle:hover {
  color: var(--brand-secondary);
  background-color: var(--bg-primary);
}

/* Menu Hamburguer */
.menu-hamburguer {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.hamburguer-linha {
  width: 100%;
  height: 3px;
  background-color: var(--text-primary);
  border-radius: var(--border-radius-full);
  transition: var(--transition-smooth);
}

/* Animações e Estilos para Telas Mobile */
@media (max-width: 768px) {
  .menu-hamburguer {
    display: flex;
  }

  .nav-container {
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: var(--transition-smooth);
    z-index: 1000;
  }

  .nav-mobile-ativo {
    left: 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  .nav-link {
    font-size: 1.4rem;
  }

  /* Hamburger Animado */
  .menu-hamburguer.ativo .hamburguer-linha:nth-child(1) {
    transform: rotate(45deg) translate(5px, 6px);
  }

  .menu-hamburguer.ativo .hamburguer-linha:nth-child(2) {
    opacity: 0;
  }

  .menu-hamburguer.ativo .hamburguer-linha:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -7px);
  }
}
</style>

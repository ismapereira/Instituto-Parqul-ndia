<template>
  <div class="layout-wrapper">
    <!-- Cabeçalho Global (Header) -->
    <Header />
    
    <!-- Conteúdo principal dinâmico -->
    <main class="main-content">
      <slot />
    </main>
    
    <!-- Rodapé Global (Footer) -->
    <Footer />
  </div>
</template>

<script setup>
// Componentes <Header /> e <Footer /> são importados e resolvidos automaticamente pelo Nuxt 4!
</script>

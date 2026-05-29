// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // Caminho do arquivo CSS do Design System centralizado (Vanilla CSS)
  css: ['~/assets/css/main.css'],
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Instituto Parquelândia - Unindo Vidas, Fortalecendo a Comunidade',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'O Instituto Parquelândia é uma organização social dedicada a promover bem-estar, desenvolvimento integral e ações sociais transformadoras em Fortaleza, Ceará.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://institutoparquelandia.org' },
        { property: 'og:title', content: 'Instituto Parquelândia - Unindo Vidas, Fortalecendo a Comunidade' },
        { property: 'og:description', content: 'Conheça nossa missão de promover bem-estar social, educação e desenvolvimento comunitário em Parquelândia, Fortaleza.' },
        { property: 'og:image', content: '/logo.png' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://institutoparquelandia.org' },
        { property: 'twitter:title', content: 'Instituto Parquelândia - Unindo Vidas, Fortalecendo a Comunidade' },
        { property: 'twitter:description', content: 'Descubra como estamos impactando positivamente a comunidade de Parquelândia através de ações sociais e educativas.' },
        { property: 'twitter:image', content: '/logo.png' },
        
        // Geo Tags para Localização SEO
        { name: 'geo.region', content: 'BR-CE' },
        { name: 'geo.placename', content: 'Parquelândia, Fortaleza' },
        { name: 'geo.position', content: '-3.736133;-38.543051' },
        { name: 'ICBM', content: '-3.736133, -38.543051' },
        
        // Configurações Adicionais
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow' },
        { name: 'language', content: 'Portuguese' },
        { name: 'country', content: 'Brazil' },
        { name: 'google-site-verification', content: 'PLACEHOLDER_GOOGLE_VERIFICATION_CODE' }
      ],
      link: [
        { rel: 'canonical', href: 'https://institutoparquelandia.org' },
        // Conexão e carregamento de fontes do Google (Outfit para Títulos e Inter para Textos)
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap' },
        // Biblioteca de ícones FontAwesome 6
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        // Favicons
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/favicons/favicon-48x48.png' },
        { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicons/favicon-64x64.png' },
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/favicons/favicon-128x128.png' },
        { rel: 'apple-touch-icon', href: '/favicons/favicon-64x64.png' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NonprofitOrganization",
            "name": "Instituto Parquelândia",
            "alternateName": "Instituto Parquelândia",
            "url": "https://institutoparquelandia.org",
            "logo": "https://institutoparquelandia.org/logo.png",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Fundadores do Instituto Parquelândia"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "R. Moreninha Irineu, 464",
              "addressLocality": "Fortaleza",
              "addressRegion": "CE",
              "postalCode": "60455-310",
              "addressCountry": "BR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+5585988635829",
              "email": "institutoparquelandia@gmail.com",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://www.instagram.com/institutoparquelandia/"
            ],
            "description": "Uma organização social dedicada a promover bem-estar, desenvolvimento integral e ações sociais transformadoras em Fortaleza, Ceará.",
            "keywords": "ação social, desenvolvimento comunitário, educação, bem-estar social, Fortaleza, Parquelândia"
          })
        }
      ]
    }
  }
})

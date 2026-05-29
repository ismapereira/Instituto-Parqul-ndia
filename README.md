# Instituto Parquelândia: Unindo Vidas, Fortalecendo a Comunidade

![Versão](https://img.shields.io/badge/Versão-2.0.0-brightgreen)
![Status](https://img.shields.io/badge/Status-Restruturado%20(Nuxt%204)-blue)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)
[![Instagram](https://img.shields.io/badge/Instagram-@institutoparquelandia-E4405F?logo=instagram)](https://www.instagram.com/institutoparquelandia/)

![Capa do Projeto](public/img/capa-projeto.png)

## 👤 Desenvolvedor Responsável
**Ismael Pereira**
- 🖥️ Desenvolvedor Fullstack
- 📍 Feira de Santana, Bahia - Brasil
- 🌐 [Perfil no GitHub](https://github.com/ismapereira)

---

## 🌟 Sobre o Projeto

O **Instituto Parquelândia** é uma iniciativa social dedicada a transformar vidas e fortalecer a comunidade de Parquelândia, em Fortaleza, Ceará. O projeto visa ir além da simples assistência social, atuando como um agente de mudança comprometido com o desenvolvimento integral e o empoderamento comunitário.

Esta versão 2.0.0 representa uma **reestruturação total e do zero** do website, migrado para a arquitetura moderna do **Nuxt 4** com **Vue 3** e **Vanilla CSS**, proporcionando uma experiência de usuário (UX) premium de altíssimo impacto visual, SEO perfeito e velocidade de carregamento instantânea no mobile.

---

## 🎯 Missão e Objetivos

* 💖 **Bem-Estar Social**: Promover saúde, apoio psicológico, doação de alimentos e qualidade de vida.
* 🎓 **Desenvolvimento Integral**: Capacitar a comunidade através de workshops práticos (artesanato, costura) e cursos de reforço escolar.
* 👥 **Pensamento Coletivo**: Incentivar a inteligência coletiva e a colaboração através de diálogos abertos e fóruns de escuta ativa.
* 🤝 **Ações Sociais**: Realizar mutirões de impacto social e suporte contínuo a grupos comunitários vulneráveis.

---

## ✨ Funcionalidades e Diferenciais do Novo Site

* ⚡ **Geração de Site Estático (SSG)**: Carregamento inicial ultrarrápido (sub-segundo) graças à pré-compilação em HTML do Nuxt.
* 🎨 **Design System de Alta Fidelidade (Premium HSL)**: Sistema visual completo com cores e tokens HSL adaptativos.
* 🌓 **Dark / Light Mode Nativo**: Transição de tema super fluida com persistência no LocalStorage.
* 📱 **Mobile-First & Touch-Friendly**: Sliders e carrosséis personalizados de toque (touch swipe) nativos para ações e equipe, sem bibliotecas pesadas.
* 🔮 **Glassmorphism**: Aplicação elegante de filtros de desfoque e transparência 3D.
* 📧 **Contato com EmailJS**: Formulário com labels flutuantes reativas, máscara regex dinâmica para telefone, validações completas em tempo real e sistema de **notificação Toast** animada.
* 🔍 **SEO de Nível Corporativo**: Otimização automática de metadados, Open Graph, Twitter Cards, tags geográficas e JSON-LD Schema.org estruturado em pt-BR.

---

## 🚀 Tecnologias Utilizadas

* **Nuxt 4 / Vue 3** (Framework Progressivo de Alta Performance)
* **Vanilla CSS Moderno** (Variáveis CSS, Flexbox, CSS Grid e HSL)
* **EmailJS SDK** (Integração e envio seguro de e-mails)
* **FontAwesome 6** (Biblioteca de ícones vetoriais)
* **Outfit & Inter** (Google Fonts integradas)

---

## 📂 Estrutura do Projeto

```
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── main.css             # Design System e variáveis de tema HSL
│   ├── components/
│   │   ├── Header.vue               # Menu sticky glass e controle de tema
│   │   ├── Hero.vue                 # Apresentação visual imersiva
│   │   ├── ImpactStats.vue          # Contadores animados sob scroll
│   │   ├── Pilares.vue              # Cards de pilares interativos expansíveis
│   │   ├── GaleriaAcoes.vue         # Carrossel de ações com suporte a toque
│   │   ├── Equipe.vue               # Grade de perfis e redes sociais
│   │   ├── ContatoForm.vue          # Formulário reativo e EmailJS
│   │   ├── Footer.vue               # Rodapé dark, mapa e voltar ao topo
│   │   └── Toast.vue                # Feedback flutuante de sucesso/erro
│   ├── layouts/
│   │   └── default.vue              # Layout padrão global do site
│   ├── pages/
│   │   └── index.vue                # Composição e Intersection Observer de Scroll
│   └── app.vue                      # Elemento raiz do Nuxt
├── public/
│   ├── logo.png                     # Logotipo oficial
│   ├── favicons/                    # Ícones de navegador e apple
│   └── img/                         # Imagens otimizadas das ações e equipe
├── nuxt.config.ts                   # Configurações globais de SEO, fontes e estilos
├── tsconfig.json                    # Configurações TypeScript do Nuxt
└── DESIGN.md                        # Documentação técnica do Design System
```

---

## 🛠️ Instalação e Execução Local

### Pré-requisitos
* Node.js (versão 18.x ou superior recomendada)
* npm (gerenciador de pacotes)

### Passo a Passo

1. Clone o repositório:
```bash
git clone https://github.com/ismapereira/Instituto-Parqul-ndia.git
```

2. Navegue até a pasta do projeto:
```bash
cd Instituto-Parqul-ndia
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o servidor de desenvolvimento local:
```bash
npm run dev
```
O projeto estará rodando localmente em `http://localhost:3000`.

---

## 📦 Produção e Publicação (Build SSG)

Para compilar e otimizar o site para a publicação final em qualquer hospedagem estática (como GitHub Pages, Vercel ou Netlify):

1. Gere os arquivos estáticos pré-renderizados:
```bash
npm run generate
```
Isso criará uma pasta chamada `.output/public` contendo o HTML, CSS e JS hiper-otimizados e prontos para publicação.

2. Visualize localmente o build de produção:
```bash
npm run preview
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.

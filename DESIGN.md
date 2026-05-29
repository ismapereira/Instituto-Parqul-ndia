# Sistema de Design - Instituto Parquelândia

Este documento descreve os tokens de design, a tipografia, a paleta de cores e os padrões visuais adotados na reestruturação completa do website do **Instituto Parquelândia** usando **Nuxt 4 / Vue 3** e **Vanilla CSS**.

---

## 🎨 Paleta de Cores (HSL e Tokens de Design)

Utilizamos o formato **HSL (Hue, Saturation, Lightness)** para todas as definições de cores. Isso garante transições de tema suaves, ajustes precisos de contraste para acessibilidade e a geração de variações consistentes.

### ☀️ Tema Claro (Padrão)

O tema claro utiliza cores suaves e limpas, transmitindo transparência, otimismo e acolhimento comunitário.

| Token | HSL | Cor Físico-Visual | Descrição |
| :--- | :--- | :--- | :--- |
| `--brand-primary` | `hsl(161, 74%, 15%)` | Verde Musgo Escuro | Cor institucional principal; representa a esperança e o meio-ambiente. |
| `--brand-secondary` | `hsl(41, 48%, 56%)` | Dourado Envelhecido | Usado para destaques, hovers e botões especiais; simboliza a riqueza comunitária. |
| `--brand-accent` | `hsl(161, 80%, 40%)` | Verde Esmeralda | Destaques sutis, badges e ícones dinâmicos. |
| `--bg-primary` | `hsl(210, 20%, 98%)` | Branco Acinzentado | Fundo principal da página. |
| `--bg-secondary` | `hsl(0, 0%, 100%)` | Branco Puro | Fundo de cartões, formulários e elementos elevados. |
| `--text-primary` | `hsl(210, 30%, 24%)` | Cinza Escuro | Cor principal para títulos grandes e corpo de leitura legível. |
| `--text-secondary` | `hsl(210, 16%, 46%)` | Cinza Médio | Subtítulos e textos auxiliares de menor peso. |

### 🌙 Tema Escuro (Premium Emerald)

Ativado ao adicionar a classe `.dark` no elemento `<html>` ou `<body>`. O tema escuro adota uma estética altamente sofisticada, mesclando tons de verde esmeralda profundo com o brilho dourado e bordas semi-transparentes em neon.

| Token | HSL | Cor Físico-Visual | Descrição |
| :--- | :--- | :--- | :--- |
| `--bg-primary` | `hsl(161, 74%, 4%)` | Verde Negro Abissal | Fundo principal super profundo. |
| `--bg-secondary` | `hsl(161, 74%, 7%)` | Verde Escuro Refletivo | Fundo para cartões e blocos elevados de conteúdo. |
| `--bg-glass` | `rgba(2, 20, 14, 0.8)` | Vidro Escuro | Fundo com opacidade reduzida e desfoque de fundo. |
| `--brand-primary` | `hsl(161, 80%, 35%)` | Esmeralda Luminoso | Verde brilhante para ícones e botões. |
| `--brand-secondary` | `hsl(41, 65%, 60%)` | Dourado Iluminado | Dourado vibrante e brilhante para hovers e elementos-chave. |
| `--text-primary` | `hsl(161, 20%, 93%)` | Off-White Esmeralda | Texto principal claro de altíssima legibilidade. |
| `--text-secondary` | `hsl(161, 10%, 70%)` | Cinza Esmeralda | Textos descritivos e secundários. |

---

## ✍️ Tipografia e Hierarquia Visual

Importamos as fontes diretamente através do Google Fonts para otimização de performance.

* **Títulos e Subtítulos:** `Outfit` (sans-serif)
  - Características: Geométrica, moderna, com cantos levemente arredondados e excelente peso visual em negrito.
  - Pesos utilizados: `400` (Regular), `600` (Semi-bold), `800` (Extra-bold), `900` (Black).
* **Textos e Formulários:** `Inter` (sans-serif)
  - Características: Projetada especificamente para telas, oferece altíssima legibilidade em dispositivos móveis, mesmo em tamanhos pequenos de fonte.
  - Pesos utilizados: `300` (Light), `400` (Regular), `500` (Medium), `600` (Semi-bold).

---

## 🔮 Vidro e Efeitos Premium (Glassmorphism)

O visual premium do site se baseia no uso do **Glassmorphism** (efeito de vidro fosco).

* **Especificação do Vidro Claro:**
  ```css
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid hsl(210, 14%, 90%);
  ```
* **Especificação do Vidro Escuro (Dark Mode):**
  ```css
  background: rgba(2, 20, 14, 0.8);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  ```

---

## ⚡ Transições e Micro-animações

Evitamos animações bruscas ou lentas demais. O site utiliza uma curva de aceleração de transição inspirada nos sistemas operacionais modernos:

* **Curva Bezier Premium:** `cubic-bezier(0.16, 1, 0.3, 1)` (Ultra rápida ao iniciar, desacelera suavemente no final).
* **Efeito de Elevação (Hover Cards):**
  ```css
  transform: translateY(-5px);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  border-color: var(--brand-secondary);
  ```

---

## ♿ Diretrizes de Acessibilidade (WCAG 2.2 AA)

1. **Contraste de Cores:** Todas as combinações de texto e fundo possuem contraste superior a **4.5:1** para texto normal e **3:1** para textos grandes.
2. **Navegação por Teclado:** Elementos focáveis (`a`, `button`, `input`) possuem indicadores visuais de foco bem destacados com `outline-color: var(--brand-secondary)`.
3. **Leitores de Tela:** Utilização correta de atributos `aria-label` em botões de sliders e seletor de tema claro/escuro.

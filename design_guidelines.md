# Design Guidelines: Meu Primeiro Potinho de Orações Landing Page

## Design Approach
High-conversion sales page with dark spiritual theme, mobile-first responsive design, and strategic upsell modal system.

## Core Design Principles

### Color Scheme
- **Background**: Dark slate (bg-slate-900) or deep purple gradient for spiritual/nighttime atmosphere
- **Cards**: Semi-transparent white (bg-white/10) or lighter slate (bg-slate-800)
- **Accents**: Warm colors for CTAs, badges, and highlights

### Spacing & Layout (CRITICAL)
- **Section Padding**: py-12 to py-16 between all major sections
- **Container Padding**: px-6 to px-8 on all containers (never let text touch edges)
- **Element Spacing**: gap-6 between related elements
- **Card Borders**: rounded-2xl for modern, friendly feel

### Typography & Alignment
- **Headlines**: Centered, bold, large text for impact
- **Body Text & Lists**: LEFT-ALIGNED (text-left) for mobile readability
- **Hierarchy**: Clear size differentiation between H1, H2, and body text

## Page Structure & Sections

### 1. Hero Section
- **Headline**: "Transforme a hora de dormir do seu filho no momento mais doce e cheio de fé do dia"
- **Sub-headline**: "Troque o medo do escuro e o vício em telas por uma rotina de conexão com Deus. Baixe, imprima e monte hoje mesmo"
- **Video Placeholder**: Gray background with centered play icon
- **CTA Button**: Pulsating animation, prominent placement: "Quero Transformar as Noites da Minha Casa"

### 2. Target Audience Section
- **Title**: "Para quem é este Potinho?"
- **Layout**: Vertical list with FontAwesome icons
- **Items** (left-aligned):
  - ❤️ Mães que sentem aperto no coração por não orarem com os filhos na correria
  - 📱 Pais que lutam para tirar o celular da criança à noite
  - 🌱 Famílias que querem plantar a sementinha da fé de jeito leve e divertido

### 3. Product Features Grid
- **Title**: "O que você recebe no Kit Digital"
- **Layout**: 2-column grid on mobile, expand on desktop
- **Cards**:
  - 365 Papeizinhos Coloridos (Um para cada dia)
  - Design Lúdico (Ilustrações fofas)
  - Manual de Montagem (Fácil de fazer)
  - Rótulos Decorativos (Para colar no vidro)

### 4. Social Proof
- **2 Testimonial Cards** with 5-star ratings:
  - Mariana Lopes: "Meu filho chorava para não orar. Ontem ele pediu: 'Mamãe, vamos ver o que o Papai do Céu tem pra mim?'. Chorei de emoção."
  - Camila Ferreira: "Simplesmente genial. Imprimi em 10 minutos e montamos juntos. Ele dormiu na hora!"

### 5. Pricing Cards (Two Distinct Cards)

**CARD 1 - PLANO BÁSICO**
- Badge: "93% OFF"
- Price: ~~R$ 137,00~~ **R$ 10,00**
- Features checklist:
  - ✅ 36 Orações Ilustradas
  - ✅ Formato "Sorteio" Divertido
  - ✅ Entrega Imediata (E-mail)
- Button (triggers modal): "Quero Começar Por R$ 10"

**CARD 2 - PLANO PLUS (Highlighted)**
- Badges: "🏆 O MAIS VENDIDO" + "92% OFF"
- Price: ~~R$ 257,00~~ **R$ 20,00**
- Complete checklist:
  - ✅ Tudo do Plano Básico
  - 📚 Álbum "Orações da Noite"
  - 🙏 Mini Devocional Infantil (7 Dias)
  - 🖼️ Mural "Eu e Deus Hoje"
  - ⭐ 10 Desafios Espirituais
  - 📖 Livro Digital: Guia para Pais
- Button (direct link): "Quero o Kit Completo por R$ 20"

### 6. FAQ Accordion
- "É produto físico?" → Não, é digital/PDF
- "Chega na hora?" → Sim, no e-mail

## Modal/Popup Functionality
**Upsell Modal** (triggers on Basic plan button click):
- Dark overlay background
- Centered modal card with rounded corners
- **Title**: "⚠️ ESPERE! OFERTA EXCLUSIVA!"
- **Message**: "Que tal levar o Kit Completo (Plano Plus) com todos os bônus e acesso vitalício por uma diferença minúscula? Leve TUDO por apenas R$ 20,00 (em vez de R$ 257)"
- **Primary CTA** (large, green): "SIM! QUERO APROVEITAR TUDO (R$ 20)"
- **Secondary link** (small, gray text): "Não, obrigado. Quero apenas o básico por R$ 10"

## Component Styling
- **Badges**: Small, colored, positioned at card top
- **CTAs**: Bold, contrasting colors, clear hover states
- **Cards**: Subtle shadows, smooth rounded corners
- **Icons**: FontAwesome library, consistent sizing

## Responsive Behavior
- Mobile-first approach
- Grids collapse to single column on small screens
- Maintain generous spacing on all breakpoints
- Text remains readable at all sizes
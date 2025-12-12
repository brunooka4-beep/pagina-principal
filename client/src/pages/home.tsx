import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Heart, Smartphone, Sprout, Play, Check, Star, FileText, Palette, BookOpen, Tag, Trophy, AlertTriangle, Sparkles, Clock, MessageCircle, Calendar } from "lucide-react";

const CHECKOUT_BASIC_URL = "https://www.ggcheckout.com/checkout/v2/dKvE17cGThmnu5NhBqzq";
const CHECKOUT_PLUS_URL = "https://www.ggcheckout.com/checkout/v2/ALv7JUzYfWPOchtetq27";

function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <section className="relative py-16 px-6 md:px-8 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background to-indigo-900/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="flex justify-center mb-6">
          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/10">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Kit Digital Completo
          </Badge>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground" data-testid="text-hero-headline">
          Potinho com Orações para Dormir
        </h1>

        <div className="relative max-w-[280px] md:max-w-xs mx-auto mb-8 cursor-pointer animate-float">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl rounded-full" />
          <img
            src="/potinho-hero.png"
            alt="Potinho de Orações para Dormir"
            className="relative w-full drop-shadow-[0_20px_50px_rgba(139,92,246,0.5)] hover:scale-105 transition-transform duration-500"
          />
        </div>



        <Button
          size="lg"
          onClick={onCtaClick}
          className="animate-pulse-glow text-base md:text-lg px-6 py-6 md:px-10 md:py-7 rounded-xl font-semibold shadow-xl w-full md:w-auto whitespace-normal h-auto"
          data-testid="button-hero-cta"
          aria-label="Ver planos e preços"
        >
          Quero Transformar as Noites da Minha Casa
        </Button>

        <p className="text-sm text-muted-foreground whitespace-nowrap" data-testid="text-hero-social-proof">
          Mais de 2.000 famílias já transformaram suas noites
        </p>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  const audiences = [
    {
      icon: Heart,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/20",
      text: "Mães que sentem aperto no coração por não orarem com os filhos na correria.",
    },
    {
      icon: Smartphone,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/20",
      text: "Pais que lutam para tirar o celular da criança à noite.",
    },
    {
      icon: Sprout,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/20",
      text: "Famílias que querem plantar a sementinha da fé de jeito leve e divertido.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-gradient-to-b from-background via-slate-900/50 to-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          Para quem é este Potinho?
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Este kit foi criado especialmente para você que...
        </p>

        <div className="space-y-5">
          {audiences.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 text-left p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10"
              data-testid={`audience-item-${index}`}
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <p className="text-lg text-foreground pt-2 leading-relaxed" data-testid={`text-audience-${index}`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-16 px-6 md:px-8 bg-gradient-to-b from-background to-purple-900/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
          Como funciona?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-50" />

          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl transition-opacity opacity-70 group-hover:opacity-100" />
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center transform transition-transform group-hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-indigo-500/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-indigo-300 mb-4">1. O Momento da Descoberta</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Toda noite, seu filho tira do potinho uma oração diferente."
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl blur-xl transition-opacity opacity-70 group-hover:opacity-100" />
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center transform transition-transform group-hover:-translate-y-1">
              <div className="w-20 h-20 mx-auto mb-6 bg-pink-500/20 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-pink-400 fill-pink-400/20" />
              </div>
              <h3 className="text-xl font-bold text-pink-300 mb-4">2. A Conexão</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Você pode ler e a criança repete — criando um momento de fé e afeto juntos."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItWorksSection() {
  const reasons = [
    {
      icon: Sparkles,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/20",
      text: "O formato de sorteio ativa a curiosidade e o interesse da criança",
    },
    {
      icon: MessageCircle,
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/20",
      text: "As orações são curtinhas, com linguagem infantil",
    },
    {
      icon: Clock,
      iconColor: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      text: "Leva menos de 1 minuto por noite",
    },
    {
      icon: Calendar,
      iconColor: "text-rose-400",
      bgColor: "bg-rose-500/20",
      text: "Dá vontade de repetir todos os dias!",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
          Por que funciona?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-full ${item.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <p className="text-lg text-foreground font-medium leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductFeaturesSection() {
  const features = [
    {
      icon: FileText,
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/20",
      title: "365 Papeizinhos Coloridos",
      subtitle: "Um para cada dia do ano",
    },
    {
      icon: Palette,
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/20",
      title: "Design Lúdico",
      subtitle: "Ilustrações fofas e coloridas",
    },
    {
      icon: BookOpen,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/20",
      title: "Manual de Montagem",
      subtitle: "Passo a passo fácil",
    },
    {
      icon: Tag,
      iconColor: "text-green-400",
      bgColor: "bg-green-500/20",
      title: "Rótulos Decorativos",
      subtitle: "Para personalizar o vidro",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          O que você recebe no Kit Digital
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tudo que você precisa para começar hoje mesmo
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center bg-white/5 border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
              data-testid={`feature-card-${index}`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${feature.bgColor} flex items-center justify-center`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
              <p className="text-sm text-muted-foreground" data-testid={`text-feature-subtitle-${index}`}>{feature.subtitle}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground mb-8">
            Veja alguns exemplos do que vem no kit:
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 - Manhã (Azul) */}
            <div className="relative p-6 rounded-3xl bg-sky-50 border-2 border-dashed border-sky-200 shadow-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 right-4 text-sky-300">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="absolute bottom-4 left-4 text-sky-300">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-bold text-sky-300 tracking-wider uppercase mb-2 block">Oração #1</span>
              <h4 className="text-xl font-bold text-sky-500 mb-3">Oração da Manhã</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Querido Deus, obrigado por este novo dia. Ajuda-me a ser gentil e a espalhar alegria por onde eu passar. Amém.
              </p>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-sky-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-sky-200"></div>
              </div>
            </div>

            {/* Card 2 - Proteção (Rosa) */}
            <div className="relative p-6 rounded-3xl bg-pink-50 border-2 border-dashed border-pink-200 shadow-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 right-4 text-pink-300">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="absolute bottom-4 left-4 text-pink-300">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-bold text-pink-300 tracking-wider uppercase mb-2 block">Oração #2</span>
              <h4 className="text-xl font-bold text-pink-500 mb-3">Oração de Proteção</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Senhor, protege-me hoje em tudo que eu fizer. Guarda meus passos e me livra de todo mal. Amém.
              </p>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-pink-200"></div>
              </div>
            </div>

            {/* Card 3 - Gratidão (Amarelo) */}
            <div className="relative p-6 rounded-3xl bg-amber-50 border-2 border-dashed border-amber-200 shadow-sm hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 right-4 text-amber-300">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="absolute bottom-4 left-4 text-amber-300">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="text-xs font-bold text-amber-300 tracking-wider uppercase mb-2 block">Oração #3</span>
              <h4 className="text-xl font-bold text-amber-500 mb-3">Oração da Gratidão</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                Obrigado, Deus, pela minha família, meus amigos e por tudo de bom na minha vida. Eu Te amo! Amém.
              </p>
              <div className="flex justify-center gap-1 mt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-200"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Mariana Lopes",
      text: "Meu filho chorava para não orar. Ontem ele pediu: 'Mamãe, vamos ver o que o Papai do Céu tem pra mim?'. Chorei de emoção.",
      avatar: "M",
    },
    {
      name: "Camila Ferreira",
      text: "Simplesmente genial. Imprimi em 10 minutos e montamos juntos. Ele dormiu na hora!",
      avatar: "C",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8 bg-gradient-to-b from-background via-purple-900/20 to-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          O que as mães estão dizendo
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Histórias reais de famílias transformadas
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-white/5 border-white/10 backdrop-blur-sm"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.5)]" />
                ))}
              </div>
              <p className="text-foreground mb-6 text-lg leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white font-semibold" data-testid={`avatar-testimonial-${index}`}>
                  {testimonial.avatar}
                </div>
                <p className="font-semibold text-foreground" data-testid={`text-testimonial-name-${index}`}>{testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ onBasicClick }: { onBasicClick: () => void }) {
  const basicFeatures = [
    "36 Orações Ilustradas",
    "Formato \"Sorteio\" Divertido",
    "Entrega Imediata (E-mail)",
  ];

  const plusFeatures = [
    { text: "Tudo do Plano Básico", icon: Check },
    { text: "Álbum \"Orações da Noite\" (10 orações)", icon: BookOpen },
    { text: "Mini Devocional Infantil (7 Dias)", icon: Heart },
    { text: "Mural \"Eu e Deus Hoje\" (Checklist)", icon: FileText },
    { text: "10 Desafios Espirituais", icon: Star },
    { text: "Livro Digital: Guia para Pais", icon: BookOpen },
  ];

  return (
    <section id="precos" className="py-16 px-6 md:px-8 bg-gradient-to-b from-background to-purple-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          Escolha o plano ideal para sua família
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Oferta por tempo limitado
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <Card className="relative p-6 bg-white/5 border-white/10 backdrop-blur-sm flex flex-col" data-testid="card-plan-basic">
            <Badge className="absolute -top-3 left-6 bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-500/30 px-2" data-testid="badge-basic-discount">
              93% OFF
            </Badge>

            <h3 className="text-xl font-bold text-foreground mt-4 mb-2" data-testid="text-plan-basic-title">PLANO BÁSICO</h3>

            <div className="mb-6">
              <span className="text-muted-foreground line-through text-lg" data-testid="text-basic-original-price">R$ 137,00</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold text-foreground" data-testid="text-basic-price">R$ 10</span>
                <span className="text-muted-foreground text-xl">,00</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {basicFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-left" data-testid={`text-basic-feature-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="w-full border-white/20 hover:bg-white/10"
              onClick={onBasicClick}
              data-testid="button-plan-basic"
              aria-label="Escolher plano básico por R$ 10"
            >
              Quero Começar Por R$ 10
            </Button>
          </Card>

          <Card className="relative p-6 bg-gradient-to-br from-primary/20 to-purple-900/30 border-primary/40 ring-2 ring-primary/30 shadow-xl shadow-primary/10 flex flex-col" data-testid="card-plan-plus">
            <div className="absolute -top-3 left-6 flex gap-2 flex-wrap">
              <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black border-0 shadow-lg shadow-yellow-500/30 font-semibold" data-testid="badge-plus-bestseller">
                <Trophy className="w-3 h-3 mr-1" />
                O MAIS VENDIDO
              </Badge>
              <Badge className="bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-500/30" data-testid="badge-plus-discount">
                92% OFF
              </Badge>
            </div>

            <h3 className="text-xl font-bold text-foreground mt-4 mb-2" data-testid="text-plan-plus-title">PLANO PLUS</h3>

            <div className="mb-6">
              <span className="text-muted-foreground line-through text-lg" data-testid="text-plus-original-price">R$ 257,00</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent" data-testid="text-plus-price">R$ 20</span>
                <span className="text-muted-foreground text-xl">,00</span>
              </div>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {plusFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-left" data-testid={`text-plus-feature-${index}`}>
                  <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full shadow-lg shadow-primary/30"
              asChild
              data-testid="button-plan-plus"
            >
              <a href={CHECKOUT_PLUS_URL} aria-label="Escolher plano plus por R$ 20">
                Quero o Kit Completo por R$ 20
              </a>
            </Button>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Pagamento seguro via PIX ou Cartão de Crédito
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "É produto físico?",
      answer: "Não, é um produto 100% digital em formato PDF. Você recebe os arquivos por e-mail e pode imprimir quantas vezes quiser na sua casa ou em uma gráfica.",
    },
    {
      question: "Chega na hora?",
      answer: "Sim! Após a confirmação do pagamento, você recebe o acesso imediato por e-mail. Em caso de pagamento via PIX ou cartão, a liberação é instantânea.",
    },
    {
      question: "Posso imprimir em casa?",
      answer: "Sim! Os arquivos são otimizados para impressão caseira em papel A4. Você pode usar qualquer impressora, colorida ou preto e branco.",
    },
    {
      question: "Funciona para qualquer idade?",
      answer: "O material foi desenvolvido para crianças de 2 a 10 anos, mas pode ser adaptado para crianças mais velhas ou até adultos que desejam iniciar uma rotina de oração.",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-foreground">
          Perguntas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Tire suas dúvidas antes de comprar
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:bg-white/10 data-[state=open]:border-primary/30 transition-all"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-foreground hover:no-underline py-5 font-medium" data-testid={`text-faq-question-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function UpsellModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90%] md:w-full max-w-md bg-gradient-to-b from-slate-900 to-slate-950 border-white/10 p-4 md:p-6 rounded-xl" data-testid="modal-upsell">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-500/20 flex items-center justify-center border border-yellow-500/30">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
          <DialogTitle className="text-xl md:text-2xl font-bold text-foreground">
            ESPERE! OFERTA EXCLUSIVA!
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base leading-relaxed">
            Que tal levar o <span className="text-primary font-semibold">Kit Completo (Plano Plus)</span> com todos os bônus e acesso vitalício por uma diferença minúscula?
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 text-center">
          <p className="text-lg text-foreground mb-3">
            Leve <span className="font-bold text-primary">TUDO</span> por mais
          </p>
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-pink-400 bg-clip-text text-transparent" data-testid="text-modal-price">R$ 9</span>
            <span className="text-xl text-muted-foreground">,99</span>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-modal-original-price">
            <span className="line-through">em vez de R$ 257</span>
          </p>
        </div>

        <div className="space-y-4">
          <Button
            className="w-full text-base md:text-lg py-4 md:py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/30 font-semibold"
            asChild
            data-testid="button-modal-accept"
          >
            <a href={CHECKOUT_PLUS_URL} aria-label="Aceitar oferta e comprar kit completo por mais R$ 9,99">
              SIM! QUERO APROVEITAR TUDO
            </a>
          </Button>

          <a
            href={CHECKOUT_BASIC_URL}
            className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors py-3 underline underline-offset-4"
            data-testid="link-modal-decline"
            aria-label="Recusar oferta e comprar apenas o plano básico por R$ 10"
          >
            Não, obrigado. Quero apenas o básico
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/10 bg-gradient-to-t from-slate-950 to-transparent">
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Meu Primeiro Potinho de Orações. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground">
          Produto digital. Entrega imediata após confirmação do pagamento.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const scrollToPrecos = () => {
    const section = document.getElementById("precos");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBasicClick = () => {
    setIsUpsellOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection onCtaClick={scrollToPrecos} />
      <TargetAudienceSection />
      <HowItWorksSection />
      <WhyItWorksSection />
      <ProductFeaturesSection />
      <TestimonialsSection />
      <PricingSection onBasicClick={handleBasicClick} />
      <FAQSection />
      <Footer />

      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
      />
    </div>
  );
}

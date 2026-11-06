// =============================================================================
//  Textos padrão do template. São mesclados com o clinicData (src/lib/config.js):
//  tudo que a clínica definir no clinicData sobrescreve o que está aqui.
//  Assim, configurações antigas continuam funcionando quando o layout ganha seções novas.
// =============================================================================

export const defaults = {
  content: {
    whatsapp: {
      headerCta: "Agendar",
    },

    hero: {
      secondaryCta: "Conheça os tratamentos",
    },

    services: {
      eyebrow: "Tratamentos",
      title: "Cuidado especializado para cada fase da sua pele",
      subtitle: "Cada protocolo começa com uma avaliação individual, para indicar apenas o que faz sentido para você.",
      ctaText: "Agendar este tratamento",
    },

    journey: {
      eyebrow: "Como funciona",
      title: "Sua jornada, do primeiro contato ao resultado",
      steps: [
        {
          title: "Avaliação",
          description: "Uma conversa individual para entender sua pele, sua rotina e seus objetivos.",
        },
        {
          title: "Plano personalizado",
          description: "Indicação apenas do que faz sentido para você, com clareza sobre cada etapa.",
        },
        {
          title: "Tratamento",
          description: "Procedimentos com técnica, tecnologia e todo o cuidado com o seu conforto.",
        },
        {
          title: "Acompanhamento",
          description: "Orientações no pós e retorno para garantir resultados reais e duradouros.",
        },
      ],
    },

    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Antes de agendar",
      items: [
        {
          q: "Como funciona a primeira avaliação?",
          a: "Você conversa diretamente com a especialista, que analisa a sua pele e os seus objetivos e indica o tratamento mais adequado para você.",
        },
        {
          q: "Os resultados ficam naturais?",
          a: "Sim. Cada protocolo é planejado de forma individual, para realçar a sua beleza com naturalidade e segurança.",
        },
        {
          q: "Como faço para agendar?",
          a: "Toque em qualquer botão de WhatsApp desta página e fale direto com a equipe. Respondemos o mais rápido possível.",
        },
      ],
    },

    location: {
      directionsText: "Como chegar",
      phoneLabel: "Telefone e WhatsApp",
    },

    reviews: {
      ratingLabel: "Nota média no Google",
    },

    footer: {
      navTitle: "Navegação",
      contactTitle: "Contato",
      followTitle: "Acompanhe",
    },

    ui: {
      menuLabel: "Abrir menu",
    },
  },
};

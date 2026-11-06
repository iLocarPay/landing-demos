// =============================================================================
//  CONFIGURAÇÃO ÚNICA DO SITE
//  Todo o conteúdo da landing page vem daqui. Para usar com outra clínica,
//  basta editar este arquivo — nenhum componente precisa ser alterado.
// =============================================================================

export const clinicConfig = {
  info: {
    name: "Dra. Luigina Spera",
    subName: "Saúde e Estética Avançada",
    tagline: "Harmonização glútea e facial com naturalidade, segurança e ciência em cada detalhe.",
    logoText: "LUIGINA SPERA",
    address: "Av. Otto Ribeiro, 965 - Jardim Paulista, Assis - SP, 19814-470",
    googleMapsEmbedUrl:
      "https://www.google.com/maps?q=Dra.+Luigina+Spera+-+Sa%C3%BAde+e+Est%C3%A9tica+Avan%C3%A7ada,+Av.+Otto+Ribeiro,+965,+Assis+-+SP&ll=-22.6593642,-50.4042659&z=16&output=embed",
    instagramUrl: "https://www.instagram.com/draluiginaspera/",
    instagramHandle: "@draluiginaspera",
    openingHours: "Seg a Sex • 9h às 19h",
    // Opcional: exibido na seção Localização (fonte: linklist.bio e post de 30/10/2026 no Instagram)
    otherLocation: "Também atende em São Paulo/SP • (11) 99652-5662",
  },

  theme: {
    primary: "#D4AF37", // Dourado / Rose Gold (Variável principal de destaque)
    secondary: "#1A1A1A", // Preto / Grafite de contraste
    accent: "#FAF7F2", // Off-white / Fundo suave
    whatsappGreen: "#25D366",
  },

  seo: {
    title: "Dra. Luigina Spera | Saúde e Estética Avançada em Assis - SP",
    description:
      "Harmonização glútea BrazilianBooty®, harmonização facial, lipedema e emagrecimento em Assis - SP. Nota 5,0 no Google. Agende sua avaliação pelo WhatsApp.",
  },

  whatsapp: {
    number: "5518998166049", // (18) 99816-6049 — 55 = código do Brasil (obrigatório no link wa.me)
    defaultMessage:
      "Olá! Vi o site da clínica e gostaria de agendar uma avaliação personalizada.",
    // {service} é substituído pelo nome do procedimento clicado
    serviceMessageTemplate:
      "Olá! Vi o site da clínica e tenho interesse em {service}. Gostaria de agendar uma avaliação.",
    ctaText: "Agendar Avaliação no WhatsApp",
    subText: "Atendimento Rápido • Resposta em até 5 min",
    floatingButtonLabel: "Fale conosco no WhatsApp",
  },

  ui: {
    menuLabel: "Abrir menu",
  },

  navigation: [
    { label: "Procedimentos", href: "#procedimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
  ],

  media: {
    heroBackground:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200",
    doctorPhoto:
      "https://images.unsplash.com/photo-1594824813566-7885a6a117b4?q=80&w=800",
    clinicAmbience: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=600",
    ],
  },

  hero: {
    eyebrow: "Saúde e Estética Avançada • Assis - SP",
    highlights: ["Harmonização Glútea & Facial", "Formação internacional", "Ciência em cada detalhe"],
  },

  sections: {
    services: {
      eyebrow: "Procedimentos",
      title: "Harmonização glútea, facial e saúde de dentro para fora",
      subtitle:
        "Cada protocolo é personalizado após uma avaliação detalhada, respeitando a sua anatomia e os seus objetivos.",
      ctaText: "Quero saber mais",
    },
    about: {
      eyebrow: "Sobre a Especialista",
    },
    ambience: {
      eyebrow: "Nosso Espaço",
      title: "Um ambiente pensado para o seu conforto",
      subtitle: "Privacidade, acolhimento e rigor nos protocolos de biossegurança.",
    },
    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Quem viveu a experiência recomenda",
      linkText: "Ver todas as avaliações no Google",
    },
    location: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      addressLabel: "Endereço",
      hoursLabel: "Horário de atendimento",
      socialLabel: "Instagram",
      otherLocationLabel: "Outra unidade",
      mapTitle: "Mapa de localização da clínica",
    },
    finalCta: {
      title: "Sua melhor versão começa com uma conversa",
      subtitle:
        "Agende uma avaliação personalizada e descubra o protocolo ideal para você, sem compromisso.",
    },
  },

  about: {
    name: "Dra. Luigina Spera",
    // Formação conforme a bio do Instagram. TODO: adicionar nº do conselho (ex.: CRM/CRBM)
    credentials: "UNESP • UEM  |  Harvard (Boston) • Madri • Parma",
    // Textos baseados na bio e nas legendas do Instagram @draluiginaspera (nov/2026)
    bio: [
      "Ciência em cada detalhe. Com formação no Brasil (UNESP e UEM) e no exterior — Harvard (Boston), Madri e Parma —, a Dra. Luigina Spera une técnica, ciência e um olhar individualizado para cada paciente.",
      "Cada paciente carrega uma história, uma insegurança e um motivo diferente para estar ali. Acompanhar pessoas recuperando a confiança e voltando a se sentir bem é o que move o seu trabalho.",
      "Saúde e beleza começam de dentro para fora: do protocolo estético aos cuidados com a pele e a nutrição, tudo parte de uma avaliação individualizada.",
    ],
    // Somente números verificáveis (Google Maps e Instagram)
    stats: [
      { value: "5,0", label: "Nota no Google" },
      { value: "11 mil", label: "Seguidores no Instagram" },
      { value: "4", label: "Países de formação" },
    ],
  },

  differentials: [
    {
      icon: "shield",
      title: "Ciência em cada detalhe",
      description: "Formação internacional e protocolos indicados com critério, sempre prezando pela saúde.",
    },
    {
      icon: "sparkles",
      title: "Naturalidade, sem exageros",
      description: "Resultados harmônicos que respeitam a sua anatomia e a sua identidade.",
    },
    {
      icon: "heart",
      title: "De dentro para fora",
      description: "Cuidado que continua em casa, com cosmética coreana prescrita e atenção à nutrição.",
    },
  ],

  // Fonte: Instagram @draluiginaspera e linklist.bio/draluiginaspera (nov/2026)
  // TODO: trocar as imagens por fotos reais da clínica / dos procedimentos
  services: [
    {
      id: "gluteo",
      name: "Harmonização Glútea BrazilianBooty®",
      description:
        "Protocolo assinatura para contorno, projeção e correção da depressão trocantérica (o “culote” para dentro), planejado de acordo com a sua anatomia para um resultado harmônico e natural.",
      image: "https://images.unsplash.com/photo-1512290900676-26c2a7a795b1?q=80&w=500",
      tag: "Assinatura",
    },
    {
      id: "facial",
      name: "Harmonização Facial",
      description:
        "Realce dos traços com equilíbrio e naturalidade — ideal também para noivas que querem estar radiantes no grande dia, sem perder a própria identidade.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=500",
      tag: "Mais Procurado",
    },
    {
      id: "lipedema",
      name: "Tratamento de Lipedema",
      description:
        "Abordagem individualizada para o lipedema, com foco no alívio dos sintomas, no contorno corporal e na qualidade de vida.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=500",
      tag: "Saúde & Bem-estar",
    },
    {
      id: "emagrecimento",
      name: "Emagrecimento com PNL",
      description:
        "Programa de emagrecimento que une saúde, avaliação individualizada e Programação Neurolinguística (PNL) para mudanças reais e duradouras — de dentro para fora.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=500",
      tag: "Exclusivo",
    },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "28 avaliações no Google",
    googleMapsLink:
      "https://www.google.com/maps/place/Dra.+Luigina+Spera+-+Sa%C3%BAde+e+Est%C3%A9tica+Avan%C3%A7ada/@-22.6593642,-50.4042659,17z/data=!4m6!3m5!1s0x94953975d9294a7b:0x239ce05236b9be93!8m2!3d-22.6593642!4d-50.4042659!16s%2Fg%2F11x0g_tgsm",
    // avatar opcional: se vazio, mostra as iniciais do autor
    items: [
      {
        author: "Giovana Chiampi",
        timeAgo: "há 2 meses",
        stars: 5,
        comment:
          "Quero agradecer à Dra. Luigina e toda a equipe pelo excelente atendimento. O ambiente é lindo, organizado e transmite muita confiança. A Dra. Luigina é extremamente cuidadosa, explica cada procedimento com clareza e faz tudo com muita dedicação. Estou muito feliz com o resultado e com toda a experiência.",
        avatar: "",
      },
      {
        author: "Giovana Croce",
        timeAgo: "há 2 meses",
        stars: 5,
        comment:
          "Atendimento impecável do início ao fim! A Luigina tem um cuidado único em explicar cada detalhe e indicar o melhor procedimento, sem exageros e sempre prezando pela saúde e pela harmonia. Eu e minha mãe não trocamos por nada, confiamos de olhos fechados!",
        avatar: "",
      },
      {
        author: "Marcelo Machado",
        timeAgo: "há 4 meses",
        stars: 5,
        comment:
          "Profissional extremamente competente. Atendimento excelente e resultado muito satisfatório. Recomendo!",
        avatar: "",
      },
    ],
  },

  footer: {
    copyright: "Todos os direitos reservados.",
    disclaimer:
      "Os resultados podem variar de pessoa para pessoa. Procedimentos realizados mediante avaliação prévia.",
  },
};

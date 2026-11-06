// =============================================================================
//  clinicData — ÚNICA fonte de conteúdo do site
//  Para reaproveitar o site em outra clínica, edite SOMENTE este arquivo.
//  Molde em branco: src/config/clinicData.template.js  •  Passo a passo: README.md
// =============================================================================

export const clinicData = {
  // ---------------------------------------------------------------------------
  // Identidade Visual e Marca
  // ---------------------------------------------------------------------------
  brand: {
    name: "Dra. Luigina Spera",
    tagline: "Saúde e Estética Avançada",
    logoText: "LUIGINA SPERA",
    whatsappNumber: "5518998166049", // 55 + DDD + número, só dígitos — destino de TODOS os botões
    city: "Assis - SP",
    address: "Av. Otto Ribeiro, 965 - Jardim Paulista, Assis - SP, 19814-470",
    instagramUrl: "https://www.instagram.com/draluiginaspera/",
    googleMapsUrl:
      "https://www.google.com/maps/place/Dra.+Luigina+Spera+-+Sa%C3%BAde+e+Est%C3%A9tica+Avan%C3%A7ada/@-22.6593642,-50.4042659,17z/data=!4m6!3m5!1s0x94953975d9294a7b:0x239ce05236b9be93!8m2!3d-22.6593642!4d-50.4042659!16s%2Fg%2F11x0g_tgsm",

    // Opcionais (podem ficar vazios)
    instagramHandle: "@draluiginaspera",
    openingHours: "Seg a Sex • 9h às 19h",
    otherLocation: "Também atende em São Paulo/SP • (11) 99652-5662",
    googleMapsEmbedUrl: "", // vazio = mapa gerado automaticamente a partir de name + address
  },

  // ---------------------------------------------------------------------------
  // Tema de Cores Dinâmico (altera o tom do site inteiro)
  // ---------------------------------------------------------------------------
  theme: {
    primaryColor: "#D4AF37", // destaque: dourado / rose gold / nude
    secondaryColor: "#1A1A1A", // contraste: preto / grafite
    backgroundColor: "#FAF7F2", // fundo: off-white
  },

  // ---------------------------------------------------------------------------
  // Mídia e Imagens — arquivos em public/images/ (ou URLs completas)
  // ---------------------------------------------------------------------------
  media: {
    heroImage: "images/hero-retrato.jpg", // retrato ao lado do título (vazio = sem foto)
    doctorPhoto: "images/sobre-madri.jpg",
    ambienceImages: ["images/espaco-clinica-sp.jpg", "images/espaco-diplomas.jpg"],
  },

  // ---------------------------------------------------------------------------
  // Serviços e Procedimentos (cards dinâmicos — até 4 recomendados)
  // ---------------------------------------------------------------------------
  services: [
    {
      id: "1",
      title: "Harmonização Glútea BrazilianBooty®",
      description:
        "Protocolo assinatura para contorno, projeção e correção da depressão trocantérica (o “culote” para dentro), planejado de acordo com a sua anatomia para um resultado harmônico e natural.",
      image: "images/servico-gluteo.jpg",
      tag: "Assinatura",
    },
    {
      id: "2",
      title: "Harmonização Facial",
      description:
        "Realce dos traços com equilíbrio e naturalidade — ideal também para noivas que querem estar radiantes no grande dia, sem perder a própria identidade.",
      image: "images/servico-facial.jpg",
      tag: "Mais Procurado",
    },
    {
      id: "3",
      title: "Tratamento de Lipedema",
      description:
        "Abordagem individualizada para o lipedema, com foco no alívio dos sintomas, no contorno corporal e na qualidade de vida.",
      image: "images/servico-lipedema.jpg",
      tag: "Saúde & Bem-estar",
    },
    {
      id: "4",
      title: "Emagrecimento com PNL",
      description:
        "Programa de emagrecimento que une saúde, avaliação individualizada e Programação Neurolinguística (PNL) para mudanças reais e duradouras — de dentro para fora.",
      image: "images/servico-emagrecimento.jpg",
      tag: "Exclusivo",
    },
  ],

  // ---------------------------------------------------------------------------
  // Prova Social (depoimentos REAIS do Google Maps)
  // ---------------------------------------------------------------------------
  googleReviews: {
    rating: "5,0",
    totalReviews: "28",
    items: [
      {
        author: "Giovana Chiampi",
        timeAgo: "há 2 meses",
        comment:
          "Quero agradecer à Dra. Luigina e toda a equipe pelo excelente atendimento. O ambiente é lindo, organizado e transmite muita confiança. A Dra. Luigina é extremamente cuidadosa, explica cada procedimento com clareza e faz tudo com muita dedicação. Estou muito feliz com o resultado e com toda a experiência.",
        stars: 5,
      },
      {
        author: "Giovana Croce",
        timeAgo: "há 2 meses",
        comment:
          "Atendimento impecável do início ao fim! A Luigina tem um cuidado único em explicar cada detalhe e indicar o melhor procedimento, sem exageros e sempre prezando pela saúde e pela harmonia. Eu e minha mãe não trocamos por nada, confiamos de olhos fechados!",
        stars: 5,
      },
      {
        author: "Marcelo Machado",
        timeAgo: "há 4 meses",
        comment:
          "Profissional extremamente competente. Atendimento excelente e resultado muito satisfatório. Recomendo!",
        stars: 5,
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Textos das seções (o que muda de clínica para clínica fica aqui também)
  // ---------------------------------------------------------------------------
  content: {
    seo: {
      title: "", // vazio = "{name} | {tagline} em {city}"
      description:
        "Harmonização glútea BrazilianBooty®, harmonização facial, lipedema e emagrecimento em Assis - SP. Nota 5,0 no Google. Agende sua avaliação pelo WhatsApp.",
    },

    whatsapp: {
      defaultMessage: "Olá! Vi o site da clínica e gostaria de agendar uma avaliação personalizada.",
      serviceMessage: "Olá! Vi o site da clínica e tenho interesse em {service}. Gostaria de agendar uma avaliação.",
      ctaText: "Agendar Avaliação no WhatsApp",
      subText: "Atendimento Rápido • Resposta em até 5 min",
      floatingLabel: "Fale conosco no WhatsApp",
    },

    hero: {
      eyebrow: "Saúde e Estética Avançada • Assis - SP",
      subtitle: "Harmonização glútea e facial com naturalidade, segurança e ciência em cada detalhe.",
      highlights: ["Harmonização Glútea & Facial", "Formação internacional", "Ciência em cada detalhe"],
    },

    services: {
      eyebrow: "Procedimentos",
      title: "Harmonização glútea, facial e saúde de dentro para fora",
      subtitle:
        "Cada protocolo é personalizado após uma avaliação detalhada, respeitando a sua anatomia e os seus objetivos.",
      ctaText: "Quero saber mais",
    },

    about: {
      eyebrow: "Sobre a Especialista",
      name: "Dra. Luigina Spera",
      credentials: "UNESP • UEM  |  Harvard (Boston) • Madri • Parma", // TODO: nº do conselho (CRM/CRBM)
      bio: [
        "Ciência em cada detalhe. Com formação no Brasil (UNESP e UEM) e no exterior — Harvard (Boston), Madri e Parma —, a Dra. Luigina Spera une técnica, ciência e um olhar individualizado para cada paciente.",
        "Cada paciente carrega uma história, uma insegurança e um motivo diferente para estar ali. Acompanhar pessoas recuperando a confiança e voltando a se sentir bem é o que move o seu trabalho.",
        "Saúde e beleza começam de dentro para fora: do protocolo estético aos cuidados com a pele e a nutrição, tudo parte de uma avaliação individualizada.",
      ],
      stats: [
        { value: "5,0", label: "Nota no Google" },
        { value: "11 mil", label: "Seguidores no Instagram" },
        { value: "4", label: "Países de formação" },
      ],
    },

    // Ícones disponíveis: "shield" | "sparkles" | "heart"
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

    ambience: {
      eyebrow: "Nosso Espaço",
      title: "Um ambiente pensado para o seu conforto",
      subtitle: "Privacidade, acolhimento e rigor nos protocolos de biossegurança.",
    },

    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Quem viveu a experiência recomenda",
      countSuffix: "avaliações no Google",
      linkText: "Ver todas as avaliações no Google",
    },

    location: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      addressLabel: "Endereço",
      hoursLabel: "Horário de atendimento",
      otherLocationLabel: "Outra unidade",
      socialLabel: "Instagram",
      mapTitle: "Mapa de localização da clínica",
    },

    finalCta: {
      title: "Sua melhor versão começa com uma conversa",
      subtitle:
        "Agende uma avaliação personalizada e descubra o protocolo ideal para você, sem compromisso.",
    },

    navigation: [
      { label: "Procedimentos", href: "#procedimentos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Avaliações", href: "#avaliacoes" },
      { label: "Localização", href: "#localizacao" },
    ],

    footer: {
      copyright: "Todos os direitos reservados.",
      disclaimer:
        "Os resultados podem variar de pessoa para pessoa. Procedimentos realizados mediante avaliação prévia.",
      credit: { prefix: "Desenvolvido por", name: "DLF TECH", url: "https://dlftech.com.br/" },
    },

    ui: { menuLabel: "Abrir menu" },
  },
};

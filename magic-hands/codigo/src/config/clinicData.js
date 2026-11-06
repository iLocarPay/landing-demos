// =============================================================================
//  clinicData — ÚNICA fonte de conteúdo do site
//  Clínica: Magic Hands — Dra. Flávia Ribeiro (Araraquara - SP)
//  Fontes: Google (perfil da empresa) e Instagram @dra.flavialribeiro (nov/2026)
// =============================================================================

export const clinicData = {
  brand: {
    name: "Magic Hands",
    tagline: "Harmonização e Estética • Dra. Flávia Ribeiro",
    logoText: "MAGIC HANDS",
    whatsappNumber: "5516991566832", // (16) 99156-6832 — telefone do perfil no Google
    city: "Araraquara - SP",
    address: "R. Expedicionários do Brasil, 2297 - Centro, Araraquara - SP, 14801-360",
    instagramUrl: "https://www.instagram.com/dra.flavialribeiro/",
    googleMapsUrl: "https://maps.google.com/?cid=3704055970177517254",

    instagramHandle: "@dra.flavialribeiro",
    openingHours: "Seg a Sex • 9h às 18h  |  Sáb • 9h às 12h",
    otherLocation: "",
    googleMapsEmbedUrl: "",
  },

  // Cores tiradas do Instagram dela: malva da moldura "Magic Hands", blush das artes, marrom rosado dos textos
  theme: {
    primaryColor: "#C18085", // malva / rosé
    secondaryColor: "#4B2B30", // rosewood profundo
    backgroundColor: "#FBF3F0", // blush
  },

  media: {
    heroImage: "images/hero-retrato.jpg",
    doctorPhoto: "images/sobre-retrato.jpg",
    ambienceImages: [], // sem fotos reais do espaço no Instagram → seção "Nosso Espaço" fica oculta
  },

  services: [
    {
      id: "1",
      title: "Botox & Bioestimuladores",
      description:
        "Toxina botulínica para suavizar linhas de expressão e bioestimuladores (Radiesse, Sculptra, Ellansé) para devolver firmeza e colágeno à pele.",
      image: "images/servico-bioestimulador.jpg",
      tag: "Mais Procurado",
    },
    {
      id: "2",
      title: "Preenchimento Labial",
      description:
        "Lábios definidos e hidratados com técnica e naturalidade: contorno e proporção que valorizam o seu rosto.",
      image: "images/servico-labios.jpg",
      tag: "Naturalidade",
    },
    {
      id: "3",
      title: "Laser Lavieen",
      description:
        "Pele mais uniforme, luminosa e viçosa: renova a textura, estimula o colágeno e realça a sua beleza natural.",
      image: "images/servico-lavieen.jpg",
      tag: "Pele Radiante",
    },
    {
      id: "4",
      title: "Ultrassom Microfocado",
      description:
        "Tecnologia Ultraformer III para efeito lifting sem cirurgia em olhos, contorno facial e papada.",
      image: "images/servico-microfocado.jpg",
      tag: "Alta Tecnologia",
    },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "225",
    items: [
      {
        author: "Michelle da Silva",
        timeAgo: "há 1 ano",
        comment:
          "A Dra. Flávia é, sem dúvida, a melhor! Suas mãos são verdadeiras mãos de fada — delicadas, precisas e transformadoras. O cuidado, a atenção aos detalhes e o resultado final fazem dela o melhor custo-benefício que uma mulher pode ter. Ela nos deixa lindas e, acima de tudo, felizes!",
        stars: 5,
      },
      {
        author: "Thais Lastri",
        timeAgo: "há 1 ano",
        comment:
          "Dra Flávia, excelente profissional, super atenciosa, nos explicou detalhadamente o procedimento, a todo momento preocupada com o bem-estar do paciente, foi realizado bioestimulador e botox, e o resultado foi perfeito!! Super recomendo!!",
        stars: 5,
      },
      {
        author: "Camila Messali",
        timeAgo: "há 2 anos",
        comment:
          "Profissional pós graduada, atenciosa e preço honesto. Além da qualidade do atendimento, é muito sincera. Embora faça todos os tipos de procedimentos, vai te recomendar apenas aquilo que é da queixa do cliente e necessário ao tratamento de cada um. Projeto individual e singular. Adorei!",
        stars: 5,
      },
    ],
  },

  content: {
    seo: {
      title: "Magic Hands | Dra. Flávia Ribeiro • Estética em Araraquara - SP",
      description:
        "Botox, bioestimuladores, preenchimento labial, Laser Lavieen e ultrassom microfocado em Araraquara - SP. Nota 5,0 com 225 avaliações no Google. Agende pelo WhatsApp.",
    },

    whatsapp: {
      defaultMessage: "Olá! Vi o site da Magic Hands e gostaria de agendar uma avaliação com a Dra. Flávia.",
      serviceMessage: "Olá! Vi o site da Magic Hands e tenho interesse em {service}. Gostaria de agendar uma avaliação com a Dra. Flávia.",
      ctaText: "Agendar Avaliação no WhatsApp",
      subText: "Atendimento personalizado • Planos a partir de R$ 199/mês",
      floatingLabel: "Fale com a Magic Hands no WhatsApp",
    },

    hero: {
      eyebrow: "Dra. Flávia Ribeiro • Araraquara - SP",
      subtitle: "Rejuvenescimento em um passe de mágica: estética avançada com naturalidade, há mais de 9 anos.",
      highlights: ["+2.000 clientes", "5,0 com 225 avaliações", "Planos Magic Hands"],
    },

    services: {
      eyebrow: "Procedimentos",
      title: "Aqui a mágica acontece",
      subtitle:
        "Cada tratamento é indicado após uma avaliação individual: só o que a sua pele realmente precisa, com naturalidade.",
      ctaText: "Quero saber mais",
    },

    about: {
      eyebrow: "Sobre a Especialista",
      name: "Dra. Flávia Ribeiro",
      credentials: "Estética Avançada • Pós-graduada", // TODO: confirmar formação e nº do conselho
      bio: [
        "Há mais de 9 anos na estética avançada e com mais de 2.000 clientes atendidas, a Dra. Flávia Ribeiro fundou a Magic Hands com uma missão: um atendimento personalizado, que valoriza a beleza natural de cada pessoa.",
        "Estética sem abusos: cada protocolo nasce de uma avaliação sincera, recomendando apenas o que é necessário para o seu objetivo.",
        "Para quem quer cuidar da pele o ano todo, os Planos Magic Hands reúnem botox, bioestimuladores e tecnologias em parcelas mensais, a partir de R$ 199.",
      ],
      stats: [
        { value: "5,0", label: "225 avaliações no Google" },
        { value: "+9", label: "Anos de estética avançada" },
        { value: "+2 mil", label: "Clientes atendidas" },
      ],
    },

    differentials: [
      {
        icon: "sparkles",
        title: "Naturalidade",
        description: "Resultados que rejuvenescem sem mudar quem você é.",
      },
      {
        icon: "shield",
        title: "Indicação sincera",
        description: "Avaliação individual e somente o tratamento que você realmente precisa.",
      },
      {
        icon: "heart",
        title: "Planos mensais",
        description: "Cuidado contínuo o ano todo, com Planos Magic Hands a partir de R$ 199/mês.",
      },
    ],

    ambience: {
      eyebrow: "Nosso Espaço",
      title: "Um ambiente acolhedor, pensado para você",
      subtitle: "Conforto e cuidado em cada detalhe, no centro de Araraquara.",
    },

    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Mãos que encantam, clientes que recomendam",
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
      mapTitle: "Mapa de localização da Magic Hands",
    },

    finalCta: {
      title: "Rejuvenescimento em um passe de mágica",
      subtitle: "Agende sua avaliação com a Dra. Flávia e descubra o plano ideal para a sua fase.",
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

// =============================================================================
//  clinicData — ÚNICA fonte de conteúdo do site
//  Clínica: Dra. Fernanda Passos — Biomedicina Estética (Assis - SP)
//  Fontes: Google (perfil da empresa) e Instagram @draferpassos (nov/2026)
// =============================================================================

export const clinicData = {
  brand: {
    name: "Dra. Fernanda Passos",
    tagline: "Biomedicina Estética",
    logoText: "FERNANDA PASSOS",
    whatsappNumber: "5518997371683", // (18) 99737-1683 — telefone do perfil no Google
    city: "Assis - SP",
    address: "Av. Nove de Julho, 851 - Centro, Assis - SP, 19800-020",
    instagramUrl: "https://www.instagram.com/draferpassos/",
    googleMapsUrl:
      "https://www.google.com/maps/place/Dra+Fernanda+Passos-+Biomedicina+est%C3%A9tica/@-22.663319,-50.4153345,17z/data=!3m1!4b1!4m6!3m5!1s0x949539c7f5a1cab3:0x649895dc38bcbb34!8m2!3d-22.663319!4d-50.4153345!16s%2Fg%2F11vpzj_h0x",

    instagramHandle: "@draferpassos",
    openingHours: "Seg a Sex • 8h30 às 19h30  |  Sáb • 8h às 12h",
    otherLocation: "Também atende em Maringá - PR", // bio do Instagram: "Assis | Maringá"
    googleMapsEmbedUrl: "",
  },

  // Cores tiradas do Instagram dela: vinho das artes, nude/rosé + dourado das joias, creme das paredes
  theme: {
    primaryColor: "#C99A85", // rosé dourado
    secondaryColor: "#4A1820", // vinho profundo
    backgroundColor: "#FAF5F2", // creme quente
  },

  media: {
    heroImage: "images/hero-retrato.jpg",
    doctorPhoto: "images/sobre-consultorio.jpg",
    ambienceImages: ["images/espaco-sala.jpg"],
  },

  services: [
    {
      id: "1",
      title: "Harmonização Facial",
      description:
        "Planejamento individualizado para valorizar seus traços com proporção e naturalidade. Harmonização que valoriza, não transforma.",
      image: "images/servico-harmonizacao.jpg",
      tag: "Mais Procurado",
    },
    {
      id: "2",
      title: "Preenchimento Labial",
      description:
        "Contorno, proporção e hidratação para lábios bonitos sem exageros, respeitando o seu formato natural.",
      image: "images/servico-labios.jpg",
      tag: "Naturalidade",
    },
    {
      id: "3",
      title: "Botox",
      description:
        "Suavize linhas de expressão e rugas com toxina botulínica, para uma aparência descansada, jovem e natural.",
      image: "images/servico-botox.jpg",
      tag: "Rejuvenescimento",
    },
    {
      id: "4",
      title: "Endolaser & Tecnologias",
      description:
        "Endolaser (lipo a laser), Laser de CO2, Ultraformer e Trinity Pro: tecnologia avançada para contorno, firmeza e renovação da pele.",
      image: "images/servico-tecnologias.jpg",
      tag: "Alta Tecnologia",
    },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "18",
    items: [
      {
        author: "Érica Barbosa",
        timeAgo: "há 1 ano",
        comment:
          "Sempre tive o sonho de fazer preenchimento labial, mas morria de medo de fazer com alguém que não entendesse o que de fato eu queria, foi então que encontrei a Dra Fernanda, ela com toda sua paciência me explicou como tudo funcionava, foi super atenciosa e o resultado superou as minhas expectativas! Indico de olhos fechados, profissional excelente.",
        stars: 5,
      },
      {
        author: "Raphaela Nogueira",
        timeAgo: "há 6 meses",
        comment:
          "Depois de muitos traumas de procedimentos conheci a Dra Fernanda, que foi quem cuidou do meu rosto e me deu este perfil perfeito, confio de olhos fechados, profissional maravilhosa.",
        stars: 5,
      },
      {
        author: "Camila Domingues",
        timeAgo: "há 10 meses",
        comment:
          "Fiz 2 procedimentos com a Dr Fernanda, e simplesmente estou realizada! Procedimento foi muito bem feito, um resultado impecável, a Dr me passou muita segurança, confiança. Super recomendo o trabalho dela, sem contar que a Dr é uma pessoa maravilhosa, uma energia incrível.",
        stars: 5,
      },
    ],
  },

  content: {
    seo: {
      title: "",
      description:
        "Harmonização facial, preenchimento labial, botox, Endolaser e Laser CO2 em Assis - SP. Nota 5,0 no Google. Agende sua consulta avaliativa pelo WhatsApp.",
    },

    whatsapp: {
      defaultMessage: "Olá! Vi o site da Dra. Fernanda e gostaria de agendar uma consulta avaliativa.",
      serviceMessage: "Olá! Vi o site da Dra. Fernanda e tenho interesse em {service}. Gostaria de agendar uma consulta avaliativa.",
      ctaText: "Agendar Consulta no WhatsApp",
      subText: "Consulta avaliativa • Atendimento personalizado",
      floatingLabel: "Fale conosco no WhatsApp",
    },

    hero: {
      eyebrow: "Biomedicina Estética • Assis - SP",
      subtitle: "Realce sua beleza e preserve sua essência, com harmonização e tecnologia, sempre com naturalidade e segurança.",
      highlights: ["Harmonização Facial", "Endolaser & Laser CO2", "Resultados naturais"],
    },

    services: {
      eyebrow: "Procedimentos",
      title: "Tratamentos que realçam, sem exageros",
      subtitle:
        "Cada protocolo começa com uma consulta avaliativa e um planejamento feito para o seu rosto, a sua pele e os seus objetivos.",
      ctaText: "Quero saber mais",
    },

    about: {
      eyebrow: "Sobre a Especialista",
      name: "Dra. Fernanda Passos",
      credentials: "Biomédica Esteta • Especialista em Biomedicina Estética", // TODO: confirmar nº do CRBM
      bio: [
        "Biomédica há mais de 10 anos, a Dra. Fernanda Passos é especialista em Biomedicina Estética, Endolaser, Harmonização Facial e Laser de CO2.",
        "Para ela, autoestima não é vaidade, é autocuidado. A harmonização feita com naturalidade não transforma quem você é: realça o que já existe de mais bonito em você.",
        "Do planejamento ao pós-procedimento, cada etapa é pensada para que você se olhe no espelho e se reconheça, só que ainda mais radiante.",
      ],
      stats: [
        { value: "5,0", label: "Nota no Google" },
        { value: "+10", label: "Anos de Biomedicina" },
        { value: "4,9 mil", label: "Seguidores no Instagram" },
      ],
    },

    differentials: [
      {
        icon: "sparkles",
        title: "Naturalidade",
        description: "Resultados que valorizam seus traços, sem exageros e sem perder a sua essência.",
      },
      {
        icon: "shield",
        title: "Planejamento individual",
        description: "Consulta avaliativa e protocolo pensado para a sua anatomia e o seu momento.",
      },
      {
        icon: "heart",
        title: "Cuidado completo",
        description: "Orientação no pós-procedimento e nos cuidados com a pele para resultados que duram.",
      },
    ],

    ambience: {
      eyebrow: "Nosso Espaço",
      title: "Um ambiente acolhedor, pensado para você",
      subtitle: "Conforto, privacidade e cuidado em cada detalhe, no centro de Assis.",
    },

    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Quem conhece, recomenda",
      countSuffix: "avaliações no Google",
      linkText: "Ver todas as avaliações no Google",
    },

    location: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      addressLabel: "Endereço",
      hoursLabel: "Horário de atendimento",
      otherLocationLabel: "Outra cidade",
      socialLabel: "Instagram",
      mapTitle: "Mapa de localização da clínica",
    },

    finalCta: {
      title: "Realce sua beleza, preserve sua essência",
      subtitle: "Agende sua consulta avaliativa e descubra o tratamento ideal para você.",
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
        "Os resultados podem variar de pessoa para pessoa. Procedimentos realizados mediante consulta avaliativa.",
      credit: { prefix: "Desenvolvido por", name: "DLF TECH", url: "https://dlftech.com.br/" },
    },

    ui: { menuLabel: "Abrir menu" },
  },
};

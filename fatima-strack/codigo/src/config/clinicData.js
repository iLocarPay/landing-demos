// =============================================================================
//  clinicData — ÚNICA fonte de conteúdo do site
//  Clínica: Dra. Fátima Strack — Saúde Estética (Jaú - SP)
//  Fontes: Google (perfil da empresa) e Instagram @fatimastrackr (nov/2026)
//  Textos de seções não definidos aqui vêm de src/config/defaults.js
// =============================================================================

export const clinicData = {
  brand: {
    name: "Dra. Fátima Strack",
    tagline: "Saúde Estética",
    logoText: "FÁTIMA STRACK",
    whatsappNumber: "5514999021227", // (14) 99902-1227 — telefone do perfil no Google
    city: "Jaú - SP",
    address: "Av. Isaltino do Amaral Carvalho, 2371 - Chácara Bela Vista, Jaú - SP, 17209-010",
    instagramUrl: "https://www.instagram.com/fatimastrackr/",
    googleMapsUrl: "https://maps.google.com/?cid=496359232705765975",

    instagramHandle: "@fatimastrackr",
    openingHours: "Segunda a sexta • 8h às 19h",
    otherLocation: "Também atende em Paulínia - SP", // bio do Instagram: "Jaú | Paulínia/SP"
    googleMapsEmbedUrl: "",
  },

  // Cores tiradas do Instagram dela: café do figurino, nude/kraft das artes
  theme: {
    primaryColor: "#C19A7B", // nude dourado
    secondaryColor: "#3A2119", // café profundo
    backgroundColor: "#FAF6F1", // marfim quente
  },

  media: {
    heroImage: "images/hero-retrato.jpg",
    doctorPhoto: "images/sobre-consultorio.jpg",
    ambienceImages: ["images/formacao-harvard.jpg"], // usada na seção "Formação internacional"
  },

  services: [
    {
      id: "1",
      title: "Botox",
      description:
        "Suavização de rugas e linhas de expressão com naturalidade: um rosto descansado e jovem, sem parecer que fez alguma coisa.",
      image: "images/servico-botox.jpg",
      tag: "Mais Procurado",
    },
    {
      id: "2",
      title: "Preenchimento Labial",
      description:
        "Preenchimento labial não precisa significar exagero. Com planejamento e respeito às características de cada lábio, valorizamos o contorno e o volume na medida certa.",
      image: "images/servico-labios.jpg",
      tag: "Naturalidade",
    },
    {
      id: "3",
      title: "Rejuvenescimento Facial",
      description:
        "Um rejuvenescimento que respeita cada detalhe: contorno facial, olhar cansado, lábios, rugas e até o pescoço, para mais definição, harmonia e leveza.",
      image: "images/servico-rejuvenescimento.jpg",
      tag: "Rosto completo",
    },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "12",
    items: [
      {
        author: "Nádia Shiratori",
        timeAgo: "há 1 ano",
        comment:
          "Dra. Fátima é uma excelente profissional, muito delicada e cuidadosa. Estava apreensiva, mas ela esclareceu todas as minhas dúvidas com muita paciência e carinho, e o resultado foi incrível. Ficou muito natural, do jeito que eu queria. Super recomendo.",
        stars: 5,
      },
      {
        author: "Carla L",
        timeAgo: "há 1 ano",
        comment:
          "A melhor profissional no ramo da estética que eu já conheci, e olha que eu já fui em várias aqui em Jaú. A Dra. Fátima explica com calma e paciência, não força procedimentos e faz procedimentos muito bem feitos, com produtos bons.",
        stars: 5,
      },
      {
        author: "Karina Reis",
        timeAgo: "há 1 ano",
        comment:
          "A Fátima é uma profissional incrível. Desde o primeiro momento me transmitiu muita segurança. Quando fiz o botox, além de ficar com um resultado maravilhoso, ela esteve sempre disponível para esclarecer minhas dúvidas.",
        stars: 5,
      },
    ],
  },

  content: {
    seo: {
      title: "Dra. Fátima Strack | Saúde Estética em Jaú - SP",
      description:
        "Botox, preenchimento labial e rejuvenescimento facial com naturalidade em Jaú e Paulínia. Certificação internacional Harvard. Nota 5,0 no Google. Agende pelo WhatsApp.",
    },

    whatsapp: {
      defaultMessage: "Olá, Dra. Fátima! Vi o seu site e gostaria de agendar uma consulta.",
      serviceMessage: "Olá, Dra. Fátima! Vi o seu site e tenho interesse em {service}. Gostaria de agendar uma consulta.",
      ctaText: "Agendar consulta",
      subText: "Atendimento em Jaú e Paulínia",
      floatingLabel: "Fale com a Dra. Fátima no WhatsApp",
      headerCta: "Agendar",
    },

    hero: {
      eyebrow: "Jaú • Paulínia — SP",
      subtitle:
        "Especialista em cuidar da sua autoestima. Botox, preenchimento e rejuvenescimento com o luxo de estar linda sem parecer que fez alguma coisa.",
      highlights: ["Resultados naturais", "Certificação Harvard", "Consulta com escuta"],
      secondaryCta: "Ver tratamentos",
    },

    services: {
      eyebrow: "Tratamentos",
      title: "Beleza real, com naturalidade",
      subtitle:
        "Antes de qualquer técnica, existe escuta: entender suas queixas, suas expectativas e, principalmente, o que você não quer.",
      ctaText: "Agendar este tratamento",
    },

    about: {
      eyebrow: "Sobre a especialista",
      name: "Dra. Fátima Strack",
      credentials: "Farmacêutica Esteta • CRF 104411 • Certificação Internacional Harvard",
      bio: [
        "Resultado natural exige respeito à sua história, aos seus traços e ao seu momento.",
        "Especialista em cuidar da autoestima, a Dra. Fátima une técnica, produtos de qualidade e uma escuta atenta para indicar apenas o que faz sentido para você, sem forçar procedimentos.",
        "Em constante atualização, ela conquistou a Certificação Internacional pela Harvard Medical School e atende em Jaú e Paulínia.",
      ],
      stats: [
        { value: "5,0", label: "Nota no Google" },
        { value: "Harvard", label: "Certificação internacional" },
        { value: "2", label: "Unidades: Jaú e Paulínia" },
      ],
    },

    differentials: [
      {
        icon: "heart",
        title: "Escuta antes da técnica",
        description: "A consulta começa entendendo suas queixas, expectativas e o que você não quer.",
      },
      {
        icon: "sparkles",
        title: "Naturalidade",
        description: "Estar linda sem parecer que fez alguma coisa: esse é o verdadeiro luxo.",
      },
      {
        icon: "shield",
        title: "Sem forçar procedimentos",
        description: "Indicação sincera, produtos de qualidade e acompanhamento no pós.",
      },
    ],

    ambience: {
      eyebrow: "Formação internacional",
      title: "Certificação pela Harvard Medical School",
      subtitle:
        "Atualização constante para levar às pacientes de Jaú e Paulínia o que há de mais seguro e atual na saúde estética.",
    },

    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Delicadeza que as pacientes reconhecem",
      countSuffix: "avaliações no Google",
      linkText: "Ver avaliações",
      ratingLabel: "Nota média no Google",
    },

    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Antes de agendar",
      items: [
        {
          q: "O que esperar da primeira consulta?",
          a: "Antes de qualquer técnica, existe escuta. A Dra. Fátima entende suas queixas, suas expectativas e o que você não quer, para indicar o tratamento ideal.",
        },
        {
          q: "O preenchimento labial fica exagerado?",
          a: "Não. Com planejamento e respeito às características de cada lábio, o contorno é valorizado e o volume fica na medida certa, sem perder a naturalidade.",
        },
        {
          q: "Vocês atendem em Paulínia?",
          a: "Sim. Além de Jaú, a Dra. Fátima também atende em Paulínia - SP. Chame no WhatsApp para saber as datas disponíveis.",
        },
        {
          q: "Como faço para agendar?",
          a: "Toque em qualquer botão de WhatsApp desta página e fale direto com a equipe. Atendemos de segunda a sexta, das 8h às 19h.",
        },
      ],
    },

    location: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      addressLabel: "Endereço em Jaú",
      hoursLabel: "Horário de atendimento",
      otherLocationLabel: "Outra unidade",
      socialLabel: "Instagram",
      mapTitle: "Mapa de localização da clínica Dra. Fátima Strack",
    },

    finalCta: {
      title: "O verdadeiro luxo é estar linda sem parecer que fez alguma coisa",
      subtitle: "Agende sua consulta e descubra o tratamento ideal para você.",
    },

    navigation: [
      { label: "Tratamentos", href: "#procedimentos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Avaliações", href: "#avaliacoes" },
      { label: "Contato", href: "#localizacao" },
    ],

    footer: {
      copyright: "Todos os direitos reservados.",
      disclaimer: "Os resultados podem variar de pessoa para pessoa. Procedimentos realizados mediante avaliação prévia.",
      credit: { prefix: "Desenvolvido por", name: "DLF TECH", url: "https://dlftech.com.br/" },
    },
  },
};

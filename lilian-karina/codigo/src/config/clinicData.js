// =============================================================================
//  clinicData — ÚNICA fonte de conteúdo do site
//  Clínica: Lilian Karina — Estética Avançada (Araraquara - SP)
//  Fontes: Google (perfil da empresa) e Instagram @liliankarinaestetica (nov/2026)
//  Textos de seções não definidos aqui vêm de src/config/defaults.js
// =============================================================================

export const clinicData = {
  brand: {
    name: "Lilian Karina",
    tagline: "Estética Avançada",
    logoText: "LILIAN KARINA",
    whatsappNumber: "5516997700466", // (16) 99770-0466 — telefone do perfil no Google
    city: "Araraquara - SP",
    address: "R. Pastor Clemente da Silva Cortes, 196 - Vale do Sol, Araraquara - SP, 14804-107",
    instagramUrl: "https://www.instagram.com/liliankarinaestetica/",
    googleMapsUrl: "https://maps.google.com/?cid=8205574955462693267",

    instagramHandle: "@liliankarinaestetica",
    openingHours: "Segunda a sábado • 9h às 18h",
    otherLocation: "",
    googleMapsEmbedUrl: "",
  },

  // Cores tiradas do Instagram dela: ameixa/lilás das artes + dourado do logo
  theme: {
    primaryColor: "#C9A55C", // dourado
    secondaryColor: "#3B2342", // ameixa profunda
    backgroundColor: "#F8F5F9", // branco lavanda
  },

  media: {
    heroImage: "images/hero-retrato.jpg",
    doctorPhoto: "images/sobre-retrato.jpg",
    ambienceImages: ["images/espaco-certificados.jpg"],
  },

  services: [
    {
      id: "1",
      title: "Combo 360: HiPro + LaVieen",
      description:
        "A evolução do rejuvenescimento: o HiPro trata a sustentação profunda da pele, e o LaVieen entrega o efeito glow, uniformiza e revitaliza. Duas tecnologias em uma única sessão.",
      image: "images/servico-combo360.jpg",
      tag: "Exclusivo",
    },
    {
      id: "2",
      title: "Depilação a Laser",
      description:
        "Soprano Ice Platinum, com três comprimentos de onda: depilação segura, eficaz e confortável para todos os fototipos de pele, do I ao VI.",
      image: "images/servico-depilacao.jpg",
      tag: "Todos os fototipos",
    },
    {
      id: "3",
      title: "Tratamentos Faciais",
      description:
        "Limpeza de pele, tratamento de manchas e melasma, acne e rejuvenescimento com protocolos personalizados para o seu tipo de pele.",
      image: "images/servico-facial.jpg",
      tag: "Mais Procurado",
    },
    {
      id: "4",
      title: "Tratamentos Corporais",
      description:
        "Protocolos corporais com tecnologia para firmeza, contorno e qualidade da pele, sempre com acompanhamento de perto.",
      image: "images/servico-corporal.jpg",
      tag: "Tecnologia",
    },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "70",
    items: [
      {
        author: "Joana Lessa",
        timeAgo: "há 1 ano",
        comment:
          "Lilian é uma profissional extremamente competente. Eu sofria com melasma, fiz inúmeros tratamentos, muitos deles caríssimos. Me indicaram a Lilian, fui desconfiada e ainda como última tentativa. Simplesmente meu melasma desapareceu em 3 semanas. Lilian é o tipo de profissional que sabe o que faz e entende de pele como ninguém.",
        stars: 5,
      },
      {
        author: "Ana Julia Souza",
        timeAgo: "há 1 ano",
        comment:
          "Experiência incrível! Atendimento impecável, ambiente sofisticado e um cuidado em cada detalhe. O procedimento foi realizado com muita técnica e segurança, e o resultado ficou simplesmente perfeito.",
        stars: 5,
      },
      {
        author: "Shirley Amaral",
        timeAgo: "há 1 ano",
        comment:
          "Profissional competente, atenciosa, dá o suporte necessário pós procedimentos. Está sempre adquirindo conhecimento através de cursos de estética e novos aparelhos com novidades tecnológicas.",
        stars: 5,
      },
    ],
  },

  content: {
    seo: {
      title: "Lilian Karina | Estética Avançada em Araraquara - SP",
      description:
        "Combo 360 (HiPro + LaVieen), depilação a laser para todos os fototipos, tratamentos faciais e corporais em Araraquara. Nota 5,0 no Google. Agende pelo WhatsApp.",
    },

    whatsapp: {
      defaultMessage: "Olá, Lilian! Vi o seu site e gostaria de agendar uma avaliação.",
      serviceMessage: "Olá, Lilian! Vi o seu site e tenho interesse em {service}. Gostaria de agendar uma avaliação.",
      ctaText: "Agendar avaliação",
      subText: "Resposta rápida pelo WhatsApp",
      floatingLabel: "Fale com a Lilian no WhatsApp",
      headerCta: "Agendar",
    },

    hero: {
      eyebrow: "Araraquara • SP",
      subtitle:
        "Tecnologia avançada e protocolos personalizados para cuidar da sua pele com segurança, e conquistar a pele dos seus sonhos.",
      highlights: ["Protocolos personalizados", "Tecnologia de ponta", "Todos os fototipos"],
      secondaryCta: "Ver tratamentos",
    },

    services: {
      eyebrow: "Tratamentos",
      title: "Tecnologia que cuida da sua pele",
      subtitle:
        "Sem receita pronta: cada protocolo é desenhado para você, depois de uma avaliação cuidadosa da sua pele e dos seus objetivos.",
      ctaText: "Agendar este tratamento",
    },

    about: {
      eyebrow: "Sobre a especialista",
      name: "Lilian Karina",
      credentials: "Esteticista • Especialista em tratamentos de pele",
      bio: [
        "Unir conhecimento atualizado, tecnologia e cuidado humano: esse é o propósito que guia cada atendimento.",
        "Esteticista especializada em tratamentos de pele, Lilian utiliza tecnologia avançada em todos os seus procedimentos e está sempre se atualizando em novos protocolos e equipamentos.",
        "Do primeiro contato ao pós-procedimento, cada etapa é explicada com clareza, para que você se sinta segura, acolhida e veja resultados reais na sua pele.",
      ],
      stats: [
        { value: "5,0", label: "Nota no Google" },
        { value: "+3", label: "Tecnologias de última geração" },
        { value: "70", label: "Avaliações reais" },
      ],
    },

    differentials: [
      {
        icon: "sparkles",
        title: "Protocolos personalizados",
        description: "Nada de receita pronta: o tratamento é desenhado para a sua pele e o seu objetivo.",
      },
      {
        icon: "shield",
        title: "Tecnologia de ponta",
        description: "HiPro, LaVieen e Soprano Ice Platinum, com segurança para todos os fototipos.",
      },
      {
        icon: "heart",
        title: "Acompanhamento de perto",
        description: "Suporte no pós-procedimento e orientação em cada etapa, para resultados reais.",
      },
    ],

    ambience: {
      eyebrow: "Nosso espaço",
      title: "Atualização constante, cuidado em cada detalhe",
      subtitle:
        "Um ambiente acolhedor e sofisticado no Vale do Sol, em Araraquara, com certificações e equipamentos de última geração.",
    },

    reviews: {
      eyebrow: "Avaliações no Google",
      title: "Resultados que falam por si",
      countSuffix: "avaliações no Google",
      linkText: "Ver avaliações",
      ratingLabel: "Nota média no Google",
    },

    faq: {
      eyebrow: "Dúvidas frequentes",
      title: "Antes de agendar",
      items: [
        {
          q: "A depilação a laser funciona em pele negra?",
          a: "Sim. O Soprano Ice Platinum atende todos os fototipos de pele, do I ao VI, com segurança e conforto.",
        },
        {
          q: "O que é o Combo 360?",
          a: "É a união de duas tecnologias em uma única sessão: o HiPro, que trata a sustentação profunda da pele, e o LaVieen, que traz o efeito glow, uniformiza e revitaliza.",
        },
        {
          q: "Como funciona a primeira avaliação?",
          a: "A Lilian analisa a sua pele, entende a sua rotina e os seus objetivos e monta um protocolo personalizado, explicando cada etapa.",
        },
        {
          q: "Como faço para agendar?",
          a: "Toque em qualquer botão de WhatsApp desta página e fale direto com a clínica. Atendemos de segunda a sábado, das 9h às 18h.",
        },
      ],
    },

    location: {
      eyebrow: "Localização",
      title: "Venha nos visitar",
      addressLabel: "Endereço",
      hoursLabel: "Horário de atendimento",
      otherLocationLabel: "Outra unidade",
      socialLabel: "Instagram",
      mapTitle: "Mapa de localização da clínica Lilian Karina",
    },

    finalCta: {
      title: "A pele dos seus sonhos começa com uma avaliação",
      subtitle: "Fale com a Lilian e descubra o protocolo ideal para você.",
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

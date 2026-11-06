// =============================================================================
//  MOLDE EM BRANCO — copie este conteúdo para src/config/clinicData.js
//  e preencha os campos. Campos marcados (opcional) podem ficar "" ou [].
//  Depois rode:  npm run check   (aponta campos faltando/errados)
// =============================================================================

export const clinicData = {
  brand: {
    name: "Nome da Clínica",
    tagline: "Slogan ou Especialidade Principal",
    logoText: "LOGOTIPO / NOME",
    whatsappNumber: "5511999999999", // 55 + DDD + número
    city: "Cidade - UF",
    address: "Endereço completo",
    instagramUrl: "https://instagram.com/perfil",
    googleMapsUrl: "https://maps.google.com/...", // link do perfil no Google Maps (avaliações)

    instagramHandle: "", // (opcional) ex.: "@perfil"
    openingHours: "", // (opcional) ex.: "Seg a Sex • 9h às 19h"
    otherLocation: "", // (opcional) segunda unidade
    googleMapsEmbedUrl: "", // (opcional) vazio = mapa gerado pelo nome + endereço
  },

  theme: {
    primaryColor: "#D4AF37",
    secondaryColor: "#1A1A1A",
    backgroundColor: "#FAF7F2",
  },

  // Coloque as fotos em public/images/ e use "images/arquivo.jpg" (ou uma URL completa)
  media: {
    heroImage: "", // (opcional) retrato ao lado do título
    doctorPhoto: "",
    ambienceImages: [], // (opcional) 1 ou 2 fotos do espaço
  },

  services: [
    { id: "1", title: "Procedimento 1", description: "Benefício principal.", image: "", tag: "Mais Procurado" },
    { id: "2", title: "Procedimento 2", description: "Benefício principal.", image: "", tag: "" },
    { id: "3", title: "Procedimento 3", description: "Benefício principal.", image: "", tag: "" },
  ],

  googleReviews: {
    rating: "5,0",
    totalReviews: "0",
    items: [
      { author: "Nome da Cliente", timeAgo: "há 2 semanas", comment: "Comentário real do Google Maps.", stars: 5 },
    ],
  },

  content: {
    seo: { title: "", description: "Descrição curta para o Google (até ~155 caracteres)." },
    whatsapp: {
      defaultMessage: "Olá! Vi o site da clínica e gostaria de agendar uma avaliação personalizada.",
      serviceMessage: "Olá! Vi o site da clínica e tenho interesse em {service}. Gostaria de agendar uma avaliação.",
      ctaText: "Agendar Avaliação no WhatsApp",
      subText: "Atendimento Rápido • Resposta em até 5 min",
      floatingLabel: "Fale conosco no WhatsApp",
    },
    hero: {
      eyebrow: "Especialidade • Cidade - UF",
      subtitle: "Frase de impacto sobre o principal benefício da clínica.",
      highlights: ["Resultados naturais", "Protocolos seguros", "Atendimento exclusivo"],
    },
    services: {
      eyebrow: "Procedimentos",
      title: "Tratamentos pensados para realçar a sua beleza natural",
      subtitle: "Cada protocolo é personalizado após uma avaliação detalhada.",
      ctaText: "Quero saber mais",
    },
    about: {
      eyebrow: "Sobre a Especialista",
      name: "Dra. Nome Sobrenome",
      credentials: "", // (opcional) formação / nº do conselho
      bio: ["Primeiro parágrafo sobre a profissional.", "Segundo parágrafo (opcional)."],
      stats: [], // (opcional) ex.: [{ value: "5,0", label: "Nota no Google" }]
    },
    differentials: [
      { icon: "shield", title: "Segurança", description: "Protocolos rigorosos e produtos certificados." },
      { icon: "sparkles", title: "Naturalidade", description: "Resultados harmônicos, sem exageros." },
      { icon: "heart", title: "Atendimento exclusivo", description: "Acompanhamento do primeiro contato ao pós." },
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
      subtitle: "Agende uma avaliação personalizada e descubra o protocolo ideal para você.",
    },
    navigation: [
      { label: "Procedimentos", href: "#procedimentos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Avaliações", href: "#avaliacoes" },
      { label: "Localização", href: "#localizacao" },
    ],
    footer: {
      copyright: "Todos os direitos reservados.",
      disclaimer: "Os resultados podem variar de pessoa para pessoa. Procedimentos realizados mediante avaliação prévia.",
      credit: { prefix: "Desenvolvido por", name: "DLF TECH", url: "https://dlftech.com.br/" },
    },
    ui: { menuLabel: "Abrir menu" },
  },
};

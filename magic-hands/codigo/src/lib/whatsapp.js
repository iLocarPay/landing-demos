import { clinicData } from "../config/clinicData.js";

const { brand, content } = clinicData;

export function whatsappLink(message = content.whatsapp.defaultMessage) {
  const number = String(brand.whatsappNumber).replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappLink(serviceTitle) {
  return whatsappLink(content.whatsapp.serviceMessage.replace("{service}", serviceTitle));
}

// Mapa incorporado: usa brand.googleMapsEmbedUrl ou gera a partir do nome + endereço
export function mapsEmbedUrl() {
  if (brand.googleMapsEmbedUrl) return brand.googleMapsEmbedUrl;
  return `https://www.google.com/maps?q=${encodeURIComponent(`${brand.name}, ${brand.address}`)}&output=embed`;
}

import { clinicConfig } from "../data/clinicConfig.js";

export function whatsappLink(message = clinicConfig.whatsapp.defaultMessage) {
  return `https://wa.me/${clinicConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsappLink(serviceName) {
  const msg = clinicConfig.whatsapp.serviceMessageTemplate.replace("{service}", serviceName);
  return whatsappLink(msg);
}

// Valida src/config/clinicData.js antes de publicar.  Uso: npm run check
import { existsSync } from "node:fs";
import { clinicData as d } from "../src/config/clinicData.js";

const errors = [];
const warns = [];
const req = (path, value) => {
  if (value === undefined || value === null || (typeof value === "string" && !value.trim())) errors.push(`faltando: ${path}`);
};
const placeholder = (path, value) => {
  if (typeof value === "string" && /Nome da Cl[ií]nica|LOGOTIPO|5511999999999|Endere[çc]o completo|perfil$|maps\.google\.com\/\.\.\.|Coment[áa]rio real|Nome Sobrenome/i.test(value))
    warns.push(`ainda com texto de exemplo: ${path} = "${value}"`);
};
const image = (path, src) => {
  if (!src) return warns.push(`sem imagem: ${path} (mostra o logo no lugar)`);
  if (!/^https?:/.test(src) && !existsSync(new URL(`../public/${src}`, import.meta.url)))
    errors.push(`imagem não encontrada em public/: ${path} = "${src}"`);
};

for (const k of ["name", "tagline", "logoText", "whatsappNumber", "city", "address", "instagramUrl", "googleMapsUrl"]) {
  req(`brand.${k}`, d.brand?.[k]);
  placeholder(`brand.${k}`, d.brand?.[k]);
}
if (d.brand?.whatsappNumber && !/^55\d{10,11}$/.test(String(d.brand.whatsappNumber).replace(/\D/g, "")))
  errors.push(`brand.whatsappNumber deve ser 55 + DDD + número (12 ou 13 dígitos): "${d.brand.whatsappNumber}"`);

for (const k of ["primaryColor", "secondaryColor", "backgroundColor"])
  if (!/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(d.theme?.[k] ?? "")) errors.push(`theme.${k} deve ser uma cor hex (#RRGGBB)`);

if (d.media?.heroImage) image("media.heroImage", d.media.heroImage);
image("media.doctorPhoto", d.media?.doctorPhoto);
(d.media?.ambienceImages ?? []).forEach((src, i) => image(`media.ambienceImages[${i}]`, src));

if (!d.services?.length) errors.push("services: adicione ao menos 1 serviço");
if (d.services?.length > 4) warns.push(`services: ${d.services.length} serviços (recomendado até 4)`);
d.services?.forEach((s, i) => {
  req(`services[${i}].title`, s.title);
  req(`services[${i}].description`, s.description);
  image(`services[${i}].image`, s.image);
});
new Set(d.services?.map((s) => s.id)).size !== d.services?.length && errors.push("services: ids repetidos");

d.googleReviews?.items?.forEach((r, i) => {
  req(`googleReviews.items[${i}].author`, r.author);
  req(`googleReviews.items[${i}].comment`, r.comment);
  placeholder(`googleReviews.items[${i}].comment`, r.comment);
});
placeholder("content.about.name", d.content?.about?.name);
if (!d.content) errors.push("faltando: content (textos das seções)");

warns.forEach((w) => console.log("  ⚠ " + w));
errors.forEach((e) => console.log("  ✖ " + e));
console.log(errors.length ? `\n${errors.length} erro(s) — corrija antes de publicar.` : `\n✔ clinicData OK (${warns.length} aviso(s)).`);
process.exit(errors.length ? 1 : 0);

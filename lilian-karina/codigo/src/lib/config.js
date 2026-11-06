import { clinicData as raw } from "../config/clinicData.js";
import { defaults } from "../config/defaults.js";

// Mescla profunda: objetos são combinados, listas e valores do clinicData substituem os padrões
const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
function merge(base, over) {
  if (over === undefined) return base;
  if (!isObj(base) || !isObj(over)) return over;
  const out = { ...base };
  for (const k of Object.keys(over)) out[k] = merge(base[k], over[k]);
  return out;
}

export const clinicData = merge(defaults, raw);

// "5516997700466" -> "(16) 99770-0466"
export function formatPhone(number) {
  const d = String(number).replace(/\D/g, "").replace(/^55/, "");
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return number;
}

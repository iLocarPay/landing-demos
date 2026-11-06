// Gera demo/site-demo.html: o build inteiro em UM arquivo, que abre com duplo clique (sem servidor).
// Uso: npm run demo
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
let html = readFileSync(join(dist, "index.html"), "utf8");

html = html.replace(/<link rel="stylesheet"[^>]*href="\/?([^"]+)"[^>]*>/g, (_, href) => {
  return `<style>${readFileSync(join(dist, href), "utf8")}</style>`;
});

let js = "";
html = html.replace(/<script type="module"[^>]*src="\/?([^"]+)"[^>]*><\/script>/g, (_, src) => {
  js += readFileSync(join(dist, src), "utf8");
  return "";
});

// Script clássico no fim do <body> (funciona via file://, ao contrário de type="module")
const safeJs = js.replace(/<\/script/gi, "<\\/script");
// Função (e não string) como substituto: o JS minificado contém "$'" / "$&", que o replace interpretaria
html = html.replace("</body>", () => `<script>${safeJs}</script>\n</body>`);

mkdirSync("demo", { recursive: true });
writeFileSync(join("demo", "site-demo.html"), html);
console.log("demo/site-demo.html gerado (" + Math.round(html.length / 1024) + " kB)");

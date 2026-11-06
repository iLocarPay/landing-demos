// Gera demo/site-demo.html: o build inteiro em UM arquivo, que abre com duplo clique (sem servidor).
// Uso: npm run demo
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const dist = process.argv[2] || "dist";
let html = readFileSync(join(dist, "index.html"), "utf8");

html = html.replace(/<link rel="stylesheet"[^>]*href="\/?([^"]+)"[^>]*>/g, (_, href) => {
  return `<style>${readFileSync(join(dist, href), "utf8")}</style>`;
});

let js = "";
html = html.replace(/<script type="module"[^>]*src="\/?([^"]+)"[^>]*><\/script>/g, (_, src) => {
  js += readFileSync(join(dist, src), "utf8");
  return "";
});

// Embute as fotos de dist/images como data URI (o arquivo único abre sem a pasta images/)
import { readdirSync, existsSync } from "node:fs";
if (existsSync(join(dist, "images"))) {
  for (const f of readdirSync(join(dist, "images"))) {
    const mime = f.endsWith(".png") ? "image/png" : f.endsWith(".webp") ? "image/webp" : "image/jpeg";
    const uri = `data:${mime};base64,${readFileSync(join(dist, "images", f)).toString("base64")}`;
    js = js.split(`"images/${f}"`).join(JSON.stringify(uri));
  }
}

// Script clássico no fim do <body> (funciona via file://, ao contrário de type="module")
const safeJs = js.replace(/<\/script/gi, "<\\/script");
// Função (e não string) como substituto: o JS minificado contém "$'" / "$&", que o replace interpretaria
html = html.replace("</body>", () => `<script>${safeJs}</script>\n</body>`);

mkdirSync("demo", { recursive: true });
const out = process.argv[3] || join("demo", "site-demo.html");
writeFileSync(out, html);
console.log(out + " gerado (" + Math.round(html.length / 1024) + " kB)");

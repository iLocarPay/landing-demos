// Renderiza um vídeo vertical (celular) do site, quadro a quadro (30 fps, 2x), com legendas e vinhetas.
// Uso: npm run video -- scripts/video/<clinica>.json apresentacao/<clinica>.mp4
// (grava a partir de demo/site-demo.html — rode npm run demo antes)
import { chromium } from "playwright";
import ffmpegPath from "ffmpeg-static";
import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const [scriptArg, outArg = "apresentacao/apresentacao.mp4", target = "demo/site-demo.html"] = process.argv.slice(2);
const out = resolve(outArg);
const story = JSON.parse(readFileSync(scriptArg, "utf8"));
const url = /^https?:/.test(target) ? target : pathToFileURL(resolve(target)).href;
const FPS = 30, W = 390, H = 844, S = 2;
const frames = resolve("apresentacao/.frames");
rmSync(frames, { recursive: true, force: true });
mkdirSync(frames, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: S, isMobile: true, hasTouch: true, locale: "pt-BR" });
await page.goto(url, { waitUntil: "load" });
await page.evaluate(() => {
  document.querySelectorAll("img").forEach((i) => (i.loading = "eager"));
  document.querySelectorAll(".reveal").forEach((e) => e.classList.add("is-visible"));
  const css = document.createElement("style");
  css.textContent = `
  *,*::before,*::after{transition:none!important;animation:none!important;scroll-behavior:auto!important}
  .reveal{opacity:1!important;transform:none!important}
  #rv-cap{position:fixed;left:16px;right:16px;bottom:92px;z-index:9999;padding:14px 18px;border-radius:16px;
    background:color-mix(in srgb,var(--color-secondary) 92%,transparent);color:#FAF7F2;font:500 17px/1.35 Inter,sans-serif;text-align:center;
    border:1px solid color-mix(in srgb,var(--color-primary) 60%,transparent);opacity:0}
  #rv-cap b{display:block;color:var(--color-primary);font:600 11px/1 Inter,sans-serif;letter-spacing:.25em;text-transform:uppercase;margin-bottom:7px}
  #rv-card{position:fixed;inset:0;z-index:10000;background:var(--color-secondary);display:flex;flex-direction:column;align-items:center;justify-content:center;
    text-align:center;padding:32px;color:#FAF7F2;opacity:0;pointer-events:none}
  #rv-card .k{color:var(--color-primary);font:600 11px/1 Inter,sans-serif;letter-spacing:.3em;text-transform:uppercase}
  #rv-card .t{font:500 40px/1.1 "Cormorant Garamond",serif;margin:18px 0 10px}
  #rv-card .s{font:300 16px/1.5 Inter,sans-serif;opacity:.8;max-width:300px}
  #rv-card .l{width:56px;height:1px;background:var(--color-primary);margin:24px auto}
  #rv-card .u{font:600 16px/1 Inter,sans-serif;color:var(--color-primary);letter-spacing:.03em}
  #rv-card .d{margin-top:30px;font:500 11px/1.6 Inter,sans-serif;letter-spacing:.28em;opacity:.6;text-transform:uppercase}
  #rv-card .d strong{color:var(--color-primary)}`;
  document.head.appendChild(css);
  for (const id of ["rv-cap", "rv-card"]) { const d = document.createElement("div"); d.id = id; document.body.appendChild(d); }
});
await page.waitForTimeout(3000); // fontes + imagens

// Resolve alvos de rolagem em posições absolutas
const maxY = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
let lastY = 0;
for (const seg of story) {
  if (seg.to === undefined) { seg.y = lastY; continue; }
  let y;
  if (typeof seg.to === "number") y = seg.to;
  else if (seg.to === "bottom") y = maxY;
  else if (seg.to.startsWith("+")) y = lastY + Number(seg.to.slice(1));
  else y = await page.evaluate(([s, off]) => { const e = document.querySelector(s); return e ? e.getBoundingClientRect().top + scrollY - off : 0; }, [seg.to, seg.offset ?? 70]);
  seg.y = Math.max(0, Math.min(maxY, Math.round(y)));
  lastY = seg.y;
}

const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const FADE = 0.35;
let frame = 0, fromY = 0;
for (const seg of story) {
  const n = Math.round(seg.d * FPS);
  const sd = Math.min(seg.scroll ?? 1.8, seg.d);
  await page.evaluate(([cap, card]) => {
    document.getElementById("rv-cap").innerHTML = cap ? `<b>${cap[0]}</b>${cap[1]}` : "";
    document.getElementById("rv-card").innerHTML = card || "";
  }, [seg.cap || null, seg.card || null]);
  for (let i = 0; i < n; i++) {
    const t = i / FPS;
    const y = fromY + (seg.y - fromY) * ease(Math.min(1, t / sd));
    const fadeIn = seg.cardFadeIn ? Math.min(1, t / 0.6) : 1;
    const fadeOut = seg.cardFadeOut ? Math.min(1, (seg.d - t) / 0.6) : 1;
    const cardO = seg.card ? Math.max(0, Math.min(fadeIn, fadeOut)) : 0;
    const capO = seg.cap ? Math.max(0, Math.min(1, t / FADE, (seg.d - t) / FADE)) : 0;
    await page.evaluate(([y, capO, cardO]) => {
      scrollTo(0, y);
      window.dispatchEvent(new Event("scroll"));
      const c = document.getElementById("rv-cap");
      c.style.opacity = capO; c.style.transform = `translateY(${(1 - capO) * 12}px)`;
      document.getElementById("rv-card").style.opacity = cardO;
    }, [y, capO, cardO]);
    if (i === 0) await page.waitForTimeout(120); // deixa a barra/cabeçalho reagirem
    await page.screenshot({ path: join(frames, `${String(frame++).padStart(5, "0")}.jpg`), type: "jpeg", quality: 90 });
  }
  fromY = seg.y;
}
await browser.close();
mkdirSync(resolve(out, ".."), { recursive: true });

execFileSync(ffmpegPath, ["-y", "-loglevel", "error", "-framerate", String(FPS), "-i", join(frames, "%05d.jpg"),
  "-c:v", "libx264", "-preset", "slow", "-crf", "24", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out], { stdio: "inherit" });
rmSync(frames, { recursive: true, force: true });
console.log("OK", out, frame, "quadros");

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { clinicData } from "./lib/config.js";

const { theme, brand, content } = clinicData;

// Tema dinâmico: as cores do config viram variáveis CSS usadas pelas classes Tailwind
const rootStyle = document.documentElement.style;
rootStyle.setProperty("--color-primary", theme.primaryColor);
rootStyle.setProperty("--color-secondary", theme.secondaryColor);
rootStyle.setProperty("--color-accent", theme.backgroundColor);
if (theme.whatsappColor) rootStyle.setProperty("--color-whatsapp", theme.whatsappColor);

// SEO: título automático a partir da marca, se não houver um definido
document.title = content.seo.title || `${brand.name} | ${brand.tagline} em ${brand.city}`;
const metaDescription = document.querySelector("meta[name=description]");
if (metaDescription) metaDescription.setAttribute("content", content.seo.description);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

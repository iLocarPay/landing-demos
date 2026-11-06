import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { clinicConfig } from "./data/clinicConfig.js";

// Aplica as cores do config como variáveis CSS (usadas pelas classes Tailwind)
const { theme, seo } = clinicConfig;
const rootStyle = document.documentElement.style;
rootStyle.setProperty("--color-primary", theme.primary);
rootStyle.setProperty("--color-secondary", theme.secondary);
rootStyle.setProperty("--color-accent", theme.accent);
rootStyle.setProperty("--color-whatsapp", theme.whatsappGreen);

// SEO dinâmico
document.title = seo.title;
const metaDescription = document.querySelector("meta[name=description]");
if (metaDescription) metaDescription.setAttribute("content", seo.description);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

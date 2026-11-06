import { clinicData } from "../config/clinicData.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { WhatsAppIcon } from "./Icons.jsx";

const styles = {
  gold: "bg-primary text-secondary hover:brightness-105",
  dark: "bg-secondary text-accent hover:bg-black",
  light: "bg-accent text-secondary hover:bg-white",
};

// Botão principal de conversão. variant: "gold" | "dark" | "light"
export default function WhatsAppButton({
  href = whatsappLink(),
  text = clinicData.content.whatsapp.ctaText,
  variant = "gold",
  showSubText = false,
  align = "start",
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-2.5 items-center ${align === "start" ? "sm:items-start" : ""} ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-medium tracking-wide shadow-lg shadow-black/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto ${styles[variant]}`}
      >
        <WhatsAppIcon className="h-5 w-5 shrink-0" />
        <span>{text}</span>
      </a>
      {showSubText && (
        <span className="flex items-center gap-2 text-xs opacity-80">
          <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
          {clinicData.content.whatsapp.subText}
        </span>
      )}
    </div>
  );
}

import { clinicData } from "../lib/config.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { WhatsAppIcon } from "./Icons.jsx";

const styles = {
  gold: "bg-primary text-secondary hover:brightness-105",
  dark: "bg-secondary text-accent hover:brightness-125",
  light: "bg-accent text-secondary hover:bg-white",
};

// Botão principal de conversão. variant: "gold" | "dark" | "light"
export default function WhatsAppButton({
  href = whatsappLink(),
  text = clinicData.content.whatsapp.ctaText,
  variant = "dark",
  showSubText = false,
  align = "start",
  className = "",
}) {
  return (
    <div className={`flex flex-col gap-3 items-center ${align === "start" ? "sm:items-start" : ""} ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex w-full items-center justify-center gap-3 whitespace-nowrap rounded-full px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.14em] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${styles[variant]}`}
      >
        <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
        <span>{text}</span>
      </a>
      {showSubText && (
        <span className="flex items-center gap-2 text-xs opacity-70">
          <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
          {clinicData.content.whatsapp.subText}
        </span>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { clinicData } from "../config/clinicData.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { WhatsAppIcon } from "./Icons.jsx";

export default function FloatingWhatsApp() {
  const { whatsapp } = clinicData.content;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop: botão circular flutuante */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={whatsapp.floatingLabel}
        title={whatsapp.floatingLabel}
        className="pulse fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl transition-transform hover:scale-110 md:flex"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      {/* Mobile: barra fixa inferior (aparece após o topo) */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 border-t border-secondary/10 bg-accent/95 p-3 backdrop-blur-md transition-transform duration-500 md:hidden ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-3 rounded-full bg-whatsapp py-3.5 text-sm font-medium text-white"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {whatsapp.ctaText}
        </a>
      </div>
    </>
  );
}

import { useEffect, useState } from "react";
import { clinicData } from "../config/clinicData.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { MenuIcon, WhatsAppIcon } from "./Icons.jsx";

export default function Header() {
  const { brand, content } = clinicData;
  const { navigation, whatsapp, ui } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? "bg-accent/95 py-3 shadow-sm backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
        <a
          href="#inicio"
          className={`font-serif text-xl font-semibold tracking-[0.2em] transition-colors md:text-2xl ${
            solid ? "text-secondary" : "text-accent"
          }`}
        >
          {brand.logoText}
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs uppercase tracking-[0.2em] transition-colors hover:text-primary ${
                solid ? "text-secondary/80" : "text-accent/85"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.ctaText}
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-medium tracking-wide text-secondary transition hover:brightness-105 md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {whatsapp.ctaText}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={ui.menuLabel}
            className={`lg:hidden ${solid ? "text-secondary" : "text-accent"}`}
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-secondary/10 px-5 pb-6 pt-2 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-secondary/5 py-4 text-sm uppercase tracking-[0.2em] text-secondary/80"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

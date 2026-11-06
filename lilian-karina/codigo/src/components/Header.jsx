import { useEffect, useState } from "react";
import { clinicData } from "../lib/config.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { MenuIcon, WhatsAppIcon } from "./Icons.jsx";

export default function Header() {
  const { brand, content } = clinicData;
  const { navigation, whatsapp, ui } = content;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        solid ? "border-b border-secondary/10 bg-accent/90 py-3 backdrop-blur-xl" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <a href="#inicio" className="leading-none text-secondary">
          <span className="block font-serif text-xl font-medium tracking-[0.22em] md:text-2xl">{brand.logoText}</span>
          <span className="mt-1.5 hidden text-[0.6rem] uppercase tracking-[0.35em] text-secondary/50 sm:block">
            {brand.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[0.7rem] uppercase tracking-[0.24em] text-secondary/70 transition-colors hover:text-secondary"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.ctaText}
            className="hidden items-center gap-2 rounded-full border border-secondary/25 px-5 py-2.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-secondary transition hover:border-secondary hover:bg-secondary hover:text-accent md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {whatsapp.headerCta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={ui.menuLabel}
            className="text-secondary lg:hidden"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mt-3 border-t border-secondary/10 pb-4 lg:hidden">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-secondary/5 py-4 font-serif text-2xl text-secondary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

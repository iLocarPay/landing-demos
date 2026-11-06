import { clinicConfig } from "../data/clinicConfig.js";
import { InstagramIcon } from "./Icons.jsx";

export default function Footer() {
  const { info, footer, navigation } = clinicConfig;
  return (
    <footer className="border-t border-accent/10 bg-secondary px-5 pb-28 pt-14 text-accent/60 md:px-8 md:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-serif text-xl tracking-[0.2em] text-accent">{info.logoText}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em]">{info.subName}</p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-[0.15em]">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        {info.instagramUrl && (
          <a href={info.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label={clinicConfig.sections.location.socialLabel} className="transition hover:text-primary">
            <InstagramIcon className="h-6 w-6" />
          </a>
        )}
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-accent/10 pt-8 text-center text-xs leading-relaxed">
        <p>
          © {new Date().getFullYear()} {info.name}. {footer.copyright}
        </p>
        <p className="mt-2 text-accent/40">{footer.disclaimer}</p>
      </div>
    </footer>
  );
}

import { clinicData, formatPhone } from "../lib/config.js";
import { whatsappLink } from "../lib/whatsapp.js";
import { InstagramIcon, WhatsAppIcon } from "./Icons.jsx";

export default function Footer() {
  const { brand, content } = clinicData;
  const { footer, navigation, location } = content;
  const title = "mb-5 text-[0.62rem] uppercase tracking-[0.28em] text-primary";

  return (
    <footer className="border-t border-accent/10 bg-secondary px-5 pb-28 pt-20 text-accent/60 md:px-8 md:pb-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-serif text-3xl tracking-[0.18em] text-accent">{brand.logoText}</p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.3em]">{brand.tagline}</p>
          <p className="mt-6 max-w-sm text-sm font-light leading-relaxed">{content.hero.subtitle}</p>
        </div>

        <div className="lg:col-span-2">
          <p className={title}>{footer.navTitle}</p>
          <ul className="space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className={title}>{footer.contactTitle}</p>
          <ul className="space-y-3 text-sm font-light leading-relaxed">
            <li>{brand.address}</li>
            {brand.openingHours && <li>{brand.openingHours}</li>}
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent">
                {formatPhone(brand.whatsappNumber)}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className={title}>{footer.followTitle}</p>
          <div className="flex gap-3">
            {brand.instagramUrl && (
              <a
                href={brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={location.socialLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 transition hover:border-primary hover:text-primary"
              >
                <InstagramIcon />
              </a>
            )}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.whatsapp.floatingLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/20 transition hover:border-primary hover:text-primary"
            >
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col gap-4 border-t border-accent/10 pt-8 text-xs md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {brand.name}. {footer.copyright}
        </p>
        <p className="text-accent/40 md:max-w-md md:text-center">{footer.disclaimer}</p>
        {footer.credit && (
          <p className="uppercase tracking-[0.2em]">
            {footer.credit.prefix}{" "}
            <a href={footer.credit.url} target="_blank" rel="noopener" className="font-semibold text-primary transition hover:text-accent">
              {footer.credit.name}
            </a>
          </p>
        )}
      </div>
    </footer>
  );
}

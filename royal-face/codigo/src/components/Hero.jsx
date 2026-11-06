import { clinicConfig } from "../data/clinicConfig.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { GoogleIcon, StarIcon } from "./Icons.jsx";

export default function Hero() {
  const { info, media, hero, googleReviews } = clinicConfig;

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-secondary">
      <img
        src={media.heroBackground}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/75 to-secondary/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-secondary/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 md:px-8">
        <div className="max-w-2xl text-center text-accent sm:text-left">
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[1.05] font-medium md:text-7xl">{info.name}</h1>
          <div className="mx-auto my-7 h-px w-20 bg-primary sm:mx-0" />
          <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-accent/85 sm:mx-0 md:text-xl">
            {info.tagline}
          </p>

          <WhatsAppButton className="mt-10" showSubText />

          <a
            href={googleReviews.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 backdrop-blur-sm transition hover:bg-accent/10"
          >
            <GoogleIcon className="h-4 w-4" />
            <span className="flex text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            <span className="text-xs text-accent/80">
              <strong className="font-semibold text-accent">{googleReviews.rating}</strong> · {googleReviews.totalReviews}
            </span>
          </a>
        </div>

        <ul className="mt-16 hidden flex-wrap gap-x-10 gap-y-3 text-xs uppercase tracking-[0.25em] text-accent/60 sm:flex">
          {hero.highlights.map((h) => (
            <li key={h} className="flex items-center gap-3">
              <span className="h-1 w-1 rotate-45 bg-primary" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

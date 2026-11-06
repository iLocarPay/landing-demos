import { clinicData } from "../config/clinicData.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { GoogleIcon, StarIcon } from "./Icons.jsx";

export default function Hero() {
  const { brand, media, googleReviews, content } = clinicData;
  const { hero, reviews } = content;

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-secondary">
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

      <div
        className={`relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-20 pt-32 md:px-8 ${
          media.heroImage ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
        }`}
      >
        <div>
          <div className="max-w-2xl text-center text-accent sm:text-left">
            <p className="eyebrow mb-6">{hero.eyebrow}</p>
            <h1 className="font-serif text-5xl leading-[1.05] font-medium md:text-7xl">{brand.name}</h1>
            <div className="mx-auto my-7 h-px w-20 bg-primary sm:mx-0" />
            <p className="mx-auto max-w-xl text-lg font-light leading-relaxed text-accent/85 sm:mx-0 md:text-xl">
              {hero.subtitle}
            </p>

            <WhatsAppButton className="mt-10" showSubText />

            <a
              href={brand.googleMapsUrl}
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
                <strong className="font-semibold text-accent">{googleReviews.rating}</strong> ·{" "}
                {googleReviews.totalReviews} {reviews.countSuffix}
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

        {media.heroImage && (
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-t-[12rem] rounded-b-2xl border border-primary/50" />
            <img
              src={media.heroImage}
              alt={brand.name}
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-t-[12rem] rounded-b-2xl object-cover object-top shadow-2xl shadow-black/40"
            />
          </div>
        )}
      </div>
    </section>
  );
}

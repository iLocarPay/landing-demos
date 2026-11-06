import { clinicData } from "../lib/config.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import SafeImage from "./SafeImage.jsx";
import { ArrowIcon, GoogleIcon, StarIcon } from "./Icons.jsx";

function Stars({ className = "h-3.5 w-3.5" }) {
  return (
    <span className="flex text-primary">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

export default function Hero() {
  const { brand, media, googleReviews, content } = clinicData;
  const { hero, reviews, about } = content;
  const badge = about?.stats?.find((s) => s.value !== googleReviews.rating) ?? about?.stats?.[0];

  return (
    <section id="inicio" className="relative overflow-hidden bg-accent pt-28 lg:pt-32">
      {/* monograma decorativo */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-16 select-none font-serif text-[18rem] leading-none text-primary/[0.08] md:text-[26rem]"
      >
        {brand.logoText.charAt(0)}
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 md:px-8 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-6">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="mt-8 font-serif text-[3rem] leading-[1] font-light text-secondary sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            {brand.name}
          </h1>
          <p className="mt-5 font-serif text-2xl italic font-light text-secondary/70 md:text-3xl">{brand.tagline}</p>
          <p className="mt-8 max-w-lg text-base font-light leading-relaxed text-secondary/65 md:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
            <WhatsAppButton variant="dark" />
            <a
              href="#procedimentos"
              className="group inline-flex items-center justify-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-secondary/80 transition hover:text-secondary"
            >
              {hero.secondaryCta}
              <ArrowIcon className="h-3.5 w-3.5 rotate-90 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>

          <a
            href={brand.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 flex w-fit items-center gap-4 border-t border-secondary/10 pt-6 text-sm text-secondary/70 transition hover:text-secondary"
          >
            <GoogleIcon className="h-5 w-5" />
            <Stars />
            <span>
              <strong className="font-semibold text-secondary">{googleReviews.rating}</strong> · {googleReviews.totalReviews}{" "}
              {reviews.countSuffix}
            </span>
          </a>
        </div>

        {media.heroImage && (
          <div className="relative mx-auto w-full max-w-md lg:col-span-6 lg:max-w-none lg:pl-10">
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-t-[14rem] rounded-b-[2rem] border border-primary/50 md:-right-6 md:-top-6" />
              <SafeImage
                src={media.heroImage}
                alt={brand.name}
                fetchPriority="high"
                className="relative aspect-[4/5] w-full rounded-t-[14rem] rounded-b-[2rem] object-cover object-top shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]"
              />

              {/* selo flutuante: nota no Google */}
              <div className="absolute -left-4 bottom-10 flex items-center gap-4 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md md:-left-12">
                <span className="font-serif text-4xl font-light leading-none text-secondary">{googleReviews.rating}</span>
                <span className="flex flex-col gap-1.5">
                  <Stars className="h-3 w-3" />
                  <span className="text-[0.62rem] uppercase tracking-[0.18em] text-secondary/60">
                    {googleReviews.totalReviews} {reviews.countSuffix}
                  </span>
                </span>
              </div>

              {/* selo flutuante: número de destaque */}
              {badge && (
                <div className="absolute -right-3 top-16 rounded-2xl bg-secondary px-5 py-4 text-center text-accent shadow-xl md:-right-8">
                  <span className="block font-serif text-3xl font-light leading-none text-primary">{badge.value}</span>
                  <span className="mt-1.5 block max-w-[7rem] text-[0.6rem] uppercase leading-snug tracking-[0.16em] text-accent/70">
                    {badge.label}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

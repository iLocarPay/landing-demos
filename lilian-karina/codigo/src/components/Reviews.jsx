import { clinicData } from "../lib/config.js";
import { useReveal } from "../lib/useReveal.js";
import { GoogleIcon, QuoteIcon, StarIcon } from "./Icons.jsx";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function ReviewCard({ review, featured }) {
  const ref = useReveal();
  return (
    <figure
      ref={ref}
      className={`reveal flex flex-col rounded-[2rem] bg-accent p-8 md:p-10 ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between">
        <QuoteIcon className="h-8 w-8 text-primary" />
        <span className="flex text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} className="h-3.5 w-3.5" filled={i < (review.stars ?? 5)} />
          ))}
        </span>
      </div>
      <blockquote
        className={`mt-6 flex-1 font-serif font-light leading-snug text-secondary/90 ${featured ? "text-2xl md:text-[1.9rem]" : "text-xl"}`}
      >
        {review.comment}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4">
        <span
          aria-hidden="true"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium tracking-wider text-accent"
        >
          {initials(review.author)}
        </span>
        <div>
          <p className="text-sm font-medium text-secondary">{review.author}</p>
          <p className="text-xs text-secondary/50">{review.timeAgo}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  const { googleReviews, brand, content } = clinicData;
  const s = content.reviews;
  if (!googleReviews?.items?.length) return null;

  return (
    <section id="avaliacoes" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow">{s.eyebrow}</p>
            <h2 className="section-title mt-6 text-secondary">{s.title}</h2>
            <div className="mt-10 flex items-end gap-5 border-t border-secondary/10 pt-8">
              <span className="font-serif text-8xl font-light leading-[0.8] text-secondary">{googleReviews.rating}</span>
              <span className="flex flex-col gap-2 pb-1">
                <span className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-secondary/55">{s.ratingLabel}</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-secondary/60">
              {googleReviews.totalReviews} {s.countSuffix}
            </p>
            {brand.googleMapsUrl && (
              <a
                href={brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-secondary/20 px-6 py-3 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-secondary transition hover:border-secondary hover:bg-secondary hover:text-accent"
              >
                <GoogleIcon className="h-4 w-4" />
                {s.linkText}
              </a>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
          {googleReviews.items.map((review, i) => (
            <ReviewCard key={review.author} review={review} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

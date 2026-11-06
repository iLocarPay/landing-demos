import { clinicData } from "../config/clinicData.js";
import { useReveal } from "../lib/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { GoogleIcon, StarIcon } from "./Icons.jsx";

const initials = (name) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

function ReviewCard({ review }) {
  const ref = useReveal();
  return (
    <figure ref={ref} className="reveal flex flex-col rounded-2xl bg-white p-8 ring-1 ring-secondary/5">
      <div className="flex items-center justify-between">
        <div className="flex text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < (review.stars ?? 5)} />
          ))}
        </div>
        <GoogleIcon className="h-5 w-5" />
      </div>
      <blockquote className="mt-6 flex-1 font-serif text-xl italic leading-relaxed text-secondary/85">
        “{review.comment}”
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-4 border-t border-secondary/5 pt-6">
        {review.avatar ? (
          <img
            src={review.avatar}
            alt={review.author}
            loading="lazy"
            decoding="async"
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary font-serif text-lg text-primary"
          >
            {initials(review.author)}
          </span>
        )}
        <div>
          <p className="text-sm font-medium">{review.author}</p>
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
    <section id="avaliacoes" className="bg-accent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} />

        <div className="mx-auto -mt-6 mb-14 flex w-fit items-center gap-4 rounded-full bg-white px-6 py-3 ring-1 ring-secondary/5">
          <GoogleIcon className="h-6 w-6" />
          <span className="font-serif text-3xl font-semibold">{googleReviews.rating}</span>
          <span className="flex text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </span>
          <span className="hidden text-xs uppercase tracking-wider text-secondary/55 sm:inline">
            {googleReviews.totalReviews} {s.countSuffix}
          </span>
        </div>

        <div
          className={`grid gap-6 md:grid-cols-2 ${googleReviews.items.length >= 3 ? "lg:grid-cols-3" : ""}`}
        >
          {googleReviews.items.map((review) => (
            <ReviewCard key={review.author} review={review} />
          ))}
        </div>

        {brand.googleMapsUrl && (
          <div className="mt-12 text-center">
            <a
              href={brand.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-primary pb-1 text-xs font-medium uppercase tracking-[0.2em] transition hover:text-primary"
            >
              {s.linkText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

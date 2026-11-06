import SafeImage from "./SafeImage.jsx";
import { clinicConfig } from "../data/clinicConfig.js";
import { useReveal } from "../lib/useReveal.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { FeatureIcon } from "./Icons.jsx";

export default function About() {
  const { about, media, sections, differentials } = clinicConfig;
  const photoRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="sobre" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2 lg:gap-20">
        <div ref={photoRef} className="reveal relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-t-[12rem] rounded-b-2xl border border-primary/50" />
          <SafeImage
            src={media.doctorPhoto}
            alt={about.name}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-t-[12rem] rounded-b-2xl object-cover shadow-2xl shadow-secondary/15"
          />
        </div>

        <div ref={textRef} className="reveal">
          <p className="eyebrow mb-4">{sections.about.eyebrow}</p>
          <h2 className="section-title">{about.name}</h2>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-secondary/50">{about.credentials}</p>
          <div className="my-7 h-px w-16 bg-primary" />
          {about.bio.map((p, i) => (
            <p key={i} className="mb-4 font-light leading-relaxed text-secondary/70">
              {p}
            </p>
          ))}

          <dl className="my-10 grid grid-cols-3 gap-4 border-y border-secondary/10 py-7">
            {about.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl font-medium text-primary md:text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-[0.7rem] uppercase leading-snug tracking-wider text-secondary/55">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <WhatsAppButton variant="dark" />
        </div>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
        {differentials.map((d) => (
          <div key={d.title} className="rounded-2xl bg-accent p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 text-primary">
              <FeatureIcon name={d.icon} />
            </span>
            <h3 className="mt-5 font-serif text-xl font-medium">{d.title}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-secondary/65">{d.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

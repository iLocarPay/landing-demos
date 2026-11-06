import SafeImage from "./SafeImage.jsx";
import { clinicData } from "../lib/config.js";
import { useReveal } from "../lib/useReveal.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { FeatureIcon } from "./Icons.jsx";

export default function About() {
  const { media, content } = clinicData;
  const { about, differentials } = content;
  const photoRef = useReveal();
  const textRef = useReveal();

  return (
    <section id="sobre" className="relative overflow-hidden bg-secondary py-24 text-accent md:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-12 lg:gap-20">
        <div ref={photoRef} className="reveal relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <div className="absolute -bottom-5 -left-5 h-full w-full rounded-t-[14rem] rounded-b-[2rem] border border-primary/40" />
          <SafeImage
            src={media.doctorPhoto}
            alt={about.name}
            loading="lazy"
            decoding="async"
            className="relative aspect-[4/5] w-full rounded-t-[14rem] rounded-b-[2rem] object-cover object-top"
          />
        </div>

        <div ref={textRef} className="reveal lg:col-span-7">
          <p className="eyebrow eyebrow-light">{about.eyebrow}</p>
          <h2 className="mt-6 font-serif text-5xl font-light leading-[1.05] text-accent md:text-7xl">{about.name}</h2>
          {about.credentials && (
            <p className="mt-5 text-[0.7rem] uppercase tracking-[0.28em] text-primary">{about.credentials}</p>
          )}
          <div className="mt-10 space-y-5">
            {about.bio.map((p, i) => (
              <p
                key={i}
                className={i === 0 ? "font-serif text-2xl font-light leading-snug text-accent/90 md:text-[1.75rem]" : "font-light leading-relaxed text-accent/65"}
              >
                {p}
              </p>
            ))}
          </div>
          <WhatsAppButton variant="gold" className="mt-12" />
        </div>
      </div>

      {differentials?.length > 0 && (
        <div className="relative mx-5 mt-24 grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-accent/10 bg-accent/10 md:mx-8 md:grid-cols-3 xl:mx-auto">
          {differentials.map((d) => (
            <div key={d.title} className="bg-secondary p-9 md:p-10">
              <FeatureIcon name={d.icon} className="h-7 w-7 text-primary" />
              <h3 className="mt-6 font-serif text-2xl font-normal text-accent">{d.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-accent/60">{d.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

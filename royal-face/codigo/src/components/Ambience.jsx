import SafeImage from "./SafeImage.jsx";
import { clinicConfig } from "../data/clinicConfig.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Ambience() {
  const { media, sections, info } = clinicConfig;
  const s = sections.ambience;
  if (!media.clinicAmbience?.length) return null;

  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} light />
        <div className={`grid gap-5 ${media.clinicAmbience.length > 1 ? "md:grid-cols-2" : ""}`}>
          {media.clinicAmbience.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-2xl">
              <SafeImage
                src={src}
                alt={`${info.name} — ${s.eyebrow} ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover opacity-90 transition-all duration-700 hover:scale-105 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

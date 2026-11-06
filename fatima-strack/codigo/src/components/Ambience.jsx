import SafeImage from "./SafeImage.jsx";
import { clinicData } from "../lib/config.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Ambience() {
  const { media, brand, content } = clinicData;
  const s = content.ambience;
  const images = media.ambienceImages?.filter(Boolean) ?? [];
  if (!images.length) return null;

  return (
    <section id="espaco" className="bg-accent py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-5 md:px-8 lg:grid-cols-12">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} align="left" className="lg:col-span-5" />
        <div className={`grid gap-5 lg:col-span-7 ${images.length > 1 ? "sm:grid-cols-2" : ""}`}>
          {images.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-[2rem]">
              <SafeImage
                src={src}
                alt={`${brand.name} — ${s.eyebrow} ${i + 1}`}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-[1400ms] hover:scale-105 ${images.length > 1 ? "aspect-[4/5]" : "aspect-[16/10]"}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

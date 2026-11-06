import SafeImage from "./SafeImage.jsx";
import { clinicData } from "../lib/config.js";
import { serviceWhatsappLink } from "../lib/whatsapp.js";
import { useReveal } from "../lib/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowIcon } from "./Icons.jsx";

// Linha editorial: imagem grande + texto, alternando os lados
function ServiceRow({ service, index, ctaText }) {
  const ref = useReveal();
  const flip = index % 2 === 1;
  return (
    <article ref={ref} className="reveal grid items-center gap-10 md:grid-cols-12 md:gap-14 lg:gap-20">
      <div className={`md:col-span-7 ${flip ? "md:order-2" : ""}`}>
        <div className="group relative overflow-hidden rounded-[2rem]">
          <SafeImage
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          />
          {service.tag && (
            <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-[0.6rem] font-medium uppercase tracking-[0.22em] text-secondary backdrop-blur-md">
              {service.tag}
            </span>
          )}
        </div>
      </div>

      <div className={`md:col-span-5 ${flip ? "md:order-1" : ""}`}>
        <span className="font-serif text-6xl font-light leading-none text-primary md:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 font-serif text-3xl font-normal leading-tight text-secondary md:text-[2.6rem]">{service.title}</h3>
        <div className="my-7 h-px w-14 bg-primary" />
        <p className="font-light leading-relaxed text-secondary/65 md:text-lg">{service.description}</p>
        <a
          href={serviceWhatsappLink(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-9 inline-flex items-center gap-3 rounded-full border border-secondary/20 px-7 py-3.5 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-secondary transition-all hover:border-secondary hover:bg-secondary hover:text-accent"
        >
          {ctaText}
          <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const { services, content } = clinicData;
  const s = content.services;
  if (!services?.length) return null;

  return (
    <section id="procedimentos" className="bg-accent py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
          {services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} ctaText={s.ctaText} />
          ))}
        </div>
      </div>
    </section>
  );
}

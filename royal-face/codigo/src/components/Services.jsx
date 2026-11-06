import SafeImage from "./SafeImage.jsx";
import { clinicConfig } from "../data/clinicConfig.js";
import { serviceWhatsappLink } from "../lib/whatsapp.js";
import { useReveal } from "../lib/useReveal.js";
import SectionHeading from "./SectionHeading.jsx";
import { ArrowIcon } from "./Icons.jsx";

function ServiceCard({ service, ctaText }) {
  const ref = useReveal();
  return (
    <article
      ref={ref}
      className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-secondary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/10"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={service.image}
          alt={service.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {service.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-secondary/85 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
            {service.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-serif text-2xl font-medium">{service.name}</h3>
        <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-secondary/65">{service.description}</p>
        <a
          href={serviceWhatsappLink(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 self-start border-b border-primary pb-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary transition-all hover:gap-3"
        >
          {ctaText}
          <ArrowIcon className="h-3.5 w-3.5 text-primary" />
        </a>
      </div>
    </article>
  );
}

export default function Services() {
  const { services, sections } = clinicConfig;
  const s = sections.services;

  return (
    <section id="procedimentos" className="bg-accent py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div
          className={`grid gap-7 sm:grid-cols-2 ${services.length % 4 === 0 ? "xl:grid-cols-4" : "lg:grid-cols-3"}`}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} ctaText={s.ctaText} />
          ))}
        </div>
      </div>
    </section>
  );
}

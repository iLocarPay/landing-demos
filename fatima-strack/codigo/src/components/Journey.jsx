import { clinicData } from "../lib/config.js";
import SectionHeading from "./SectionHeading.jsx";

// "Como funciona": etapas do atendimento
export default function Journey() {
  const j = clinicData.content.journey;
  if (!j?.steps?.length) return null;

  return (
    <section id="jornada" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow={j.eyebrow} title={j.title} />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-secondary/10 bg-secondary/10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {j.steps.map((step, i) => (
            <li key={step.title} className="relative bg-white p-9 md:p-10">
              <span className="font-serif text-5xl font-light text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-serif text-2xl text-secondary">{step.title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-secondary/60">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

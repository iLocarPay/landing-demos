import { clinicConfig } from "../data/clinicConfig.js";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function FinalCta() {
  const s = clinicConfig.sections.finalCta;
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-center text-accent md:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-5">
        <div className="mx-auto mb-8 h-px w-16 bg-primary" />
        <h2 className="section-title text-accent">{s.title}</h2>
        <p className="mx-auto mt-5 max-w-xl font-light leading-relaxed text-accent/70">{s.subtitle}</p>
        <WhatsAppButton className="mt-10" align="center" showSubText />
      </div>
    </section>
  );
}

import { clinicData } from "../lib/config.js";
import WhatsAppButton from "./WhatsAppButton.jsx";

export default function FinalCta() {
  const s = clinicData.content.finalCta;
  return (
    <section className="relative overflow-hidden bg-secondary px-5 py-28 text-center text-accent md:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <span className="font-serif text-2xl text-primary">✦</span>
        <h2 className="mt-6 font-serif text-[2.6rem] font-light leading-[1.05] text-accent md:text-7xl">{s.title}</h2>
        <p className="mx-auto mt-7 max-w-xl text-base font-light leading-relaxed text-accent/65 md:text-lg">{s.subtitle}</p>
        <WhatsAppButton variant="gold" className="mt-12" align="center" showSubText />
      </div>
    </section>
  );
}

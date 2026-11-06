import { clinicData } from "../lib/config.js";
import SectionHeading from "./SectionHeading.jsx";
import { PlusIcon } from "./Icons.jsx";

export default function Faq() {
  const f = clinicData.content.faq;
  if (!f?.items?.length) return null;

  return (
    <section id="duvidas" className="bg-accent py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <SectionHeading eyebrow={f.eyebrow} title={f.title} align="left" className="lg:col-span-4" />
        <div className="divide-y divide-secondary/10 border-y border-secondary/10 lg:col-span-8">
          {f.items.map((item, i) => (
            <details key={item.q} className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-serif text-xl text-secondary md:text-2xl">
                {item.q}
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/20 text-secondary transition-transform duration-300 group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-14 font-light leading-relaxed text-secondary/65">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

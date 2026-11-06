import { clinicData } from "../lib/config.js";

// Faixa de confiança com os números da clínica + faixa animada com os tratamentos
export default function TrustBar() {
  const { content, services } = clinicData;
  const stats = content.about?.stats ?? [];
  const words = [...services.map((s) => s.title), ...(content.hero?.highlights ?? [])];

  return (
    <>
      {stats.length > 0 && (
        <section className="border-y border-secondary/10 bg-white">
          <dl
            className="mx-auto grid max-w-6xl divide-x divide-secondary/10 px-2"
            style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center px-3 py-9 text-center md:py-12">
                <dd className="font-serif text-4xl font-light text-secondary md:text-6xl">{s.value}</dd>
                <dt className="mt-3 text-[0.6rem] uppercase leading-snug tracking-[0.2em] text-secondary/55 md:text-[0.68rem]">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </section>
      )}

      {words.length > 0 && (
        <div className="overflow-hidden bg-secondary py-6" aria-hidden="true">
          <div className="marquee-track flex w-max">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {words.map((w, i) => (
                  <span key={`${dup}-${i}`} className="flex items-center whitespace-nowrap font-serif text-2xl italic font-light text-accent/85 md:text-3xl">
                    <span className="px-8">{w}</span>
                    <span className="text-base not-italic text-primary">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

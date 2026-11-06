// Cabeçalho de seção. align: "center" | "left". light: para fundos escuros.
export default function SectionHeading({ eyebrow, title, subtitle, light = false, align = "center", className = "" }) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>}
      {title && <h2 className={`section-title mt-6 ${light ? "text-accent" : "text-secondary"}`}>{title}</h2>}
      {subtitle && (
        <p className={`mt-6 text-base font-light leading-relaxed md:text-lg ${light ? "text-accent/65" : "text-secondary/60"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

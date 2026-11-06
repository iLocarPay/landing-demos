export default function SectionHeading({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && <h2 className={`section-title ${light ? "text-accent" : "text-secondary"}`}>{title}</h2>}
      {subtitle && (
        <p className={`mt-5 text-base font-light leading-relaxed ${light ? "text-accent/70" : "text-secondary/65"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

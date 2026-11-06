import { useState } from "react";
import { clinicConfig } from "../data/clinicConfig.js";

// <img> que, se a URL falhar, mostra um fundo neutro com o logo — nunca um ícone quebrado
export default function SafeImage({ src, alt = "", className = "", ...props }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        role={alt ? "img" : undefined}
        aria-label={alt || undefined}
        className={`${className} flex items-center justify-center bg-gradient-to-br from-secondary to-secondary/80`}
      >
        <span className="px-6 text-center font-serif text-lg tracking-[0.25em] text-primary/70">
          {clinicConfig.info.logoText}
        </span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} {...props} />;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const WhatsAppIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5c0-5.19 4.23-9.41 9.42-9.41 2.51 0 4.88.98 6.65 2.76a9.35 9.35 0 0 1 2.75 6.66c0 5.19-4.23 9.41-9.41 9.41M20.06 3.98A11.3 11.3 0 0 0 12.05.66C5.8.66.71 5.75.71 12c0 2 .52 3.95 1.52 5.67L.62 23.5l5.97-1.57a11.3 11.3 0 0 0 5.45 1.39h.01c6.25 0 11.34-5.09 11.34-11.34 0-3.03-1.18-5.88-3.33-8.02" />
  </svg>
);

export const StarIcon = ({ className = "h-4 w-4", filled = true }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
  >
    <path d="m12 2.5 2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95L12 2.5Z" />
  </svg>
);

export const GoogleIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.45a5.52 5.52 0 0 1-2.39 3.62v3h3.87c2.26-2.09 3.57-5.16 3.57-8.81Z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.87-3c-1.07.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.95H1.29v3.1A12 12 0 0 0 12 24Z" />
    <path fill="#FBBC05" d="M5.29 14.3a7.2 7.2 0 0 1 0-4.6V6.6h-4a12 12 0 0 0 0 10.8l4-3.1Z" />
    <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.58 1.8l3.43-3.44A11.5 11.5 0 0 0 12 0 12 12 0 0 0 1.29 6.6l4 3.1C6.23 6.86 8.88 4.75 12 4.75Z" />
  </svg>
);

export const InstagramIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
  </svg>
);

export const MapPinIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

export const ClockIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const MenuIcon = ({ className = "h-6 w-6", open }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
  </svg>
);

export const ArrowIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const featureIcons = {
  shield: <path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.9 7.5-9.5V6L12 3Zm-3 9 2 2 4-4" />,
  sparkles: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" />,
  heart: <path d="M12 20s-7.5-4.6-7.5-10A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z" />,
};

// Ícones disponíveis para clinicData.content.differentials[].icon: "shield" | "sparkles" | "heart"
export const FeatureIcon = ({ name, className = "h-6 w-6" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    {featureIcons[name] ?? featureIcons.sparkles}
  </svg>
);

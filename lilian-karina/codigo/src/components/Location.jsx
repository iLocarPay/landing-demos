import { clinicData, formatPhone } from "../lib/config.js";
import { mapsEmbedUrl, whatsappLink } from "../lib/whatsapp.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { ArrowIcon, ClockIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "./Icons.jsx";

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-5 border-b border-secondary/10 py-6 last:border-0">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.24em] text-secondary/50">{label}</p>
        <div className="mt-1.5 font-light leading-relaxed text-secondary">{children}</div>
      </div>
    </div>
  );
}

export default function Location() {
  const { brand, content } = clinicData;
  const s = content.location;

  return (
    <section id="localizacao" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">{s.eyebrow}</p>
          <h2 className="section-title mt-6 text-secondary">{s.title}</h2>

          <div className="mt-10">
            <InfoRow icon={<MapPinIcon />} label={s.addressLabel}>
              {brand.address}
            </InfoRow>
            {brand.openingHours && (
              <InfoRow icon={<ClockIcon />} label={s.hoursLabel}>
                {brand.openingHours}
              </InfoRow>
            )}
            <InfoRow icon={<PhoneIcon />} label={s.phoneLabel}>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
                {formatPhone(brand.whatsappNumber)}
              </a>
            </InfoRow>
            {brand.otherLocation && (
              <InfoRow icon={<MapPinIcon />} label={s.otherLocationLabel}>
                {brand.otherLocation}
              </InfoRow>
            )}
            {brand.instagramUrl && (
              <InfoRow icon={<InstagramIcon />} label={s.socialLabel}>
                <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
                  {brand.instagramHandle || brand.instagramUrl}
                </a>
              </InfoRow>
            )}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <WhatsAppButton variant="dark" />
            {brand.googleMapsUrl && (
              <a
                href={brand.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-secondary/20 px-7 py-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-secondary transition hover:border-secondary"
              >
                {s.directionsText}
                <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>

        <div className="min-h-[420px] overflow-hidden rounded-[2rem] border border-secondary/10 lg:col-span-7">
          <iframe
            title={s.mapTitle}
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[420px] w-full border-0 grayscale-[40%]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

import { clinicData } from "../config/clinicData.js";
import { mapsEmbedUrl } from "../lib/whatsapp.js";
import WhatsAppButton from "./WhatsAppButton.jsx";
import { ClockIcon, InstagramIcon, MapPinIcon } from "./Icons.jsx";

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
        {icon}
      </span>
      <div>
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-secondary/50">{label}</p>
        <div className="mt-1 font-light leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

export default function Location() {
  const { brand, content } = clinicData;
  const s = content.location;

  return (
    <section id="localizacao" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="eyebrow mb-4">{s.eyebrow}</p>
          <h2 className="section-title">{s.title}</h2>
          <div className="my-8 h-px w-16 bg-primary" />

          <div className="space-y-7">
            <InfoRow icon={<MapPinIcon />} label={s.addressLabel}>
              {brand.address}
            </InfoRow>
            {brand.openingHours && (
              <InfoRow icon={<ClockIcon />} label={s.hoursLabel}>
                {brand.openingHours}
              </InfoRow>
            )}
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

          <WhatsAppButton variant="dark" className="mt-10" />
        </div>

        <div className="min-h-[380px] overflow-hidden rounded-2xl ring-1 ring-secondary/10 lg:col-span-3">
          <iframe
            title={s.mapTitle}
            src={mapsEmbedUrl()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[380px] w-full border-0 grayscale-[35%]"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

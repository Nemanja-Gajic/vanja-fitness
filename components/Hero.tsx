import { site } from "@/lib/site";

const stats = [
  { value: "4+", label: "godine iskustva" },
  { value: "4–8", label: "žena po grupi" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        src="/hero.mp4"
        poster="/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Scrim for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />

      <div className="wrap flex min-h-[600px] flex-col justify-center py-24 md:min-h-[88vh]">
        <div className="max-w-2xl animate-fade-up">
          <span className="kicker text-lilac">
            {site.tagline} · {site.city}
          </span>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.06] text-cream sm:text-6xl sm:leading-[1.04] lg:text-7xl">
            Zategni telo i vrati <span className="italic text-lilac">samopouzdanje</span>
          </h1>
          <p className="mt-5 max-w-md text-base font-light text-cream/85 sm:text-lg">
            Male grupe žena, trener koji prati svaki tvoj pokret i atmosfera u
            kojoj se vraćaš. Bez osude, bez pritiska.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-lilac px-5 py-3 text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-lilac-deep sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <span className="sm:hidden">Besplatna proba</span>
              <span className="hidden sm:inline">Javi se za besplatnu probu</span>
            </a>
            <a
              href="#termini"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-ink sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <span className="sm:hidden">Termini</span>
              <span className="hidden sm:inline">Pogledaj termine</span>
            </a>
          </div>

          <dl className="mt-12 flex max-w-md flex-wrap gap-x-12 gap-y-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-serif text-4xl text-cream">{s.value}</dt>
                <dd className="text-sm text-cream/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

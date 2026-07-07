import { site } from "@/lib/site";

const stats = [
  { value: "4+", label: "godine iskustva" },
  { value: "4–8", label: "žena po grupi" },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Background image (studio) */}
      <img
        className="hero-zoom absolute inset-0 -z-20 h-full w-full object-cover"
        src="/studio-hero.jpg"
        width={1920}
        height={1440}
        fetchPriority="high"
        alt="Sala za trening u fitnes studiju za žene Vanja Fitness u Sremskoj Mitrovici, sa ogledalima, TRX trakama i neonskim logom"
      />
      {/* Scrim for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-espresso/75 via-transparent to-espresso/25" />

      <div className="wrap flex min-h-[600px] flex-col justify-center py-24 md:min-h-[88vh]">
        <div className="max-w-2xl">
          <span
            className="hero-in kicker inline-block text-latte"
            style={{ animationDelay: "80ms" }}
          >
            {site.tagline} · {site.city}
          </span>

          <h1
            className="hero-in mt-6 text-[clamp(1.7rem,8vw,2.5rem)] leading-[1.05] text-cream sm:text-6xl sm:leading-[1.02] lg:text-7xl"
            style={{ animationDelay: "200ms" }}
          >
            Prve promene
            <span className="script -mb-2 -mt-2 block text-[clamp(2.6rem,12vw,3.75rem)] text-latte sm:-mb-3 sm:-mt-4 sm:text-8xl">
              vidiš za
            </span>
            Mesec dana
          </h1>

          <p
            className="hero-in mt-6 max-w-md text-base font-light text-cream/85 sm:text-lg"
            style={{ animationDelay: "360ms" }}
          >
            Male grupe žena, trener koji prati svaki tvoj pokret i atmosfera kojoj se vraćaš.
          </p>

          <div
            className="hero-in mt-8 flex gap-3"
            style={{ animationDelay: "500ms" }}
          >
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-cream px-5 py-3 text-sm font-medium text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-latte sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <span className="sm:hidden">Besplatna proba</span>
              <span className="hidden sm:inline">Javi se za besplatnu probu</span>
            </a>
            <a
              href="#termini"
              className="inline-flex items-center justify-center rounded-full border border-cream/40 px-5 py-3 text-sm font-medium text-cream transition-colors hover:bg-cream hover:text-espresso sm:px-7 sm:py-3.5 sm:text-[15px]"
            >
              <span className="sm:hidden">Termini</span>
              <span className="hidden sm:inline">Pogledaj termine</span>
            </a>
          </div>

          <dl
            className="hero-in mt-12 flex max-w-md flex-wrap gap-x-12 gap-y-4"
            style={{ animationDelay: "640ms" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-4xl font-bold text-cream">
                  {s.value}
                </dt>
                <dd className="text-sm text-cream/65">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

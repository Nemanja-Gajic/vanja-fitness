import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section id="kontakt" className="section">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-5xl bg-ink px-8 py-20 text-center text-mist">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-mist/50">
            Tvoje mesto te čeka
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl text-mist sm:text-6xl">
            Prva 3 treninga su <span className="italic">besplatna</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-mist/65">
            Probaš. Svidi ti se — ostaješ. Ako ne — odlaziš. Piši nam na
            Instagram i dogovaramo termin.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Piši nam na {site.instagramHandle}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center rounded-full border border-mist/30 px-7 py-3.5 text-[15px] font-medium text-mist transition-colors hover:bg-mist hover:text-ink"
            >
              Pozovi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

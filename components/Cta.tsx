import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section id="kontakt" className="section">
      <div className="wrap">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-5xl bg-espresso px-8 py-20 text-center text-cream">
            <span
              aria-hidden
              className="script pointer-events-none absolute -right-4 -top-8 select-none text-[10rem] text-cream/[0.05] sm:text-[13rem]"
            >
              vanja
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-latte">
              Tvoje mesto te čeka
            </span>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl text-cream sm:text-6xl">
              Prva 3 treninga su{" "}
              <span className="script text-[1.4em] text-latte">besplatna</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-cream/65">
              Probaš. Svidi ti se — ostaješ. Ako ne — odlaziš. Piši nam na
              Instagram i dogovaramo termin.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light"
              >
                Piši nam na {site.instagramHandle}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

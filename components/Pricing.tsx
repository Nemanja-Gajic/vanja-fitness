import { site } from "@/lib/site";
import Reveal from "./Reveal";

const included = [
  "3 grupna treninga nedeljno",
  "Male grupe — 4 do 8 žena",
  "Stalni nadzor pravilne forme",
  "Mesečno praćenje napretka",
];

export default function Pricing() {
  return (
    <section id="clanarine" className="section bg-sand">
      <div className="wrap">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="kicker">Članarine</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Treniraj u{" "}
            <span className="script text-[1.35em] text-taupe">
              maloj grupi žena
            </span>
          </h2>
          <p className="mt-4 text-espresso/60">
            Male grupe, tri treninga nedeljno i trener koji prati svaki tvoj
            pokret. Počni bez obaveza — prva tri treninga su besplatna.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl items-center gap-6 md:grid-cols-2">
          {/* What's included */}
          <Reveal variant="left">
            <div className="rounded-5xl border border-espresso/[0.08] bg-white p-8">
              <h3 className="text-xl text-espresso">Šta uključuje</h3>
              <ul className="mt-6 space-y-3">
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-espresso/75"
                  >
                    <span className="mt-0.5 inline-grid h-5 w-5 place-items-center rounded-full bg-espresso text-[11px] text-cream">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Free trial CTA — no prices */}
          <Reveal variant="right" delay={120}>
            <div className="relative overflow-hidden rounded-5xl bg-espresso p-8 text-cream">
              <span className="inline-block rounded-full bg-latte px-4 py-1 text-xs font-semibold uppercase tracking-wide text-espresso">
                Počni besplatno
              </span>
              <p className="mt-5 font-display text-2xl font-bold uppercase leading-tight text-cream sm:text-3xl">
                Prva 3 treninga su{" "}
                <span className="script text-[1.4em] text-latte">besplatna</span>
              </p>
              <p className="mt-3 text-cream/70">
                Bez kartice, bez ugovora, bez pritiska. Probaš, pa odlučiš.
              </p>
              <p className="mt-6 border-t border-cream/15 pt-5 text-sm text-cream/70">
                Za aktuelne članarine i slobodne termine — javi se porukom, pa
                se dogovaramo.
              </p>

              <a
                href={site.instagram}
                data-cta="clanarine_ig"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light mt-7 w-full"
              >
                Javi se za članarine
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

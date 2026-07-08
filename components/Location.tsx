import { site } from "@/lib/site";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="lokacija" className="section bg-sand">
      <div className="wrap">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="kicker">Gde smo</span>
          <h2 className="mt-4 text-3xl text-espresso sm:text-5xl">
            Lako nas je{" "}
            <span className="script text-[1.35em] text-taupe">naći</span>
          </h2>
          <p className="mt-4 text-espresso/60">
            {site.address}, {site.postalCode} {site.city}. Dolaziš samo u
            zakazan termin, a parking imaš i privatni i u ulici.
          </p>
        </Reveal>

        <Reveal variant="scale" delay={100}>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-5xl border border-espresso/[0.08] shadow-[0_8px_30px_rgba(35,27,21,0.05)]">
            <iframe
              title="Vanja Fitness na mapi — Stari Šor 61, Sremska Mitrovica"
              src="https://www.google.com/maps?q=Stari+%C5%A0or+61,+Sremska+Mitrovica&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

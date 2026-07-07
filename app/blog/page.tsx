import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { posts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog — saveti za trening | Vanja Fitness",
  description:
    "Saveti iz prve ruke o treningu za žene: kako izgleda prvi trening, šta da poneseš i kako se trenira u malom fitnes studiju u Sremskoj Mitrovici.",
  alternates: { canonical: "/blog" },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function BlogPage() {
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="wrap max-w-3xl">
          <Reveal>
            <span className="kicker">Blog</span>
            <h1 className="mt-4 text-3xl text-espresso sm:text-5xl">
              Saveti iz{" "}
              <span className="script text-[1.35em] text-taupe">studija</span>
            </h1>
            <p className="mt-4 max-w-xl text-espresso/60">
              Bez teorije sa interneta — ono što žene stvarno pitaju pre i
              posle treninga, iz ugla trenera.
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {[...posts]
              .sort((a, b) => b.date.localeCompare(a.date))
              .map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <a
                  href={`/blog/${post.slug}`}
                  className="card block hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(35,27,21,0.1)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                    {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 text-xl text-espresso sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-espresso/60">{post.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-espresso underline underline-offset-4">
                    Pročitaj →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-14 rounded-4xl bg-espresso p-8 text-center text-cream">
              <p className="font-display text-xl font-bold uppercase">
                Spremna da probaš?
              </p>
              <p className="mx-auto mt-2 max-w-sm text-sm text-cream/65">
                Prva 3 treninga su besplatna — javi se i dogovaramo termin.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light mt-5"
              >
                Piši nam na {site.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

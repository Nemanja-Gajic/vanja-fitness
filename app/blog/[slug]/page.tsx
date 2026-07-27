import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts, getPost } from "@/lib/posts";
import { site } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Vanja Fitness`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [
        {
          url: post.image ? post.image.src : "/og.jpg",
          width: post.image ? post.image.width : 1200,
          height: post.image ? post.image.height : 630,
          alt: post.image ? post.image.alt : post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [post.image ? post.image.src : "/og.jpg"],
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** Pretvara [tekst](/putanja) u linkove i **tekst** u bold unutar pasusa. */
function renderText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[3]) {
      parts.push(
        <strong key={key++} className="font-semibold text-espresso">
          {match[3]}
        </strong>
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={match[2]}
          className="font-medium text-espresso underline decoration-taupe underline-offset-4 transition-colors hover:text-taupe"
        >
          {match[1]}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

export default function PostPage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const toc = post.sections.filter((s) => s.heading && s.id);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "sr",
    image: post.image ? `${site.url}${post.image.src}` : `${site.url}/og.jpg`,
    author: {
      "@type": "Person",
      name: "Vanja Drljača",
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="section">
        <div className="wrap max-w-2xl">
          <a
            href="/blog"
            className="text-sm text-espresso/50 transition-colors hover:text-espresso"
          >
            ← Svi tekstovi
          </a>

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
              {formatDate(post.date)} · Vanja Drljača
            </p>
            <h1 className="mt-4 text-3xl leading-tight text-espresso sm:text-4xl">
              {post.title}
            </h1>
          </header>

          {post.image && (
            <picture>
              <source
                type="image/webp"
                srcSet={post.image.src.replace(/\.jpg$/, ".webp")}
              />
              <img
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                className="mt-8 w-full rounded-4xl object-cover"
              />
            </picture>
          )}

          {toc.length > 1 && (
            <nav
              aria-label="Sadržaj"
              className="mt-8 rounded-4xl bg-sand p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe">
                Sadržaj
              </p>
              <ol className="mt-3 space-y-2">
                {toc.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-[15px] text-espresso/75 transition-colors hover:text-espresso"
                    >
                      <span className="mr-2 font-display text-xs font-bold text-taupe">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-10 space-y-8">
            {post.sections.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2
                    id={section.id}
                    className="mb-4 scroll-mt-24 text-xl text-espresso sm:text-2xl"
                  >
                    {section.heading}
                  </h2>
                )}
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="mt-4 leading-relaxed text-espresso/75 first:mt-0"
                  >
                    {renderText(paragraph)}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <div className="mt-14 rounded-4xl bg-espresso p-8 text-center text-cream">
            <p className="font-display text-xl font-bold uppercase">
              Prva 3 treninga su besplatna
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-cream/65">
              Bez kartice i bez ugovora — javi se porukom i dogovaramo termin.
            </p>
            <a
              href={site.instagram}
              data-cta="blog_kraj_ig"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-light mt-5"
            >
              Piši nam na {site.instagramHandle}
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

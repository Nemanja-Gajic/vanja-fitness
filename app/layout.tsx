import type { Metadata } from "next";
import Script from "next/script";
import { site } from "@/lib/site";
import "./globals.css";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: "/",
  },
  title: "Vanja Fitness — Treninzi za žene | Fitnes studio Sremska Mitrovica",
  description:
    "Grupni i personalni treninzi za žene u Sremskoj Mitrovici. Fitnes studio sa zakazanim terminima — male grupe i trener uz tebe na svakom pokretu. Prva 3 treninga su besplatna.",
  openGraph: {
    title: "Vanja Fitness — Treninzi za žene u Sremskoj Mitrovici",
    description:
      "Zategni telo i vrati samopouzdanje uz trenera koji te zna po imenu. Prva 3 treninga gratis.",
    url: "/",
    type: "website",
    locale: "sr_RS",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  description:
    "Fitnes studio za žene u Sremskoj Mitrovici — grupni i personalni treninzi u zakazanim terminima.",
  url: site.url,
  image: `${site.url}/teretana.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: site.city,
    postalCode: site.postalCode,
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "10:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "18:00",
      closes: "21:00",
    },
  ],
  sameAs: [site.instagram],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Allura&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V9RXXZGZSZ"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V9RXXZGZSZ');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Loader />
        {children}
      </body>
    </html>
  );
}

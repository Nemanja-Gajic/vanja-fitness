import type { Metadata } from "next";
import "./globals.css";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Vanja Fitness — Studio za žene | Sremska Mitrovica",
  description:
    "Boutique studio za žene u Sremskoj Mitrovici. Male grupe, pravilna forma i atmosfera bez osude. Prva 3 treninga su besplatna.",
  openGraph: {
    title: "Vanja Fitness — Studio za žene",
    description:
      "Zategni telo i vrati samopouzdanje uz trenera koji te zna po imenu. Prva 3 treninga gratis.",
    type: "website",
    locale: "sr_RS",
  },
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
        <Loader />
        {children}
      </body>
    </html>
  );
}

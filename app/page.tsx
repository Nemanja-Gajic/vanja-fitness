import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Benefits />
      <Schedule />
      <Pricing />
      {/* Utisci su privremeno sklonjeni dok ne stignu pravi citati članica.
          Za vraćanje: odkomentariši liniju ispod i zameni placeholder tekstove
          u components/Testimonials.tsx pravim utiscima (ime + saglasnost). */}
      {/* <Testimonials /> */}
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}

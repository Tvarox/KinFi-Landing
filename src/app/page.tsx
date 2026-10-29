import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Earning from "@/components/Earning";
import Safety from "@/components/Safety";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Earning />
      <Safety />
      <Faq />
      <Footer />
    </main>
  );
}

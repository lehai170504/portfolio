import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-neutral-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <Footer />
    </main>
  );
}

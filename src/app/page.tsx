import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col relative">
        {/* Enhanced Dynamic Ambient Background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 mix-blend-overlay" />
          {/* Animated Aurora Orbs */}
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-900/30 blur-[120px] animate-[pulse_8s_ease-in-out_infinite_alternate]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-blue-900/20 blur-[150px] animate-[pulse_12s_ease-in-out_infinite_alternate_reverse]" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_alternate]" />
        </div>
        <HeroSection />
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProjectsSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ExperienceSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>
      </main>
    </>
  );
}

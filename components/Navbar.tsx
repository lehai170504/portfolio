"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const sections = ["projects", "skills", "experience", "contact"] as const;

function SectionLinks({
  activeSection,
  layoutId,
  className,
}: {
  activeSection: string | null;
  layoutId: string;
  className: string;
}) {
  return (
    <nav aria-label="Main navigation" className={className}>
      {sections.map((section) => {
        const label = section[0].toUpperCase() + section.slice(1);
        const isActive = activeSection === section;

        return (
          <a
            key={section}
            href={`#${section}`}
            aria-current={isActive ? "location" : undefined}
            className={`relative inline-flex items-center py-1 transition-colors hover:text-[#f06432] ${
              isActive ? "text-[#f06432]" : ""
            }`}
          >
            {label}
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f06432]"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </a>
        );
      })}
    </nav>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section))
      .filter((target): target is HTMLElement => target !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#f06432] origin-left z-50 pointer-events-none"
      />

      <motion.header
        initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: prefersReducedMotion ? 0.35 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 pt-3 pointer-events-none sm:px-4 sm:pt-5"
      >
        <div
          className={`pointer-events-auto flex flex-wrap items-center justify-between border transition-all duration-300 ${scrolled
              ? "border-[#d7d1c5] bg-[#f3f0e8]/95 shadow-lg shadow-[#342b1d]/[0.08]"
              : "border-transparent bg-[#f3f0e8]/80"
            } w-full max-w-5xl gap-3 px-3 py-2.5 sm:gap-6 sm:px-5 sm:py-3`}
        >
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-8 w-8 items-center justify-center bg-[#f06432] font-mono font-bold text-xs text-white transition-colors">
              LH
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-[#1b1b18] group-hover:text-[#f06432] transition-colors">
                Lê Hoàng Hải
              </span>
              <span className="text-[10px] font-mono text-[#716d65] hidden sm:block">
                JAVA / BACKEND
              </span>
            </div>
          </a>

          <SectionLinks
            activeSection={activeSection}
            layoutId="desktop-active-section"
            className="order-2 hidden items-center gap-6 text-sm font-medium text-[#716d65] md:flex"
          />

          <SectionLinks
            activeSection={activeSection}
            layoutId="mobile-active-section"
            className="order-4 flex w-full items-center justify-between gap-2 border-t border-[#d7d1c5] pt-2 text-[10px] font-medium text-[#716d65] md:hidden"
          />

          <div className="order-3 flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 border border-[#d7d1c5] px-3 py-1 text-xs text-[#716d65] font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f06432]" />
              <span>Open to work</span>
            </div>

            <div className="h-4 w-[1px] bg-neutral-800 hidden sm:block" />

            <a
              href="https://github.com/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#716d65] hover:text-[#f06432] hover:bg-[#e9e5db] transition-all border border-transparent"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#716d65] hover:text-[#f06432] hover:bg-[#e9e5db] transition-all border border-transparent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.header>
    </>
  );
}

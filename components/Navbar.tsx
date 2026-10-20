"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 origin-left z-50 pointer-events-none"
      />

      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 sm:pt-5 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-3 rounded-2xl border transition-all duration-300 ${scrolled
              ? "border-neutral-700/80 bg-[#0c0e15]/85 backdrop-blur-xl shadow-xl shadow-black/50"
              : "border-white/10 bg-[#0c0e15]/60 backdrop-blur-md shadow-lg shadow-black/30"
            } w-full max-w-5xl`}
        >
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/40 font-display font-bold text-xs text-white group-hover:border-blue-400 transition-colors">
              LH
            </div>
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                Lê Hoàng Hải
              </span>
              <span className="text-[11px] font-mono text-neutral-400 hidden sm:block">
                Full-Stack & Backend Engineer
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to work</span>
            </div>

            <div className="h-4 w-[1px] bg-neutral-800 hidden sm:block" />

            <a
              href="https://github.com/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-all border border-transparent hover:border-neutral-700"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2 text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-all border border-transparent hover:border-neutral-700"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

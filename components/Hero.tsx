"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Briefcase } from "lucide-react";
import MagneticButton from "./MagneticButton";
import HeroAvatar2D from "./HeroAvatar2D";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-36 pb-20 flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[480px] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-purple-600/8 to-transparent blur-3xl ambient-glow" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-7 pr-0 lg:pr-6"
          >
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium">Software Engineering Student & Full-Stack Developer</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  Lê Hoàng Hải
                </span>
              </h1>
              <p className="font-display text-xl sm:text-2xl font-semibold text-neutral-300 tracking-tight">
                Full-Stack / Java Backend Engineer
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300/90 leading-relaxed max-w-xl font-normal">
              Software Engineering student with end-to-end product development expertise.
              Proficient in Java Spring Boot, Next.js, PostgreSQL, and Redis. Building scalable
              architectures and hardware-accelerated frontend experiences.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-neutral-400">
              <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-[#0f121a]/80 px-4 py-2.5">
                <MapPin className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-neutral-300">Vietnam</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-[#0f121a]/80 px-4 py-2.5">
                <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
                <span className="text-neutral-300">Ex-Intern at FPT Software</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <MagneticButton href="#projects">
                <div className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-200 shadow-lg shadow-white/10">
                  <span>View Projects</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </MagneticButton>

              <MagneticButton href="#contact">
                <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-700/80 bg-[#11131c] px-6 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-600 hover:bg-[#161924] hover:text-white">
                  <Mail className="h-4 w-4 text-neutral-400" />
                  <span>Contact Me</span>
                </div>
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end items-center relative pl-0 lg:pl-4"
          >
            <div className="w-full max-w-[420px]">
              <HeroAvatar2D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

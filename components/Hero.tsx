"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Briefcase } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TerminalBoot from "./TerminalBoot";
import { revealUp, revealWord, staggerReveal } from "./motionVariants";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = "hidden";
  const sequence = staggerReveal;
  const entrance = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35 } } }
    : revealUp;
  const wordEntrance = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35 } } }
    : revealWord;

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden pb-10 pt-24 sm:pb-14 sm:pt-28">
      <div className="pointer-events-none absolute right-[8%] top-24 h-4 w-4 rotate-45 bg-[#f06432]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="grid min-w-0 grid-cols-1 items-center gap-2 lg:grid-cols-12 lg:gap-0">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : initial}
            animate="visible"
            variants={sequence}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <motion.div
              variants={entrance}
              className="inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.2em] text-[#f06432]"
            >
              <span className="h-px w-8 bg-[#f06432]" />
              <span>Software Engineer · Vietnam</span>
            </motion.div>

            <motion.div variants={sequence} className="space-y-4">
              <motion.h1
                aria-label="Systems that stay in sync."
                variants={sequence}
                className="font-display text-[clamp(2.75rem,12vw,4rem)] font-bold leading-[0.98] tracking-[-0.07em] text-[#1b1b18] sm:text-7xl xl:text-[6.5rem]"
              >
                <span className="block" aria-hidden="true">
                  <motion.span variants={wordEntrance} className="inline-block">
                    Systems
                  </motion.span>{" "}
                  <motion.span variants={wordEntrance} className="inline-block">
                    that
                  </motion.span>
                </span>
                <span className="block" aria-hidden="true">
                  <motion.span variants={wordEntrance} className="inline-block">
                    stay
                  </motion.span>{" "}
                  <motion.span variants={wordEntrance} className="inline-block text-[#f06432]">
                    in
                  </motion.span>{" "}
                  <motion.span variants={wordEntrance} className="inline-block text-[#f06432]">
                    sync.
                  </motion.span>
                </span>
              </motion.h1>
              <motion.p
                variants={entrance}
                className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#716d65] sm:text-xs sm:tracking-[0.18em]"
              >
                <span>Java backend</span>
                <span className="text-[#f06432]">/</span>
                <span>API design</span>
                <span className="text-[#f06432]">/</span>
                <span>real-time systems</span>
              </motion.p>
            </motion.div>

            <motion.p
              variants={entrance}
              className="max-w-md text-sm leading-relaxed text-[#5f5a52] sm:text-base"
            >
              I build reliable backends for products where every update matters.
            </motion.p>

            <motion.div
              variants={sequence}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#716d65]"
            >
              <motion.span variants={entrance} className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#f06432]" />
                Vietnam
              </motion.span>
              <motion.span variants={entrance} className="inline-flex items-center gap-2">
                <Briefcase className="h-3.5 w-3.5 text-[#716d65]" />
                Former intern · FPT Software
              </motion.span>
            </motion.div>

            <motion.div
              variants={sequence}
              className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4"
            >
              <motion.div variants={entrance}>
                <MagneticButton href="#projects">
                  <div className="group inline-flex items-center gap-2 bg-[#1b1b18] px-5 py-3.5 text-sm font-bold text-[#fffaf2] transition-all hover:bg-[#f06432] sm:px-7">
                    <span>View Projects</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </MagneticButton>
              </motion.div>

              <motion.div variants={entrance}>
                <MagneticButton href="#contact">
                  <div className="inline-flex items-center gap-2 border border-[#c9c2b5] bg-transparent px-5 py-3.5 text-sm font-semibold text-[#1b1b18] transition-colors hover:border-[#f06432] hover:text-[#f06432] sm:px-6">
                    <Mail className="h-4 w-4 text-[#f06432]" />
                    <span>Contact Me</span>
                  </div>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : initial}
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.92, y: 24 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: prefersReducedMotion ? 0.35 : 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] },
              },
            }}
            className="min-w-0 lg:col-span-5 lg:pl-5"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[460px] overflow-hidden border border-[#d7d1c5] bg-[radial-gradient(ellipse_at_50%_38%,#fffdf7_0%,#f7f4ed_52%,#ebe7dd_100%)]">
              <span className="absolute left-4 top-4 z-10 font-mono text-[9px] uppercase tracking-[0.18em] text-[#716d65] sm:left-5 sm:top-5 sm:text-[10px]">
                01 / Developer
              </span>
              <span className="absolute right-4 top-4 z-10 h-3 w-3 rotate-45 bg-[#f06432] sm:right-5 sm:top-5" />
              <Image
                src="/profile-portrait.png"
                alt="Portrait of Lê Hoàng Hải"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between border-t border-[#d7d1c5]/80 bg-[#f3f0e8]/85 px-4 py-3 backdrop-blur-[2px] sm:px-5">
                <span className="font-display text-sm font-bold tracking-tight text-[#1b1b18] sm:text-base">
                  Lê Hoàng Hải
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-[#716d65] sm:text-[9px] sm:tracking-[0.16em]">
                  Java / Backend
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : initial}
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { duration: prefersReducedMotion ? 0.35 : 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="mt-12 max-w-3xl sm:mt-16"
        >
          <TerminalBoot />
        </motion.div>
      </div>
    </section>
  );
}

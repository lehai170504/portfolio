"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  DockerIcon,
  JavaIcon,
  MongoIcon,
  NextjsIcon,
  PostgresIcon,
  RedisIcon,
  SpringIcon,
  TailwindIcon,
  TypescriptIcon,
  WebRTCIcon,
  WebSocketIcon,
} from "./BrandIcons";

const coreStack = [
  { name: "Java", role: "Language", icon: JavaIcon, color: "text-[#f89820]" },
  { name: "Spring Boot", role: "Backend framework", icon: SpringIcon, color: "text-[#6db33f]" },
  { name: "PostgreSQL", role: "Relational database", icon: PostgresIcon, color: "text-[#4169e1]" },
  { name: "Redis", role: "Cache & data store", icon: RedisIcon, color: "text-[#ff4438]" },
];

const supportingStack = [
  { name: "MongoDB", icon: MongoIcon, color: "text-[#47a248]" },
  { name: "Docker", icon: DockerIcon, color: "text-[#2496ed]" },
  { name: "Next.js", icon: NextjsIcon, color: "text-[#1b1b18]" },
  { name: "TypeScript", icon: TypescriptIcon, color: "text-[#3178c6]" },
  { name: "WebSockets", icon: WebSocketIcon, color: "text-[#38566f]" },
  { name: "WebRTC", icon: WebRTCIcon, color: "text-[#4b58a5]" },
  { name: "Tailwind CSS", icon: TailwindIcon, color: "text-[#06b6d4]" },
];

const staggerGroup = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function TechMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const itemReveal = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0.01 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative w-full scroll-mt-24 overflow-hidden border-y border-[#d7d1c5] bg-[#ebe7dd] py-14 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#f06432]"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerGroup}
        className="container mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start lg:gap-14"
      >
        <motion.div variants={itemReveal} className="lg:sticky lg:top-32">
          <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]">
            <span className="h-px w-6 bg-[#f06432]" />
            Stack map / 01
          </p>
          <h2 className="font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-[#1b1b18] sm:text-5xl">
            Core
            <br />
            <span className="text-[#f06432]">stack.</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#716d65] sm:text-base">
            Backend first. These are the tools I use to build reliable APIs,
            work with data, and ship real-time features.
          </p>
          <div className="mt-7 hidden border-l border-[#c9c2b5] pl-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-[#8a8378] lg:block">
            <span className="block text-[#1b1b18]">Primary focus</span>
            <span>Backend engineering</span>
          </div>
        </motion.div>

        <div className="min-w-0 border border-[#d7d1c5] bg-[#f3f0e8] shadow-[0_12px_36px_rgba(42,34,22,0.04)]">
          <div className="flex items-center justify-between border-b border-[#d7d1c5] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#716d65] sm:text-[10px]">
              <span className="h-2 w-2 bg-[#f06432]" />
              Backend / data
            </div>
            <span className="font-mono text-[9px] text-[#aaa397]">FOUNDATION_04</span>
          </div>

          <motion.div
            variants={staggerGroup}
            className="grid grid-cols-1 gap-px bg-[#d7d1c5] p-px sm:grid-cols-2"
          >
            {coreStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  variants={itemReveal}
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          y: -3,
                          transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                        }
                  }
                  className="group relative flex min-h-28 items-center gap-4 bg-[#fffdf7] px-4 py-5 transition-colors duration-300 hover:bg-white sm:px-5"
                >
                  <span className="absolute right-3 top-3 font-mono text-[9px] text-[#aaa397]">
                    0{index + 1}
                  </span>
                  <span className={`flex h-12 w-12 shrink-0 items-center justify-center border border-[#e5dfd3] bg-[#f7f4ed] ${tech.color}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-1">
                    <span className="font-display text-base font-bold tracking-tight text-[#1b1b18] sm:text-lg">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#8a8378] sm:text-[10px]">
                      {tech.role}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="border-t border-[#d7d1c5] px-4 py-4 sm:px-5 sm:py-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a8378] sm:text-[10px]">
                Supporting toolkit
              </p>
              <span className="h-px flex-1 bg-[#e5dfd3]" />
              <span className="font-mono text-[9px] text-[#aaa397]">07 TOOLS</span>
            </div>
            <motion.div variants={staggerGroup} className="flex flex-wrap gap-2">
              {supportingStack.map((tech) => {
                const Icon = tech.icon;
                return (
                  <motion.span
                    key={tech.name}
                    variants={itemReveal}
                    className="inline-flex items-center gap-2 border border-[#e5dfd3] bg-[#f7f4ed] px-2.5 py-2 text-[11px] text-[#4d4942] transition-colors duration-300 hover:border-[#c9c2b5] hover:bg-[#fffdf7] sm:px-3 sm:text-xs"
                  >
                    <span className={tech.color}>
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {tech.name}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  JavaIcon,
  SpringIcon,
  NextjsIcon,
  PostgresIcon,
  RedisIcon,
  MongoIcon,
  DockerIcon,
  TypescriptIcon,
  WebSocketIcon,
  WebRTCIcon,
  TailwindIcon,
} from "./BrandIcons";

const row1 = [
  { name: "Java", icon: JavaIcon, color: "text-[#f89820]" },
  { name: "Spring Boot", icon: SpringIcon, color: "text-[#6db33f]" },
  { name: "PostgreSQL", icon: PostgresIcon, color: "text-[#4169e1]" },
  { name: "Redis", icon: RedisIcon, color: "text-[#ff4438]" },
  { name: "MongoDB", icon: MongoIcon, color: "text-[#47a248]" },
  { name: "Docker", icon: DockerIcon, color: "text-[#2496ed]" },
];

const row2 = [
  { name: "Next.js", icon: NextjsIcon, color: "text-[#1b1b18]" },
  { name: "TypeScript", icon: TypescriptIcon, color: "text-[#3178c6]" },
  { name: "WebSockets", icon: WebSocketIcon, color: "text-[#38566f]" },
  { name: "WebRTC", icon: WebRTCIcon, color: "text-[#4b58a5]" },
  { name: "Tailwind CSS", icon: TailwindIcon, color: "text-[#06b6d4]" },
];

export default function TechMarquee() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative w-full scroll-mt-24 border-y border-[#d7d1c5] bg-[#ebe7dd] py-12 sm:py-16">
      <div className="container mx-auto grid max-w-6xl gap-7 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: prefersReducedMotion ? 0.35 : 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]">
            Toolbox / selected
          </div>
          <h3 className="font-display text-3xl font-bold tracking-[-0.05em] text-[#1b1b18] sm:text-4xl">
            Tools I reach for.
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#716d65]">
            Backend first, with enough frontend to ship the whole experience.
          </p>
        </motion.div>

        <div className="grid min-w-0 content-center gap-6 md:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a8378]">
              Backend / data
            </p>
            <div className="flex flex-wrap gap-2">
              {row1.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.span
                    key={tech.name}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: prefersReducedMotion ? 0.35 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 border border-[#d7d1c5] bg-[#f7f4ed] px-3 py-2 text-xs text-[#39362f]"
                  >
                    <span className={`shrink-0 ${tech.color}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                    {tech.name}
                  </motion.span>
                );
              })}
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a8378]">
              Frontend / realtime
            </p>
            <div className="flex flex-wrap gap-2">
              {row2.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.span
                    key={tech.name}
                    initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: prefersReducedMotion ? 0.35 : 0.5, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 border border-[#d7d1c5] bg-[#f7f4ed] px-3 py-2 text-xs text-[#39362f]"
                  >
                    <span className={`shrink-0 ${tech.color}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                    {tech.name}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

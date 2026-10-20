"use client";

import { motion } from "framer-motion";
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
  { name: "Java", role: "JDK 21 / OOP", icon: JavaIcon, color: "text-[#f89820]", border: "hover:border-[#f89820]/40", glow: "group-hover:shadow-[0_0_24px_rgba(248,152,32,0.18)]" },
  { name: "Spring Boot", role: "Microservices", icon: SpringIcon, color: "text-[#6db33f]", border: "hover:border-[#6db33f]/40", glow: "group-hover:shadow-[0_0_24px_rgba(109,179,63,0.18)]" },
  { name: "PostgreSQL", role: "ACID Database", icon: PostgresIcon, color: "text-[#336791]", border: "hover:border-[#336791]/40", glow: "group-hover:shadow-[0_0_24px_rgba(51,103,145,0.18)]" },
  { name: "Redis", role: "In-Memory Cache", icon: RedisIcon, color: "text-[#dc382d]", border: "hover:border-[#dc382d]/40", glow: "group-hover:shadow-[0_0_24px_rgba(220,56,45,0.18)]" },
  { name: "MongoDB", role: "NoSQL Store", icon: MongoIcon, color: "text-[#47a248]", border: "hover:border-[#47a248]/40", glow: "group-hover:shadow-[0_0_24px_rgba(71,162,72,0.18)]" },
  { name: "Docker", role: "Containers", icon: DockerIcon, color: "text-[#2496ed]", border: "hover:border-[#2496ed]/40", glow: "group-hover:shadow-[0_0_24px_rgba(36,150,237,0.18)]" },
];

const row2 = [
  { name: "Next.js", role: "App Router SSR", icon: NextjsIcon, color: "text-white", border: "hover:border-white/40", glow: "group-hover:shadow-[0_0_24px_rgba(255,255,255,0.18)]" },
  { name: "TypeScript", role: "Type Safety", icon: TypescriptIcon, color: "text-[#3178c6]", border: "hover:border-[#3178c6]/40", glow: "group-hover:shadow-[0_0_24px_rgba(49,120,198,0.18)]" },
  { name: "WebSockets", role: "Real-Time Sync", icon: WebSocketIcon, color: "text-neutral-100", border: "hover:border-amber-400/40", glow: "group-hover:shadow-[0_0_24px_rgba(251,191,36,0.18)]" },
  { name: "WebRTC", role: "P2P Low-Latency", icon: WebRTCIcon, color: "text-neutral-100", border: "hover:border-indigo-400/40", glow: "group-hover:shadow-[0_0_24px_rgba(129,140,248,0.18)]" },
  { name: "Tailwind CSS", role: "Utility Design", icon: TailwindIcon, color: "text-[#38bdf8]", border: "hover:border-[#38bdf8]/40", glow: "group-hover:shadow-[0_0_24px_rgba(56,189,248,0.18)]" },
];

export default function TechMarquee() {
  const row1Items = [...row1, ...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2, ...row2];

  return (
    <section id="skills" className="relative w-full py-24 overflow-hidden border-y border-white/[0.06] bg-[#090b11]">
      <div className="container mx-auto px-6 max-w-6xl mb-12 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs text-blue-300 font-medium mb-3.5">
          <span>Tech Stack & Architecture</span>
        </div>
        <h3 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Engineered with Modern Technologies
        </h3>
        <p className="mt-2.5 text-sm sm:text-base text-neutral-400 max-w-lg leading-relaxed">
          Production-tested backend frameworks, distributed databases, and high-performance frontend architectures.
        </p>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-32 sm:w-48 bg-gradient-to-r from-[#07080c] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-32 sm:w-48 bg-gradient-to-l from-[#07080c] to-transparent" />

      <div className="space-y-5">
        <motion.div
          className="flex w-max items-center gap-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 32,
          }}
        >
          {row1Items.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`r1-${tech.name}-${index}`}
                className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0e121d]/90 px-6 py-3.5 transition-all duration-300 hover:bg-[#141a29] hover:-translate-y-1 hover:scale-[1.03] shadow-lg shadow-black/30 cursor-pointer ${tech.border} ${tech.glow}`}
              >
                <div className={`shrink-0 ${tech.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display text-sm font-bold text-white tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider whitespace-nowrap">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex w-max items-center gap-5"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 34,
          }}
        >
          {row2Items.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`r2-${tech.name}-${index}`}
                className={`group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#0e121d]/90 px-6 py-3.5 transition-all duration-300 hover:bg-[#141a29] hover:-translate-y-1 hover:scale-[1.03] shadow-lg shadow-black/30 cursor-pointer ${tech.border} ${tech.glow}`}
              >
                <div className={`shrink-0 ${tech.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-display text-sm font-bold text-white tracking-tight whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-wider whitespace-nowrap">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

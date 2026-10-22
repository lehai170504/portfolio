"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}

const experiences: TimelineItem[] = [
  {
    company: "FPT Software",
    role: "Software Engineering Intern",
    period: "Feb 2025 – May 2025",
    location: "Vietnam",
    highlights: [
      "Standardized REST API contracts across backend microservices.",
      "Resolved frontend defects and contributed to code reviews.",
      "Delivered work through bi-weekly Agile sprints.",
    ],
    skills: ["REST APIs", "Java", "Agile/Scrum", "API Design", "UI/UX Optimization"],
  },
];

export default function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="relative scroll-mt-24 border-t border-[#d7d1c5] py-14 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-7 sm:mb-10">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.55, delay: prefersReducedMotion ? 0 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]"
          >
            Experience / 01
          </motion.div>
          <motion.h2
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.2 : 0.65, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold tracking-[-0.05em] text-[#1b1b18] sm:text-5xl"
          >
            Where I&apos;ve worked.
          </motion.h2>
        </div>

        <div className="relative ml-1 border-l border-[#d7d1c5] pl-5 sm:ml-0 sm:pl-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -28, y: 12 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "-30px" }}
              transition={{ duration: prefersReducedMotion ? 0.2 : 0.7, delay: prefersReducedMotion ? 0 : index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -left-[27px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#f3f0e8] bg-[#f06432] sm:-left-[39px]" />

              <div className="border border-[#d7d1c5] bg-[#fffdf7] p-4 transition-colors hover:border-[#f06432] sm:p-6 lg:p-8">
                <div className="flex flex-col justify-between gap-3 border-b border-[#e5dfd3] pb-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-display flex items-center gap-2.5 text-xl font-bold text-[#1b1b18] sm:text-2xl">
                      <Briefcase className="h-5 w-5 text-[#f06432]" />
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#716d65]">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#716d65]">
                    <span className="inline-flex items-center gap-1.5 border border-[#e5dfd3] bg-[#f7f4ed] px-3 py-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#f06432]" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 border border-[#e5dfd3] bg-[#f7f4ed] px-3 py-1.5">
                      <MapPin className="h-3.5 w-3.5 text-[#f06432]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {exp.highlights.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.5, delay: prefersReducedMotion ? 0 : i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-2.5 text-sm text-[#4d4942]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f06432]" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[#e5dfd3] pt-5">
                  {exp.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.4, delay: prefersReducedMotion ? 0 : index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="border border-[#e5dfd3] bg-[#f7f4ed] px-3 py-1 text-xs font-mono text-[#625d54]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

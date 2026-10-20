"use client";

import { motion } from "framer-motion";
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
      "Defined and standardized robust REST API contracts for backend microservices across cross-functional engineering teams.",
      "Diagnosed and resolved critical frontend and UI/UX defects, significantly elevating product stability and user experience.",
      "Collaborated actively in an Agile/Scrum team with bi-weekly sprint deliverables and continuous code reviews.",
    ],
    skills: ["REST APIs", "Java", "Agile/Scrum", "API Design", "UI/UX Optimization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative border-t border-white/[0.06]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-300 font-medium">
            <span>Career History</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Work Experience
          </h2>
          <p className="text-neutral-400 max-w-xl text-sm sm:text-base">
            Professional track record delivering production code and collaborative solutions.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#07080c] bg-blue-500 shadow-md shadow-blue-500/50" />

              <div className="rounded-3xl border border-neutral-800/90 bg-gradient-to-b from-[#111422]/90 to-[#0c0e16] p-7 sm:p-8 hover:border-neutral-700 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                      <Briefcase className="h-5 w-5 text-blue-400" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-neutral-300 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#141724] px-3 py-1.5 border border-neutral-800">
                      <Calendar className="h-3.5 w-3.5 text-neutral-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#141724] px-3 py-1.5 border border-neutral-800">
                      <MapPin className="h-3.5 w-3.5 text-neutral-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-neutral-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-white/[0.06]">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-neutral-800 bg-[#141724] px-3 py-1 text-xs font-mono text-neutral-300"
                    >
                      {skill}
                    </span>
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

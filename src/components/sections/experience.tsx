"use client";

import { portfolioData } from "@/data/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GitCommit, GitMerge, Terminal } from "lucide-react";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll to draw the glowing "main branch" line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 scroll-mt-32 bg-background relative overflow-clip border-y border-white/5">
      {/* Subtle ambient tech grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Glowing atmospheric orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 relative"
        >
          <div className="section-badge mb-6">
            <Terminal className="w-4 h-4" />
            <span>// HISTORY</span>
          </div>
          <h2 className="section-title">
            Commit History
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">

          {/* The Git 'main' Branch (Background track) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

          {/* The Glowing Active Branch Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 md:-translate-x-1/2 shadow-[0_0_15px_rgba(34,211,238,0.8)] origin-top"
          />

          {portfolioData.experience.map((exp, index) => {
            // Simulated git commit hashes for the authentic vibe
            const commitHashes = ["[eb49a8f]", "[3f8a9b2]", "[c7d1e4a]", "[9f2b8c1]"];
            const commitHash = commitHashes[index % commitHashes.length];
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex items-center w-full mb-16 last:mb-0 group">

                {/* The Commit Node */}
                <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-secondary border-2 border-cyan-400 md:-translate-x-1/2 z-10 flex items-center justify-center shadow-glow group-hover:shadow-glow-lg group-hover:scale-125 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* The Card */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${isEven ? "md:pr-0 md:mr-auto" : "md:pl-0 md:ml-auto"}`}
                >
                  <div className="glass-card rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden group/card">

                      {/* Decorative Git Branch Watermark */}
                      <GitCommit className={`absolute -bottom-10 ${isEven ? "-left-10" : "-right-10"} w-40 h-40 text-white/[0.02] pointer-events-none`} />

                      {/* Terminal Header */}
                      <div className={`flex flex-col gap-3 mb-6 ${isEven ? "md:items-end" : "md:items-start"}`}>

                        {/* Branch Badge */}
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
                          <GitMerge className="w-3 h-3 text-purple-400" />
                          <span>main</span>
                        </div>

                        {/* Commit Metadata */}
                        <div className={`flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-gray-400 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                          <span className="text-cyan-400 font-bold hover:underline cursor-pointer transition-all">{commitHash}</span>
                          <span className="text-gray-600">|</span>
                          <span className="text-gray-300">{exp.date}</span>
                        </div>
                      </div>

                      <div className={`flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-200/70 font-mono text-sm sm:text-base mb-6">
                          <span>@</span>
                          <span className="text-cyan-200 font-semibold">{exp.organization}</span>
                        </div>

                        {/* Mac OS Terminal window for description */}
                        <div className="bg-muted border border-border rounded-xl p-5 w-full text-left font-mono text-sm text-gray-300 shadow-inner relative group/terminal">
                          {/* Terminal Window Controls */}
                          <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-code-mac-red border border-code-mac-red/80" />
                            <div className="w-3 h-3 rounded-full bg-code-mac-yellow border border-code-mac-yellow/80" />
                            <div className="w-3 h-3 rounded-full bg-code-mac-green border border-code-mac-green/80" />
                          </div>

                          <div className="flex gap-3 leading-relaxed">
                            <div className="flex flex-col items-center select-none opacity-50">
                              <span>1</span>
                              <span>2</span>
                              <span>3</span>
                            </div>
                            <div className="font-sans text-base text-gray-300">
                              <span className="font-mono text-cyan-400 mr-2 text-sm">~</span>
                              <span className="font-mono text-green-400 mr-2 text-sm">➜</span>
                              <span className="font-mono text-gray-500 mb-2 block text-sm">./read_experience.sh</span>
                              {exp.description}
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { portfolioData } from "@/data/content";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire section to drive the smooth scale-down depth effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="projects" className="py-32 scroll-mt-32 relative overflow-clip bg-background">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/4 left-0 w-full h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-cyan-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24 relative"
        >
          <div className="section-badge mb-6">
            <Sparkles className="w-4 h-4" />
            <span>// SHOWCASE</span>
          </div>
          <h2 className="section-title">
            Featured Projects
          </h2>
          <p className="section-subtitle">
            A curated selection of my finest architectural designs, demonstrating scalable systems and real-time performance.
          </p>
        </motion.div>

        <div ref={containerRef} className="flex flex-col relative max-w-7xl mx-auto pb-24 mt-10 perspective-1000">
          {portfolioData.projects.map((project, index) => {
            const isLast = index === portfolioData.projects.length - 1;

            // Continuous smooth scale down as you scroll through the section
            const targetScale = 1 - ((portfolioData.projects.length - 1 - index) * 0.05);
            const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
            const targetOpacity = 1 - ((portfolioData.projects.length - 1 - index) * 0.3);
            const opacity = useTransform(scrollYProgress, [0, 1], [1, targetOpacity]);

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isLast={isLast}
                scale={scale}
                opacity={opacity}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Extract card to its own component to manage individual state
function ProjectCard({ project, index, isLast, scale, opacity }: any) {
  return (
    <div
      className="sticky will-change-transform"
      style={{
        top: `calc(12vh + ${index * 40}px)`,
        marginBottom: isLast ? "0" : "40vh",
        zIndex: index,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          scale,
          opacity,
          transformOrigin: "top center",
        }}
        className="w-full h-[600px] md:h-[700px] group relative rounded-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.6)] transform-gpu"
      >
        {/* 1. The Background Layer */}
        <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-white/[0.02] border border-white/5 pointer-events-none">
          <Image
            src={project.image || "/images/placeholder.png"}
            alt={project.title}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
        </div>

        {/* 2. The Tags Layer */}
        <div className="absolute top-8 right-8 flex flex-wrap justify-end gap-2 max-w-[50%] z-20 pointer-events-none">
          {project.tags.map((tag: string) => (
            <Badge
              key={tag}
              className="font-mono text-xs px-3 py-1.5 bg-black/50 border border-white/10 text-cyan-300 backdrop-blur-md"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* 3. The Main Content Layer */}
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full md:w-3/4 lg:w-2/3 z-20 pointer-events-none">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
            {project.title}
          </h3>
          <div className="glass-card p-6 rounded-2xl border-none pointer-events-auto mb-10 max-h-[250px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-cyan-500/50 [&::-webkit-scrollbar-thumb]:rounded-full">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed drop-shadow-lg">
              {project.description}
            </p>
            {project.features && (
              <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                {project.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="text-cyan-400 mt-0.5 text-xs">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-4 pointer-events-auto">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex h-14 overflow-hidden rounded-full p-[2px] focus:outline-none group/btn cursor-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#3b82f6_50%,#22d3ee_100%)] opacity-70 group-hover/btn:opacity-100 transition-opacity" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-white backdrop-blur-sm gap-2 transition-colors group-hover/btn:bg-secondary">
                <ExternalLink className="w-5 h-5 text-cyan-400" />
                <span className="font-semibold text-cyan-50">Live Demo</span>
              </span>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className: "rounded-full px-8 h-14 flex items-center justify-center border border-white/10 hover:bg-white/10 text-white bg-white/5 backdrop-blur-sm transition-all gap-2 cursor-none",
              })}
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-semibold">Source Code</span>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

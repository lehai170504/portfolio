"use client";

import { motion } from "framer-motion";
import {
  Github,
  Gavel,
  ShieldCheck,
  LineChart,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-300 font-medium">
            <Layers className="h-3.5 w-3.5" />
            <span>Stacked Showcase</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-neutral-300/80 max-w-xl text-sm sm:text-base">
            Scroll down to explore production-grade architectures and real-time platforms.
          </p>
        </div>

        <div className="relative space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-28 rounded-3xl border border-blue-500/25 bg-gradient-to-b from-[#121829] via-[#0d101c] to-[#090b12] p-8 sm:p-10 shadow-2xl shadow-black/80 transition-all hover:border-blue-500/50"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 shadow-md shadow-blue-500/10">
                    <Gavel className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        Thriftly
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/15 border border-rose-500/30 px-3 py-0.5 text-xs text-rose-300 font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                        Live Auction
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 font-medium">
                      Real-Time Auction & E-Commerce Platform
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="https://github.com/lehai170504/thriftly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl border border-neutral-700/80 bg-[#161a29] px-4 py-2 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-600 transition-all"
                  >
                    <Github className="h-4 w-4" />
                    <span>Source</span>
                  </a>
                  <a
                    href="https://thrift-swap.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-neutral-950 hover:bg-neutral-200 transition-all shadow-md shadow-white/10"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                High-throughput live bidding and auction platform engineered with pessimistic locking to eliminate race conditions under intense bid concurrency. Integrated WebSockets for real-time bid broadcasts and WebRTC for low-latency live streaming.
              </p>

              <div className="rounded-2xl border border-blue-500/15 bg-black/40 p-5 space-y-3.5">
                <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-3 text-neutral-400">
                  <span className="font-medium text-neutral-300">Live Concurrency Telemetry</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                    WebSockets Connected
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#111420]/80 border border-neutral-800">
                    <span className="text-neutral-400 block text-[11px] font-medium">Current High Bid</span>
                    <span className="font-display text-xl font-bold text-white mt-1 block">$1,450.00</span>
                    <span className="text-blue-400 text-[11px] font-mono mt-0.5 block">Pessimistic Row Lock Active</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#111420]/80 border border-neutral-800">
                    <span className="text-neutral-400 block text-[11px] font-medium">Streaming Feed</span>
                    <span className="font-display text-xl font-bold text-white mt-1 block">WebRTC P2P</span>
                    <span className="text-purple-400 text-[11px] font-mono mt-0.5 block">Sub-second live video sync</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Spring Boot", "Next.js", "WebRTC", "WebSockets", "Pessimistic Locking", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-neutral-800 bg-[#121522] px-3 py-1 text-xs font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-32 rounded-3xl border border-purple-500/25 bg-gradient-to-b from-[#181329] via-[#120f20] to-[#090b12] p-8 sm:p-10 shadow-2xl shadow-black/80 transition-all hover:border-purple-500/50"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 shadow-md shadow-purple-500/10">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      CompliPilot
                    </h3>
                    <p className="text-sm text-neutral-400 font-medium">
                      AI Compliance SaaS Platform
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/lehai170504/complipilot-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-neutral-700/80 bg-[#1b1630] px-4 py-2 text-xs font-semibold text-neutral-200 hover:text-white hover:border-neutral-600 transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span>Backend Repo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Enterprise automated compliance management system with multi-tenant architecture, robust Role-Based Access Control (RBAC), and AI-assisted regulatory audit workflows.
              </p>

              <div className="rounded-2xl border border-purple-500/15 bg-black/40 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-3 text-neutral-400">
                  <span className="font-medium text-neutral-300">Architecture Guarantees</span>
                  <span className="text-purple-400 font-semibold">Multi-Tenant Isolated</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-neutral-200 p-3 rounded-xl bg-[#141024]/80 border border-neutral-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Schema Isolation</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-200 p-3 rounded-xl bg-[#141024]/80 border border-neutral-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Granular RBAC</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-200 p-3 rounded-xl bg-[#141024]/80 border border-neutral-800">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Automated Audits</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Spring Boot", "Next.js", "Multi-tenant", "RBAC", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-neutral-800 bg-[#1b1530] px-3 py-1 text-xs font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sticky top-36 rounded-3xl border border-emerald-500/25 bg-gradient-to-b from-[#111e19] via-[#0d1713] to-[#090b12] p-8 sm:p-10 shadow-2xl shadow-black/80 transition-all hover:border-emerald-500/50"
          >
            <div className="flex flex-col space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-md shadow-emerald-500/10">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                      WealthTrack
                    </h3>
                    <p className="text-sm text-neutral-400 font-medium">
                      Financial Management & Portfolio Analytics
                    </p>
                  </div>
                </div>

                <a
                  href="https://github.com/lehai170504/Finance-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-[#13261f] px-4 py-2 text-xs font-semibold text-white hover:bg-[#19332a] hover:border-emerald-500/50 transition-all shadow-md shadow-emerald-950/40"
                >
                  <Github className="h-4 w-4" />
                  <span>Backend Repo</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Personal wealth tracking and budgeting engine adhering strictly to Clean Architecture principles. Leverages Redis distributed caching for ultra-low latency analytics and portfolio valuation.
              </p>

              <div className="rounded-2xl border border-emerald-500/15 bg-black/40 p-5 space-y-3">
                <div className="flex items-center justify-between text-xs border-b border-white/[0.06] pb-3 text-neutral-400">
                  <span className="font-medium text-neutral-300">Performance Profiling</span>
                  <span className="text-emerald-400 font-semibold">Redis Sub-millisecond Hits</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#0f1d17]/80 border border-neutral-800">
                    <span className="text-neutral-400 block text-[11px] font-medium">Architecture Pattern</span>
                    <span className="font-display text-lg font-bold text-white mt-1 block">Clean Architecture & DDD</span>
                    <span className="text-emerald-400 text-[11px] font-mono mt-0.5 block">Isolated Domain Entities</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0f1d17]/80 border border-neutral-800">
                    <span className="text-neutral-400 block text-[11px] font-medium">Distributed Cache Tier</span>
                    <span className="font-display text-lg font-bold text-white mt-1 block">Redis In-Memory</span>
                    <span className="text-emerald-400 text-[11px] font-mono mt-0.5 block">Query Acceleration</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {["Spring Boot", "Redis", "Clean Architecture", "PostgreSQL"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-neutral-800 bg-[#13221b] px-3 py-1 text-xs font-mono text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

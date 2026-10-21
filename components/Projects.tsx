"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState } from "react";
import {
  Github,
  Gavel,
  ShieldCheck,
  LineChart,
  ArrowUpRight,
  ArrowRight,
  Layers,
} from "lucide-react";
import CopyMarkdownButton from "./CopyMarkdownButton";
import BackendArchitecture from "./BackendArchitecture";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  badge?: { text: string; color: "rose" | "blue" | "emerald" };
  description: string;
  image?: {
    src: string;
    alt: string;
  };
  flow: string[];
  icon: React.ElementType;
  accentColor: "blue" | "purple" | "emerald";
  links: { label: string; href: string; primary?: boolean }[];
  tags: string[];
  markdownBody: string;
}

const ACCENT = {
  blue: {
    border: "border-[#d7d1c5]",
    hoverBorder: "hover:border-[#f06432]",
    from: "from-[#fffdf7]",
    via: "via-[#fffdf7]",
    iconBg: "bg-[#fbe5da]",
    iconBorder: "border-[#f3c0a8]",
    iconText: "text-[#d84d20]",
    iconShadow: "shadow-orange-900/5",
    tagBg: "bg-[#f3f0e8]",
  },
  purple: {
    border: "border-[#d7d1c5]",
    hoverBorder: "hover:border-[#f06432]",
    from: "from-[#fffdf7]",
    via: "via-[#fffdf7]",
    iconBg: "bg-[#ebe6db]",
    iconBorder: "border-[#d7d1c5]",
    iconText: "text-[#5d574d]",
    iconShadow: "shadow-black/5",
    tagBg: "bg-[#f3f0e8]",
  },
  emerald: {
    border: "border-[#d7d1c5]",
    hoverBorder: "hover:border-[#f06432]",
    from: "from-[#fffdf7]",
    via: "via-[#fffdf7]",
    iconBg: "bg-[#e7e4dc]",
    iconBorder: "border-[#d7d1c5]",
    iconText: "text-[#47443e]",
    iconShadow: "shadow-black/5",
    tagBg: "bg-[#f3f0e8]",
  },
};

const BADGE_STYLE = {
  rose: "bg-[#fbe5da] border-[#f3c0a8] text-[#b6411d]",
  blue: "bg-[#e8e5dc] border-[#d7d1c5] text-[#5d574d]",
  emerald: "bg-[#e8e5dc] border-[#d7d1c5] text-[#5d574d]",
};

const BADGE_DOT = {
  rose: "bg-[#f06432]",
  blue: "bg-[#81796c]",
  emerald: "bg-[#81796c]",
};

const PROJECTS: Project[] = [
  {
    id: "thriftly",
    name: "Thriftly",
    subtitle: "Real-Time Auction & E-Commerce Platform",
    badge: { text: "Live Auction", color: "rose" },
    description:
      "A live auction and e-commerce product built around consistent bidding, instant updates, and live video.",
    image: {
      src: "/thriftly-project.png",
      alt: "Thriftly vintage clothing auction landing page",
    },
    flow: ["Bid request", "Row lock", "WebSocket event", "Live auction"],
    icon: Gavel,
    accentColor: "blue",
    links: [
      { label: "Source", href: "https://github.com/lehai170504/thriftly" },
      { label: "Visit Site", href: "https://thrift-swap.vercel.app", primary: true },
    ],
    tags: ["Spring Boot", "Next.js", "WebRTC", "WebSockets", "Pessimistic Locking", "PostgreSQL"],
    markdownBody: `## Thriftly — Real-Time Auction & E-Commerce Platform

**Tech:** Spring Boot · Next.js · WebRTC · WebSockets · Pessimistic Locking · PostgreSQL

High-throughput live bidding and auction platform engineered with pessimistic locking to eliminate race conditions under intense bid concurrency. Integrated WebSockets for real-time bid broadcasts and WebRTC for low-latency live streaming.

- 🔗 GitHub: https://github.com/lehai170504/thriftly
- 🌐 Live: https://thrift-swap.vercel.app
`,
  },
  {
    id: "complipilot",
    name: "CompliPilot",
    subtitle: "AI Compliance SaaS Platform",
    description:
      "A compliance management SaaS focused on organization-aware access and assisted audit workflows.",
    image: {
      src: "/complipilot-project.png",
      alt: "CompliPilot compliance workspace landing page",
    },
    flow: ["Tenant", "RBAC", "Audit workflow", "AI assistance"],
    icon: ShieldCheck,
    accentColor: "purple",
    links: [
      { label: "Backend Repo", href: "https://github.com/lehai170504/complipilot-backend" },
    ],
    tags: ["Spring Boot", "Next.js", "Multi-tenant", "RBAC", "PostgreSQL"],
    markdownBody: `## CompliPilot — AI Compliance SaaS Platform

**Tech:** Spring Boot · Next.js · Multi-tenant · RBAC · PostgreSQL

Enterprise automated compliance management system with multi-tenant architecture, robust Role-Based Access Control (RBAC), and AI-assisted regulatory audit workflows.

- 🔗 GitHub: https://github.com/lehai170504/complipilot-backend
`,
  },
  {
    id: "wealthtrack",
    name: "WealthTrack",
    subtitle: "Financial Management & Portfolio Analytics",
    description:
      "A personal finance backend for budgeting, wealth tracking, and portfolio analytics.",
    flow: ["API request", "Clean Architecture", "Redis cache", "Analytics"],
    icon: LineChart,
    accentColor: "emerald",
    links: [
      { label: "Backend Repo", href: "https://github.com/lehai170504/Finance-Backend" },
    ],
    tags: ["Spring Boot", "Redis", "Clean Architecture", "PostgreSQL"],
    markdownBody: `## WealthTrack — Financial Management & Portfolio Analytics

**Tech:** Spring Boot · Redis · Clean Architecture · PostgreSQL

Personal wealth tracking and budgeting engine adhering strictly to Clean Architecture principles. Leverages Redis distributed caching for ultra-low latency analytics and portfolio valuation.

- 🔗 GitHub: https://github.com/lehai170504/Finance-Backend
`,
  },
];

function ProjectCard({
  project,
  index,
  className = "",
  revealOnScroll = true,
}: {
  project: Project;
  index: number;
  className?: string;
  revealOnScroll?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const a = ACCENT[project.accentColor];
  const Icon = project.icon;
  const isFeatured = project.id === "thriftly";
  const isArchitectureProject = project.id === "wealthtrack";

  return (
    <motion.div
      initial={revealOnScroll
        ? prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 36, scale: 0.99 }
        : false}
      whileInView={revealOnScroll ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={revealOnScroll ? { once: true, amount: 0.16, margin: "-40px" } : undefined}
      transition={{ duration: prefersReducedMotion ? 0.35 : 0.75, delay: prefersReducedMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex min-w-0 flex-col overflow-hidden border ${a.border} bg-gradient-to-br ${a.from} ${a.via} to-[#fffdf7] p-4 shadow-[0_8px_30px_rgba(42,34,22,0.04)] transition-all duration-300 hover:-translate-y-1 sm:p-6 lg:p-7 ${a.hoverBorder} ${className}`}
    >
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col gap-5 sm:gap-6">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 font-mono text-xs text-[#aaa397]">0{index + 1}</span>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.iconBg} border ${a.iconBorder} ${a.iconText} shadow-md ${a.iconShadow} sm:h-12 sm:w-12`}>
              <Icon className="h-6 w-6" />
            </div>
            <motion.div
              initial={revealOnScroll
                ? prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 22 }
                : false}
              whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
              viewport={revealOnScroll ? { once: true, amount: 0.2 } : undefined}
              transition={{ duration: prefersReducedMotion ? 0.35 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="min-w-0"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-bold text-[#1b1b18] sm:text-2xl lg:text-3xl">
                  {project.name}
                </h3>
                {project.badge && (
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-semibold ${BADGE_STYLE[project.badge.color]}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${BADGE_DOT[project.badge.color]} motion-safe:animate-pulse`} />
                    {project.badge.text}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium leading-relaxed text-[#716d65] sm:text-sm">{project.subtitle}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <CopyMarkdownButton markdown={project.markdownBody} />
            {project.links.map((link) =>
              link.primary ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#1b1b18] px-4 py-2 text-xs font-bold text-[#fffaf2] hover:bg-[#f06432] transition-all"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 border border-[#d7d1c5] px-4 py-2 text-xs font-semibold text-[#4d4942] hover:text-[#f06432] hover:border-[#f06432] transition-all"
                >
                  <Github className="h-4 w-4" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        </div>

        <div className={project.image
          ? "grid min-w-0 gap-5 sm:gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          : "flex min-w-0 flex-col gap-5 sm:gap-6"
        }>
          {project.image && (
            <motion.figure
              initial={revealOnScroll
                ? prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.94, y: 18 }
                : false}
              whileInView={revealOnScroll ? { opacity: 1, scale: 1, y: 0 } : undefined}
              viewport={revealOnScroll ? { once: true, amount: 0.18 } : undefined}
              transition={{ duration: prefersReducedMotion ? 0.35 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative order-first aspect-[16/10] w-full overflow-hidden border border-[#e5dfd3] bg-[#f3f0e8] ${
                isFeatured ? "lg:order-last" : ""
              }`}
            >
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain"
              />
            </motion.figure>
          )}

          <div className={`min-w-0 space-y-4 sm:space-y-5 ${isFeatured ? "lg:order-first" : ""}`}>
            <motion.p
              initial={revealOnScroll
                ? prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 18 }
                : false}
              whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
              viewport={revealOnScroll ? { once: true, amount: 0.2 } : undefined}
              transition={{ duration: prefersReducedMotion ? 0.35 : 0.55 }}
              className="max-w-3xl text-sm text-[#5f5a52] leading-relaxed font-normal"
            >
              {project.description}
            </motion.p>

            <div className={`border-y border-[#e5dfd3] py-4 sm:py-5 ${
              isArchitectureProject ? "bg-[#ebe7dd] px-3 sm:px-4" : ""
            }`}>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8378] sm:mb-4">
                <span className={`h-1.5 w-1.5 rounded-full ${BADGE_DOT[project.badge?.color ?? "blue"]}`} />
                {isArchitectureProject ? "Architecture / data flow" : "System flow"}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.flow.map((step, stepIndex) => (
                  <motion.div
                    key={step}
                    initial={revealOnScroll
                      ? prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 10 }
                      : false}
                    whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
                    viewport={revealOnScroll ? { once: true, amount: 0.2 } : undefined}
                    transition={{ duration: prefersReducedMotion ? 0.35 : 0.5, delay: prefersReducedMotion ? 0 : stepIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-w-0 items-center gap-2"
                  >
                    <span className={`border border-[#e5dfd3] bg-[#f7f4ed] px-2.5 py-2 font-mono text-[11px] leading-snug text-[#39362f] sm:px-3 sm:text-xs ${
                      stepIndex === 1 || isArchitectureProject ? a.iconText : ""
                    }`}>
                      {step}
                    </span>
                    {stepIndex < project.flow.length - 1 && (
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#aaa397]" aria-hidden="true" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  initial={revealOnScroll
                    ? prefersReducedMotion
                      ? { opacity: 0 }
                      : { opacity: 0, y: 8 }
                    : false}
                  whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
                  viewport={revealOnScroll ? { once: true } : undefined}
                  transition={{ duration: prefersReducedMotion ? 0.35 : 0.45, delay: prefersReducedMotion ? 0 : tagIndex * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-lg border border-[#e5dfd3] ${a.tagBg} px-3 py-1 text-xs font-mono text-[#625d54]`}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            {isFeatured && (
              <motion.div
                initial={revealOnScroll
                  ? prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 20 }
                  : false}
                whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
                viewport={revealOnScroll ? { once: true, amount: 0.15 } : undefined}
                transition={{ duration: prefersReducedMotion ? 0.35 : 0.6 }}
              >
                <BackendArchitecture />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectSlide({
  project,
  index,
  active,
  reducedMotion,
  direction,
}: {
  project: Project;
  index: number;
  active: boolean;
  reducedMotion: boolean;
  direction: number;
}) {
  return (
    <motion.div
      aria-hidden={!active}
      initial={false}
      animate={{
        opacity: active ? 1 : 0,
        x: active ? 0 : direction > 0 ? -36 : 36,
        scale: active ? 1 : 0.99,
      }}
      transition={{
        duration: reducedMotion ? 0.01 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute inset-0 ${active ? "z-10" : "pointer-events-none"}`}
    >
      <ProjectCard
        project={project}
        index={index}
        className="h-full w-full"
        revealOnScroll={false}
      />
    </motion.div>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const previousProgress = useRef(0);
  const [progressValue, setProgressValue] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgressValue(Math.round(latest * 100));
    const nextIndex = Math.min(
      PROJECTS.length - 1,
      Math.floor(latest * PROJECTS.length),
    );
    if (nextIndex !== activeProjectIndex) {
      setSlideDirection(latest > previousProgress.current ? 1 : -1);
      setActiveProjectIndex(nextIndex);
    }
    previousProgress.current = latest;
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="projects-slide-section relative scroll-mt-24 h-auto py-16 sm:py-20 lg:h-[400vh] lg:py-0"
    >
      <div
        className="projects-slide-stage sticky top-0 hidden h-screen flex-col justify-center overflow-hidden pb-6 pt-20 lg:flex"
      >
          <div className="container mx-auto w-full max-w-6xl px-6">
            <div className="mb-5 flex items-end justify-between gap-6 border-b border-[#d7d1c5] pb-5">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Selected work / 2025—26</span>
                </div>
                <h2 className="font-display text-4xl font-bold tracking-[-0.06em] text-[#1b1b18] xl:text-5xl">
                  Things I&apos;ve built<span className="text-[#f06432]">.</span>
                </h2>
              </div>
              <p className="max-w-xs text-right text-sm leading-relaxed text-[#716d65]">
                Scroll down to step through each project.
              </p>
            </div>
          </div>

          <div className="container mx-auto w-full max-w-6xl px-6">
            <div className="relative h-[min(64vh,620px)] min-h-[360px]">
              {PROJECTS.map((project, index) => (
                <ProjectSlide
                  key={project.id}
                  project={project}
                  index={index}
                  active={activeProjectIndex === index}
                  reducedMotion={Boolean(prefersReducedMotion)}
                  direction={slideDirection}
                />
              ))}
            </div>
          </div>

          <div className="container mx-auto mt-5 flex w-full max-w-6xl items-center gap-4 px-6">
            <div
              className="h-px flex-1 overflow-hidden bg-[#d7d1c5]"
              role="progressbar"
              aria-label="Project gallery progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressValue}
            >
              <motion.div
                className="h-full origin-left bg-[#f06432]"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
            <span className="shrink-0 font-mono text-[10px] text-[#716d65]">
              0{activeProjectIndex + 1} — 0{PROJECTS.length}
            </span>
          </div>
      </div>

      <div className="projects-responsive-content block py-16 sm:py-20 lg:hidden">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#d7d1c5] pb-6 sm:mb-10 sm:pb-7 sm:flex-row sm:items-end sm:justify-between">
            <motion.div
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.35 : 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]">
                <Layers className="h-3.5 w-3.5" />
                <span>Selected work / 2025—26</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-[-0.06em] text-[#1b1b18] sm:text-5xl lg:text-6xl">
                Things I&apos;ve built<span className="text-[#f06432]">.</span>
              </h2>
            </motion.div>
            <motion.p
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.35 : 0.55, delay: prefersReducedMotion ? 0 : 0.12 }}
              className="max-w-xs text-sm leading-relaxed text-[#716d65] sm:text-right"
            >
              A few real systems, and the decisions behind them.
            </motion.p>
          </div>

          <div>
            <p className="mb-3 px-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8a8378]">
              Swipe to explore / 01 — 0{PROJECTS.length}
            </p>
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-4 pb-6 sm:-mx-6 sm:gap-5 sm:px-6">
              {PROJECTS.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  className="w-[88vw] max-w-[520px] shrink-0 snap-center sm:w-[78vw]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

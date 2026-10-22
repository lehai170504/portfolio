"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Github,
  Gavel,
  ShieldCheck,
  LineChart,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
  Layers,
  X,
} from "lucide-react";
import CopyMarkdownButton from "./CopyMarkdownButton";
import BackendArchitecture from "./BackendArchitecture";

interface Project {
  id: string;
  name: string;
  subtitle: string;
  badge?: { text: string; color: "rose" | "blue" | "emerald" };
  description: string;
  challenge: string;
  engineeringDecision: string;
  images?: {
    src: string;
    alt: string;
  }[];
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

const projectListReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const PROJECTS: Project[] = [
  {
    id: "thriftly",
    name: "Thriftly",
    subtitle: "Real-Time Auction & E-Commerce Platform",
    badge: { text: "Live Auction", color: "rose" },
    description:
      "A live auction and e-commerce product built around consistent bidding, instant updates, and live video.",
    challenge:
      "Keep concurrent bids consistent while every participant sees auction updates in real time.",
    engineeringDecision:
      "Use pessimistic locking for bid writes, then broadcast accepted updates through WebSockets; WebRTC supports live streaming.",
    images: [
      { src: "/thriftly-project.png", alt: "Thriftly vintage clothing auction landing page" },
      { src: "/thriftly-auctions.png", alt: "Thriftly featured live auction listings" },
    ],
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
    challenge:
      "Keep customer workspaces isolated while supporting role-based access and audit work.",
    engineeringDecision:
      "Structure the product around multi-tenant boundaries, RBAC, and assisted audit workflows.",
    images: [
      { src: "/complipilot-project.png", alt: "CompliPilot compliance workspace landing page" },
      { src: "/complipilot-dashboard.png", alt: "CompliPilot compliance workspace dashboard" },
    ],
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
    challenge:
      "Keep budgeting and portfolio analytics organized as the finance domain grows.",
    engineeringDecision:
      "Separate the backend with Clean Architecture and use Redis caching for analytics and valuation reads.",
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
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [previewImageIndex, setPreviewImageIndex] = useState(0);
  const a = ACCENT[project.accentColor];
  const Icon = project.icon;
  const isFeatured = project.id === "thriftly";
  const isArchitectureProject = project.id === "wealthtrack";
  const images = project.images ?? [];
  const activeImage = activeImageIndex === null ? null : images[activeImageIndex];

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      } else if (event.key === "ArrowRight" && images.length > 1) {
        setActiveImageIndex((current) =>
          current === null ? 0 : (current + 1) % images.length,
        );
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        setActiveImageIndex((current) =>
          current === null ? 0 : (current - 1 + images.length) % images.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImageIndex, images.length]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReducedMotion ? 0.01 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={`relative flex min-w-0 flex-col overflow-hidden border ${a.border} bg-gradient-to-br ${a.from} ${a.via} to-[#fffdf7] p-4 shadow-[0_8px_30px_rgba(42,34,22,0.04)] transition-colors duration-300 sm:p-6 lg:p-8 ${a.hoverBorder} ${className}`}
    >
      <div className="relative flex min-h-0 min-w-0 flex-1 flex-col gap-5 sm:gap-6">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="shrink-0 font-mono text-xs text-[#aaa397]">0{index + 1}</span>
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.iconBg} border ${a.iconBorder} ${a.iconText} shadow-md ${a.iconShadow} sm:h-12 sm:w-12`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
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
            </div>
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
                  className="flex items-center gap-1.5 bg-[#1b1b18] px-4 py-2 text-xs font-bold text-[#fffaf2] hover:bg-[#f06432] transition-colors"
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
                  className="flex items-center gap-1.5 border border-[#d7d1c5] px-4 py-2 text-xs font-semibold text-[#4d4942] hover:text-[#f06432] hover:border-[#f06432] transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        </div>

        <div className={images.length > 0
          ? "grid min-w-0 gap-5 sm:gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          : "flex min-w-0 flex-col gap-5 sm:gap-6"
        }>
          {activeImageIndex !== null && activeImage && createPortal(
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: prefersReducedMotion ? 0.01 : 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              role="dialog"
              aria-modal="true"
              aria-label={`${project.name} image gallery`}
              className="fixed inset-0 z-[60] flex items-center justify-center bg-[#171612]/95 p-4 backdrop-blur-sm sm:p-8"
              onClick={(event) => {
                if (event.target === event.currentTarget) setActiveImageIndex(null);
              }}
            >
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                aria-label="Close image gallery"
                className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 text-white transition-colors hover:bg-white/15"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex h-[min(78vh,900px)] w-full max-w-6xl flex-col items-center gap-4">
                <div className="relative min-h-0 w-full flex-1">
                  <Image
                    key={activeImage.src}
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>

                {images.length > 1 && (
                  <div className="flex w-full items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((current) =>
                        current === null ? 0 : (current - 1 + images.length) % images.length
                      )}
                      aria-label="Previous image"
                      className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/15"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <div className="flex gap-2">
                      {images.map((image, index) => (
                        <button
                          key={image.src}
                          type="button"
                          onClick={() => setActiveImageIndex(index)}
                          aria-label={`Show image ${index + 1}`}
                          aria-current={index === activeImageIndex}
                          className={`relative h-12 w-16 overflow-hidden border ${
                            index === activeImageIndex ? "border-[#ff916b]" : "border-white/20"
                          }`}
                        >
                          <Image src={image.src} alt="" fill sizes="64px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveImageIndex((current) =>
                        current === null ? 0 : (current + 1) % images.length
                      )}
                      aria-label="Next image"
                      className="flex h-10 w-10 items-center justify-center border border-white/20 text-white transition-colors hover:bg-white/15"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}

                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/65">
                  {project.name} / {activeImageIndex + 1} of {images.length}
                </p>
              </div>
            </motion.div>,
            document.body,
          )}

          {images.length > 0 && (
            <figure
              className={`relative order-first aspect-[16/10] w-full overflow-hidden border border-[#e5dfd3] bg-[#f3f0e8] ${
                isFeatured ? "lg:order-last" : ""
              }`}
            >
              <div
                className="project-preview absolute inset-0"
              >
                {images.map((image, imageIndex) => (
                  <div
                    key={image.src}
                    className={`project-preview-image project-preview-image--${imageIndex} ${
                      imageIndex === previewImageIndex ? "is-selected" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={(event) => {
                    const hovered = event.currentTarget.parentElement?.matches(":hover");
                    setActiveImageIndex(hovered && images.length > 1 ? 1 : previewImageIndex);
                  }}
                  aria-label={`Open ${project.name} screenshot ${previewImageIndex + 1} of ${images.length}`}
                  className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[#171612]/70 via-transparent to-transparent p-3 text-left text-white transition-colors hover:from-[#171612]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#f06432] sm:p-4"
                >
                  <span className="inline-flex items-center gap-2 border border-white/25 bg-black/35 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] backdrop-blur-sm sm:text-[10px]">
                    <Images className="h-3.5 w-3.5" />
                    {images.length > 1 ? "Hover to preview · Click to view" : "Click to view"}
                  </span>
                  <span className="border border-white/25 bg-black/35 px-2.5 py-2 font-mono text-[9px] backdrop-blur-sm">
                    {String(images.length).padStart(2, "0")} SCREENS
                  </span>
                </button>
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setPreviewImageIndex((current) => (current + 1) % images.length);
                    }}
                    aria-label="Show next project screenshot"
                    className="absolute right-3 top-3 z-10 border border-white/25 bg-black/40 px-2.5 py-1.5 font-mono text-[9px] text-white backdrop-blur-sm transition-colors hover:bg-black/60 sm:right-4 sm:top-4"
                  >
                    {String((previewImageIndex + 1) % images.length + 1).padStart(2, "0")} /{" "}
                    {String(images.length).padStart(2, "0")} →
                  </button>
                )}
              </div>
            </figure>
          )}

          <div className={`min-w-0 space-y-4 sm:space-y-5 ${isFeatured ? "lg:order-first" : ""}`}>
            <p className="max-w-3xl text-sm font-normal leading-relaxed text-[#5f5a52]">
              {project.description}
            </p>

            <div className={`grid gap-3 sm:grid-cols-2 ${isFeatured ? "lg:grid-cols-1" : ""}`}>
              <div className="border-l-2 border-[#d7d1c5] pl-3">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8a8378]">
                  The challenge
                </p>
                <p className="text-xs leading-relaxed text-[#4d4942] sm:text-sm">
                  {project.challenge}
                </p>
              </div>
              <div className="border-l-2 border-[#f06432] pl-3">
                <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#f06432]">
                  Engineering decision
                </p>
                <p className="text-xs leading-relaxed text-[#4d4942] sm:text-sm">
                  {project.engineeringDecision}
                </p>
              </div>
            </div>

            <div className={`border-y border-[#e5dfd3] py-4 sm:py-5 ${
              isArchitectureProject ? "bg-[#ebe7dd] px-3 sm:px-4" : ""
            }`}>
              <div className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#8a8378] sm:mb-4">
                <span className={`h-1.5 w-1.5 rounded-full ${BADGE_DOT[project.badge?.color ?? "blue"]}`} />
                {isArchitectureProject ? "Architecture / data flow" : "System flow"}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.flow.map((step, stepIndex) => (
                  <div
                    key={step}
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
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-lg border border-[#e5dfd3] ${a.tagBg} px-3 py-1 text-xs font-mono text-[#625d54]`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {isFeatured && (
          <div className="border-t border-[#d7d1c5] pt-5">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#f06432]">
                  Engineering field note / 01
                </p>
                <h4 className="mt-1 font-display text-lg font-semibold tracking-tight text-[#1b1b18] sm:text-xl">
                  What happens behind a live bid?
                </h4>
              </div>
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#8a8378]">
                Request → consistent write → live update
              </span>
            </div>
            <BackendArchitecture />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 border-b border-[#d7d1c5] pb-6 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f06432]">
              <Layers className="h-3.5 w-3.5" />
              <span>Engineering field notes / selected work</span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-[-0.06em] text-[#1b1b18] sm:text-5xl">
              Things I&apos;ve built<span className="text-[#f06432]">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-[#716d65] sm:text-right">
            A few real systems, and the engineering decisions behind them.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={projectListReveal}
          className="space-y-6 sm:space-y-8"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              className="w-full"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

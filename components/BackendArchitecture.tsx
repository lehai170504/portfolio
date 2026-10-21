"use client";

import { motion, useReducedMotion } from "framer-motion";

const routes = [
  { d: "M210 105 H292", from: [210, 105], to: [292, 105], duration: 3.2 },
  { d: "M508 105 H590", from: [508, 105], to: [590, 105], duration: 3.8 },
  { d: "M400 145 V198", from: [400, 145], to: [400, 198], duration: 3.5 },
  { d: "M508 235 H550 Q570 235 570 215 V105 H590", from: [508, 235], to: [590, 105], duration: 4.8 },
  { d: "M292 235 H244 Q224 235 224 215 V105 H210", from: [292, 235], to: [210, 105], duration: 5 },
];

const nodes = [
  { x: 32, y: 70, label: "WEB CLIENT", detail: "Next.js · Browser", width: 178 },
  { x: 292, y: 70, label: "SPRING BOOT", detail: "Java · Business logic", width: 216, featured: true },
  { x: 590, y: 70, label: "POSTGRESQL", detail: "Transactional data", width: 178 },
  { x: 292, y: 198, label: "WEBSOCKET", detail: "Live bid events", width: 216 },
  { x: 590, y: 198, label: "REDIS", detail: "Cache · Presence", width: 178 },
];

export default function BackendArchitecture() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <figure className="min-w-0 border border-[#d7d1c5] bg-[#ebe7dd] p-3 sm:p-5">
      <figcaption className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:mb-3">
        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#625d54] sm:text-[10px] sm:tracking-[0.2em]">
          Under the hood / real-time bidding
        </span>
        <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-[#716d65] sm:text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#f06432]" />
          Event-driven
        </span>
      </figcaption>

      <svg
        role="img"
        aria-label="Thriftly architecture: a Next.js client sends requests to Spring Boot, which persists transactions in PostgreSQL, caches state in Redis, and broadcasts live bid events through WebSocket."
        viewBox="0 0 800 320"
        className="block h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern id="architecture-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#d7d1c5" strokeWidth="0.7" />
          </pattern>
        </defs>
        <rect width="800" height="320" fill="#f3f0e8" />
        <rect width="800" height="320" fill="url(#architecture-grid)" opacity="0.65" />

        {routes.map(({ d, from, to, duration }) => (
          <g key={d}>
            <path d={d} fill="none" stroke="#b9b1a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <motion.path
              d={d}
              fill="none"
              stroke="#f06432"
              strokeWidth="2"
              strokeDasharray="3 10"
              strokeLinecap="round"
              initial={{ strokeDashoffset: 0 }}
              animate={prefersReducedMotion ? undefined : { strokeDashoffset: -39 }}
              transition={{ duration, ease: "linear", repeat: Infinity }}
            />
            <motion.circle
              r="4"
              fill="#f06432"
              initial={{ cx: from[0], cy: from[1] }}
              animate={prefersReducedMotion
                ? { opacity: 0 }
                : { cx: [from[0], to[0]], cy: [from[1], to[1]] }}
              transition={{ duration, ease: "linear", repeat: Infinity }}
            />
          </g>
        ))}

        {nodes.map(({ x, y, label, detail, width, featured }) => (
          <g key={label}>
            <rect
              x={x}
              y={y}
              width={width}
              height="74"
              fill={featured ? "#fffdf7" : "#fffdf7"}
              stroke={featured ? "#f06432" : "#d7d1c5"}
              strokeWidth={featured ? "2" : "1"}
            />
            {featured && <rect x={x} y={y} width="5" height="74" fill="#f06432" />}
            <text
              x={x + 16}
              y={y + 31}
              fill="#39362f"
              fontFamily="var(--font-mono), monospace"
              fontSize="13"
              fontWeight="600"
              letterSpacing="1"
            >
              {label}
            </text>
            <text
              x={x + 16}
              y={y + 53}
              fill="#716d65"
              fontFamily="var(--font-sans), sans-serif"
              fontSize="12"
            >
              {detail}
            </text>
          </g>
        ))}

        <text
          x="32"
          y="286"
          fill="#8a8378"
          fontFamily="var(--font-mono), monospace"
          fontSize="10"
          letterSpacing="1.2"
        >
          THRIFTLY / BID REQUEST → CONSISTENT WRITE → LIVE UPDATE
        </text>
      </svg>
    </figure>
  );
}

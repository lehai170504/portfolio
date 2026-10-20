"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "hoanghaile175@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative border-t border-white/[0.06] bg-[#07080c] pt-28 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-80 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-600/15 via-purple-600/8 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-7 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-300 font-medium">
            <span>Get in Touch</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s build something great together.
          </h2>

          <p className="text-neutral-300/80 text-sm sm:text-base leading-relaxed">
            I&apos;m currently open to new software engineering opportunities, internships, and backend roles. Feel free to reach out.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton href={`mailto:${email}`}>
              <div className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-neutral-950 transition-all hover:bg-neutral-200 shadow-lg shadow-white/10">
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </MagneticButton>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-700/80 bg-[#121520] px-5 py-3.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-600 hover:bg-[#181d2c] hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-400" />
                  <span>{email}</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-8 flex items-center gap-6 text-neutral-400">
            <a
              href="https://github.com/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href="https://www.linkedin.com/in/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-neutral-800">•</span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </div>

          <div className="pt-12 text-xs font-mono text-neutral-500 border-t border-white/[0.06] w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Lê Hoàng Hải. All rights reserved.</p>
            <p>Designed with Next.js, Three.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const email = "hoanghaile175@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-[#d7d1c5] bg-[#1b1b18] py-14 text-[#fffaf2] sm:py-20">
      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex max-w-3xl flex-col space-y-6 sm:space-y-7">
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff916b]"
          >
            Contact / Say hello
          </motion.div>

          <motion.h2
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.7, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl font-bold leading-[0.98] tracking-[-0.06em] text-[#fffaf2] min-[380px]:text-4xl sm:text-6xl"
          >
            Have a good problem?
            <br />
            <span className="text-[#ff916b]">Let&apos;s solve it.</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.55, delay: prefersReducedMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-sm leading-relaxed text-[#c4beb2] sm:text-base"
          >
            Open to software engineering opportunities, internships, and backend roles.
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.55, delay: prefersReducedMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-3 pt-2 min-[480px]:flex-row min-[480px]:flex-wrap min-[480px]:items-center"
          >
            <MagneticButton href={`mailto:${email}`}>
              <div className="inline-flex items-center gap-2 bg-[#f06432] px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#ff8050]">
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </MagneticButton>

            <button
              onClick={handleCopyEmail}
              className="inline-flex max-w-full items-center gap-2 border border-[#4b4942] px-4 py-3.5 text-left text-xs font-semibold text-[#e3ded3] transition-colors hover:border-[#ff916b] hover:text-white sm:px-5 sm:text-sm"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[#ff916b]" />
                  <span className="text-[#ff916b]">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-[#aaa397]" />
                  <span className="break-all sm:break-normal">{email}</span>
                </>
              )}
            </button>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.5, delay: prefersReducedMotion ? 0 : 0.3 }}
            className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-4 text-[#c4beb2] sm:gap-6"
          >
            <a
              href="https://github.com/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ff916b]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <span className="text-[#4b4942]">/</span>
            <a
              href="https://www.linkedin.com/in/lehai170504"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ff916b]"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
            <span className="text-[#4b4942]">/</span>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-[#ff916b]"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.35 : 0.45, delay: prefersReducedMotion ? 0 : 0.36 }}
            className="mt-8 flex w-full flex-col items-center justify-between gap-3 border-t border-[#4b4942] pt-6 font-mono text-[10px] text-[#aaa397] sm:flex-row"
          >
            <p>© {new Date().getFullYear()} Lê Hoàng Hải. All rights reserved.</p>
            <p>Built with Next.js · Java · a lot of coffee</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

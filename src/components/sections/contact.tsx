"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { submitContact } from "@/app/actions";
import { Mail, Send, TerminalSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { portfolioData } from "@/data/content";
import { motion } from "framer-motion";

export function ContactSection() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  async function actionHandler(formData: FormData) {
    setPending(true);
    setResult(null);
    try {
      const res = await submitContact(formData);
      setResult(res);
    } catch (error) {
      setResult({ success: false, message: "An error occurred." });
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="py-32 scroll-mt-32 relative overflow-clip bg-background">
      {/* High-tech Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_40%,transparent_100%)] pointer-events-none" />

      {/* Massive Ambient Core Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-600/10 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Tech Intro & Social Nodes */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-badge mb-6">
              <TerminalSquare className="w-4 h-4" />
              <span>// STATUS: ONLINE & READY</span>
            </div>

            <h2 className="section-title">
              Let's Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                The Future
              </span>
            </h2>

            <p className="section-subtitle mb-12 text-left ml-0">
              Whether you have a massive scale system to architect, a wild idea to prototype, or just want to talk tech. My communication channels are always open.
            </p>

            {/* Tech-styled Social Nodes */}
            <div className="flex flex-col gap-4">
              {/* Email Node */}
              <a href={portfolioData.socials.email} className="group relative overflow-hidden rounded-2xl glass-card p-4 flex items-center gap-6 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-cyan-500/70 mb-1 uppercase tracking-widest">Comm_Protocol // Email</div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors truncate max-w-[200px] sm:max-w-xs">hoanghaile175@gmail.com</div>
                </div>
              </a>

              {/* Github Node */}
              <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl glass-card p-4 flex items-center gap-6 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-cyan-500/70 mb-1 uppercase tracking-widest">Comm_Protocol // GitHub</div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">@lehai170504</div>
                </div>
              </a>

              {/* LinkedIn Node */}
              <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="group relative overflow-hidden rounded-2xl glass-card p-4 flex items-center gap-6 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all">
                  <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div className="relative z-10">
                  <div className="text-[10px] font-mono text-cyan-500/70 mb-1 uppercase tracking-widest">Comm_Protocol // LinkedIn</div>
                  <div className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors truncate max-w-[200px] sm:max-w-xs">Connect with me</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Holographic Command Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Glowing Rotating Border Wrapper */}
            <div className="relative p-[1px] rounded-3xl overflow-hidden group">
              {/* The spinning conic gradient for the border */}
              <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#22d3ee_0%,#020202_50%,#22d3ee_100%)] opacity-20 group-hover:opacity-50 transition-opacity duration-1000" />

              <div className="relative glass-card rounded-3xl p-8 md:p-12 w-full h-full z-10 shadow-2xl">
                <form action={actionHandler} className="space-y-6">

                  {/* Input Field: Name */}
                  <div className="space-y-2 relative group/input">
                    <Label htmlFor="name" className="text-[10px] sm:text-xs font-mono text-cyan-500/70 uppercase tracking-widest group-focus-within/input:text-cyan-400 transition-colors">Client_Identifier</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your name..."
                      className="h-14 glass-input"
                    />
                  </div>

                  {/* Input Field: Email */}
                  <div className="space-y-2 relative group/input">
                    <Label htmlFor="email" className="text-[10px] sm:text-xs font-mono text-cyan-500/70 uppercase tracking-widest group-focus-within/input:text-cyan-400 transition-colors">Return_Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email..."
                      className="h-14 glass-input"
                    />
                  </div>

                  {/* Input Field: Message */}
                  <div className="space-y-2 relative group/input">
                    <Label htmlFor="message" className="text-[10px] sm:text-xs font-mono text-cyan-500/70 uppercase tracking-widest group-focus-within/input:text-cyan-400 transition-colors">Payload_Data</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Type your message..."
                      className="min-h-[140px] glass-input py-4 resize-none"
                    />
                  </div>

                  {/* Server Response Status */}
                  {result && (
                    <div className={`p-4 rounded-xl text-sm font-mono border ${result.success ? "bg-cyan-950/30 text-cyan-400 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.1)]" : "bg-red-950/30 text-red-400 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.1)]"}`}>
                      {result.success ? `> SUCCESS: ${result.message}` : `> ERROR: ${result.message}`}
                    </div>
                  )}

                  {/* Transmit Button */}
                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-300 font-bold text-base tracking-widest uppercase transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={pending}
                    >
                      {pending ? (
                        <>
                          <span className="animate-pulse">Transmitting...</span>
                          <Send className="w-5 h-5 animate-bounce" />
                        </>
                      ) : (
                        <>
                          <span>Transmit Payload</span>
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

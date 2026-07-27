"use client";

import { portfolioData } from "@/data/content";
import { Coffee, Leaf, Zap, Database, Box, Radio, Server, MonitorSmartphone, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32 scroll-mt-32 bg-black/40 border-y border-white/5 relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-badge mb-6">
            <span>// ABOUT ME</span>
          </div>
          <h2 className="section-title">
            Behind the Code
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {/* Block 1: The Code (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl transition-all duration-500 group-hover:opacity-100 opacity-50" />
            <div className="h-full glass-card rounded-3xl overflow-hidden relative z-10 flex flex-col">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-code-mac-red" />
                  <div className="w-3 h-3 rounded-full bg-code-mac-yellow" />
                  <div className="w-3 h-3 rounded-full bg-code-mac-green" />
                </div>
                <div className="flex-1 text-center text-xs font-mono text-muted-foreground">HoangHai.java</div>
              </div>
              {/* Code Content */}
              <div className="p-6 md:p-8 font-mono text-[13px] md:text-[14px] leading-loose overflow-x-auto text-secondary-foreground whitespace-pre">
                <span className="text-code-keyword">package</span> dev.hoanghai;<br /><br />
                <span className="text-code-comment">/**</span><br />
                <span className="text-code-comment"> * I am a Software Engineering student at FPT University, deeply passionate</span><br />
                <span className="text-code-comment"> * about architecting scalable systems and building real-time applications.</span><br />
                <span className="text-code-comment"> * My expertise spans across modern backend frameworks, database design,</span><br />
                <span className="text-code-comment"> * and cloud deployments.</span><br />
                <span className="text-code-comment"> */</span><br />
                <span className="text-code-keyword">public class</span> <span className="text-code-class">AboutMe</span> {'{'}<br />
                {'  '}<span className="text-code-keyword">public final</span> <span className="text-code-keyword">String</span> role = <span className="text-code-string">"Backend Engineer"</span>;<br />
                {'  '}<span className="text-code-keyword">public final</span> <span className="text-code-keyword">String</span> focus = <span className="text-code-string">"Scalable Systems & Real-time Apps"</span>;<br />
                <br />
                {'  '}<span className="text-code-method">@Autowired</span><br />
                {'  '}<span className="text-code-keyword">public</span> <span className="text-code-class">Mission</span> <span className="text-code-method">getMission</span>() {'{'}<br />
                {'    '}<span className="text-code-keyword">return new</span> <span className="text-code-class">Mission</span>(<span className="text-code-string">"Build robust, enterprise-grade APIs."</span>);<br />
                {'  '}{'}'}<br />
                {'}'}
              </div>
            </div>
          </motion.div>

          {/* Block 2: Tech Stack (Spans 1 column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 relative overflow-hidden group flex flex-col"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent transition-colors pointer-events-none" />
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
              <Code2 className="text-cyan-400 w-5 h-5" />
              Core Stack
            </h3>
            <div className="grid grid-cols-2 gap-3 flex-1">
              {[
                { name: "Java", icon: <Coffee className="w-5 h-5 text-orange-400" /> },
                { name: "Spring", icon: <Leaf className="w-5 h-5 text-green-400" /> },
                { name: "Next.js", icon: <Zap className="w-5 h-5 text-gray-100" /> },
                { name: "Postgres", icon: <Database className="w-5 h-5 text-blue-400" /> },
                { name: "Docker", icon: <Box className="w-5 h-5 text-blue-500" /> },
                { name: "WebRTC", icon: <Radio className="w-5 h-5 text-purple-400" /> },
              ].map((skill) => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all cursor-default">
                  {skill.icon}
                  <span className="text-xs font-medium mt-2 text-gray-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Block 3: Architecture Diagram (Spans 3 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col items-center justify-center group"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black, transparent)' }} />

            <h3 className="text-xl font-bold text-gray-200 mb-12 z-10 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Architecting for Scale & Real-time
            </h3>

            <div className="w-full overflow-x-auto pb-6 -mx-8 px-8 snap-x snap-mandatory flex justify-start md:justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:[mask-image:none]">
              <div className="flex items-start justify-center min-w-[600px] max-w-4xl gap-4 md:gap-8 z-10">

                {/* Client */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-20 md:h-24 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/20 transition-all duration-500 relative">
                      <MonitorSmartphone className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400">Client Apps</span>
                </div>

                {/* Connecting Line 1 */}
                <div className="flex-1 h-20 md:h-24 relative min-w-[30px] flex items-center overflow-hidden">
                  <div className="w-full h-px bg-white/10" />
                  {/* Request: Client -> Server */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                    animate={{ left: ["-80px", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 0, repeatDelay: 3 }}
                  />
                  {/* Response: Server -> Client */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-[2px] bg-gradient-to-l from-transparent via-teal-400 to-transparent"
                    animate={{ right: ["-80px", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 3, repeatDelay: 3 }}
                  />
                </div>

                {/* Server */}
                <div className="flex flex-col items-center gap-4 relative">
                  <div className="h-20 md:h-24 flex items-center justify-center relative">
                    <div className="absolute -inset-8 bg-cyan-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.1)] relative z-10 group-hover:border-cyan-400/50 transition-colors">
                      <Server className="w-10 h-10 md:w-12 md:h-12 text-cyan-300" />

                      {/* Mini floating elements around server */}
                      <motion.div
                        animate={{ y: [-3, 3, -3] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-black border border-white/10 flex items-center justify-center shadow-xl"
                      >
                        <Radio className="w-4 h-4 text-purple-400" />
                      </motion.div>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-cyan-200 z-10 whitespace-nowrap">Spring Boot Core</span>
                </div>

                {/* Connecting Line 2 */}
                <div className="flex-1 h-20 md:h-24 relative min-w-[30px] flex items-center overflow-hidden">
                  <div className="w-full h-px bg-white/10" />
                  {/* Request: Server -> DB */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 left-0 w-16 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    animate={{ left: ["-80px", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 1, repeatDelay: 3 }}
                  />
                  {/* Response: DB -> Server */}
                  <motion.div
                    className="absolute top-1/2 -translate-y-1/2 right-0 w-16 h-[2px] bg-gradient-to-l from-transparent via-indigo-400 to-transparent"
                    animate={{ right: ["-80px", "100%"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear", delay: 2, repeatDelay: 3 }}
                  />
                </div>

                {/* Database */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-20 md:h-24 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg group-hover:border-blue-400/30 transition-all duration-500">
                      <Database className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                  <span className="text-xs font-mono text-gray-400">PostgreSQL</span>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

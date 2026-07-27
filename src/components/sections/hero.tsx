"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/data/content";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/ui/magnetic";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen w-full relative flex items-center justify-center bg-background">

      {/* Huge Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none z-0 overflow-hidden">
        <h1 className="text-[25vw] font-bold whitespace-nowrap tracking-tighter">HOANG HAI</h1>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

      <div className="container mx-auto px-6 md:px-8 z-10 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-24 pb-12 lg:pt-32 lg:pb-16 min-h-screen">

        {/* Left Side: Title & Info */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="flex flex-col gap-6 max-w-2xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-fit backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-gray-300 tracking-wide font-mono">Available for Java/Spring Boot roles</span>
            </div>
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Hi, I'm Hoang&nbsp;Hai. <br />
            <span className="text-white/60 text-4xl md:text-5xl lg:text-[3.5rem] inline-block mt-2">Backend Engineer.</span>
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex items-center gap-4 text-xs md:text-sm tracking-[0.2em] text-white/50 uppercase mt-2 font-mono"
          >
            <span>Java</span> \ <span>Spring Boot</span> \ <span>Next.js</span> \ <span>AWS</span>
          </motion.div>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md mt-4"
          >
            {portfolioData.hero.description}
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
            className="flex flex-wrap items-center gap-5 mt-4"
          >
            <Magnetic>
              <a href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full px-8 h-14 flex items-center justify-center bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)] gap-2 font-semibold" })}>
                <span>View Projects</span>
              </a>
            </Magnetic>
            <Magnetic>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 flex items-center justify-center border-white/20 hover:bg-white/10 text-white bg-transparent backdrop-blur-md font-semibold">
                <span>Contact Me</span>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Right Side: Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="relative flex justify-center items-center h-[350px] lg:h-[500px] w-full"
        >
          {/* Tech connector lines (Decorative) */}
          <svg className="absolute left-[5%] top-[60%] w-24 h-24 stroke-white/20 hidden lg:block" fill="none" viewBox="0 0 100 100">
            <path d="M 100 20 L 50 20 L 10 60" strokeWidth="1" />
            <circle cx="10" cy="60" r="3" fill="white" className="opacity-50" />
          </svg>
          <svg className="absolute right-[5%] top-[30%] w-24 h-24 stroke-white/20 hidden lg:block" fill="none" viewBox="0 0 100 100">
            <path d="M 0 80 L 50 80 L 90 40" strokeWidth="1" />
            <circle cx="90" cy="40" r="3" fill="white" className="opacity-50" />
          </svg>

          {/* Glow effect behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-blue-500/5 to-transparent pointer-events-none z-0" />

          {/* Floating Photo Container */}
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="z-10 relative w-full max-w-[320px] lg:max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            <Image
              src="/profile.jpg"
              alt="Hoang Hai"
              fill
              sizes="(max-width: 1024px) 320px, 400px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none mix-blend-overlay" />

            {/* Inner Ring for premium look */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

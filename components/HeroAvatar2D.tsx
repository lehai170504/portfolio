"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function HeroAvatar2D() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="flex justify-center items-end relative select-none">
      <motion.div
        animate={prefersReducedMotion ? { y: 0 } : { y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[260px] h-[40px] rounded-full blur-2xl opacity-45 z-0"
          style={{ background: "radial-gradient(ellipse, rgba(198,126,82,0.24) 0%, rgba(198,126,82,0.1) 50%, transparent 80%)" }}
        />

        <div
          className="absolute -inset-8 rounded-full blur-3xl opacity-[0.07] z-0 pointer-events-none"
          style={{ background: "radial-gradient(circle at 50% 60%, #d9a17b 0%, #ead8c4 50%, transparent 70%)" }}
        />

        <Image
          src="/avatar-transparent.png"
          alt="Lê Hoàng Hải — Developer Robot"
          width={500}
          height={500}
          className="relative z-10 w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] h-auto"
          style={{
            filter: "saturate(0.82) sepia(0.08) drop-shadow(0 10px 24px rgba(68,48,31,0.14))",
          }}
          priority
        />
      </motion.div>
    </div>
  );
}

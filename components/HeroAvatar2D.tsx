"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroAvatar2D() {
  return (
    <div className="flex justify-center items-center py-6">
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[430px] md:w-[380px] md:h-[480px] cursor-pointer group"
      >
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 opacity-40 blur-2xl group-hover:opacity-75 transition duration-500" />

        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/80 shadow-2xl backdrop-blur-sm">
          <Image
            src="/avatar-2d.png"
            alt="Lê Hoàng Hải Developer"
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
            priority
          />
        </div>
      </motion.div>
    </div>
  );
}

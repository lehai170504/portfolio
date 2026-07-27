"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Spring config for smooth follow
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12); // Center the 24px cursor
      cursorY.set(e.clientY - 12);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-magnetic]")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.5)] mix-blend-screen"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? "rgba(34, 211, 238, 0.15)" : "rgba(34, 211, 238, 0)",
        borderColor: isHovered ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0.8)",
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
        animate={{
          opacity: isHovered ? 0 : 1,
          scale: isHovered ? 0 : 1
        }}
      />
    </motion.div>
  );
}

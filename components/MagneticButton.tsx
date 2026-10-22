"use client";

import { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const center = useRef<{ x: number; y: number } | null>(null);
  const reduceMotion = useReducedMotion();
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const springX = useSpring(targetX, {
    duration: 0.5,
    bounce: 0.2,
  });
  const springY = useSpring(targetY, {
    duration: 0.5,
    bounce: 0.2,
  });
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;

  useEffect(() => {
    if (reduceMotion) {
      center.current = null;
      targetX.set(0);
      targetY.set(0);
    }
  }, [reduceMotion, targetX, targetY]);

  const handlePointerEnter = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || reduceMotion) return;
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    center.current = {
      x: left + width / 2,
      y: top + height / 2,
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || reduceMotion || !center.current) return;
    targetX.set((e.clientX - center.current.x) * 0.35);
    targetY.set((e.clientY - center.current.y) * 0.35);
  };

  const handlePointerLeave = () => {
    center.current = null;
    targetX.set(0);
    targetY.set(0);
  };

  const content = (
    <motion.div
      ref={ref}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ transform }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

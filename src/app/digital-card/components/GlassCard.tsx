//src/app/digital-card/components/GlassCard.tsx

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
}

export function GlassCard({ children }: GlassCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.92,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full max-w-[380px]"
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 rounded-[36px] bg-white/30 blur-2xl" />

      {/* Glass Card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/60
          bg-white/45
          backdrop-blur-3xl
          shadow-[0_30px_80px_rgba(0,0,0,0.08)]
        "
      >
        {/* Top Highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

        {/* Left Highlight */}
        <div className="absolute left-0 top-0 h-full w-px bg-white/40" />

        {/* Reflection */}
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/40 blur-3xl" />

        {/* Orange Glow */}
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#F7A300]/10 blur-3xl" />

        <div className="relative z-10 px-8 py-12">
          {children}
        </div>
      </div>
    </motion.div>
  );
}